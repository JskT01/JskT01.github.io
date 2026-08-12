const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function initializeRevealAnimations() {
  const revealElements = document.querySelectorAll(".panel, .timeline-item");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.01,
    }
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}

function initializeExperienceModal() {
  const modal = document.querySelector("#experience-modal");
  const dialog = modal?.querySelector(".experience-modal-dialog");
  const backdrop = modal?.querySelector("[data-modal-backdrop]");
  const closeButton = modal?.querySelector(".experience-modal-close");
  const modalTitle = modal?.querySelector("#experience-modal-title");
  const modalDescription = modal?.querySelector("#experience-modal-description");
  const modalMeta = modal?.querySelector("#experience-modal-meta");
  const modalBody = modal?.querySelector("#experience-modal-body");
  const detailButtons = document.querySelectorAll(".experience-details-button");

  if (
    !modal ||
    !dialog ||
    !backdrop ||
    !closeButton ||
    !modalTitle ||
    !modalDescription ||
    !modalMeta ||
    !modalBody ||
    detailButtons.length === 0
  ) {
    return;
  }

  let activeTrigger = null;
  let closeTimer = null;
  let previousBodyStyles = null;

  function remapClonedIds(container, experienceKey) {
    const idMap = new Map();

    container.querySelectorAll("[id]").forEach((element) => {
      const previousId = element.id;
      const modalId = `${experienceKey}-modal-${previousId}`;
      idMap.set(previousId, modalId);
      element.id = modalId;
    });

    ["aria-labelledby", "aria-describedby", "aria-controls", "for"].forEach((attribute) => {
      container.querySelectorAll(`[${attribute}]`).forEach((element) => {
        const values = element.getAttribute(attribute)?.split(/\s+/) ?? [];
        const remappedValues = values.map((value) => idMap.get(value) ?? value);
        element.setAttribute(attribute, remappedValues.join(" "));
      });
    });
  }

  function lockPageScroll() {
    const body = document.body;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const computedPaddingRight = Number.parseFloat(window.getComputedStyle(body).paddingRight) || 0;

    previousBodyStyles = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };

    body.classList.add("modal-open");
    body.style.overflow = "hidden";
    body.style.paddingRight = `${computedPaddingRight + scrollbarWidth}px`;
  }

  function unlockPageScroll() {
    if (!previousBodyStyles) {
      return;
    }

    const body = document.body;
    body.classList.remove("modal-open");
    body.style.overflow = previousBodyStyles.overflow;
    body.style.paddingRight = previousBodyStyles.paddingRight;
    previousBodyStyles = null;
  }

  function trapFocus(event) {
    const focusableElements = Array.from(dialog.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
      (element) => !element.hasAttribute("hidden") && element.getAttribute("aria-hidden") !== "true"
    );

    if (focusableElements.length === 0) {
      event.preventDefault();
      dialog.focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement;

    if (activeElement === dialog) {
      event.preventDefault();
      (event.shiftKey ? lastElement : firstElement).focus();
      return;
    }

    if (event.shiftKey && activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  function handleModalKeydown(event) {
    if (modal.hidden || modal.getAttribute("aria-hidden") === "true") {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeExperienceModal();
      return;
    }

    if (event.key === "Tab") {
      trapFocus(event);
    }
  }

  function openExperienceModal(trigger) {
    const projectModal = document.querySelector("#project-modal");
    if (projectModal && !projectModal.hidden) {
      return;
    }

    const experienceKey = trigger.dataset.experience;
    const source = document.querySelector(`#experience-${experienceKey}-details`);

    if (!experienceKey || !source) {
      return;
    }

    if (closeTimer) {
      window.clearTimeout(closeTimer);
      closeTimer = null;
    }

    const clonedContent = document.createElement("div");
    clonedContent.innerHTML = source.innerHTML;
    remapClonedIds(clonedContent, experienceKey);

    modalBody.replaceChildren(...Array.from(clonedContent.childNodes));
    modalBody.scrollTop = 0;
    dialog.scrollTop = 0;
    modalTitle.textContent = trigger.dataset.company ?? "";
    modalDescription.textContent = trigger.dataset.position ?? "";
    modalMeta.textContent = trigger.dataset.client
      ? `${trigger.dataset.dates ?? ""} · Client: ${trigger.dataset.client}`
      : trigger.dataset.dates ?? "";
    window.portfolioI18n?.applyTo(modal);

    activeTrigger = trigger;
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    lockPageScroll();

    window.requestAnimationFrame(() => {
      modalBody.scrollTop = 0;
      dialog.scrollTop = 0;
      modal.classList.add("is-open");
      dialog.focus({ preventScroll: true });
    });
  }

  function closeExperienceModal() {
    if (modal.hidden || modal.getAttribute("aria-hidden") === "true") {
      return;
    }

    const triggerToRestore = activeTrigger;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    unlockPageScroll();
    activeTrigger = null;
    triggerToRestore?.focus({ preventScroll: true });

    closeTimer = window.setTimeout(
      () => {
        modal.hidden = true;
        modalBody.replaceChildren();
        closeTimer = null;
      },
      prefersReducedMotion ? 0 : 220
    );
  }

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => openExperienceModal(button));
  });

  closeButton.addEventListener("click", closeExperienceModal);
  backdrop.addEventListener("click", closeExperienceModal);
  document.addEventListener("keydown", handleModalKeydown);
}

function initializeProjectModal() {
  const modal = document.querySelector("#project-modal");
  const dialog = modal?.querySelector(".project-modal-dialog");
  const backdrop = modal?.querySelector("[data-project-modal-backdrop]");
  const closeButton = modal?.querySelector(".project-modal-close");
  const modalCategory = modal?.querySelector("#project-modal-category");
  const modalTitle = modal?.querySelector("#project-modal-title");
  const modalDescription = modal?.querySelector("#project-modal-description");
  const modalBody = modal?.querySelector("#project-modal-body");
  const modalLayout = modal?.querySelector("#project-modal-layout");
  const caseStudyButtons = document.querySelectorAll(".project-case-study-button");

  if (
    !modal ||
    !dialog ||
    !backdrop ||
    !closeButton ||
    !modalCategory ||
    !modalTitle ||
    !modalDescription ||
    !modalBody ||
    !modalLayout ||
    caseStudyButtons.length === 0
  ) {
    return;
  }

  let activeTrigger = null;
  let suspendedCardIframe = null;
  let closeTimer = null;
  let previousBodyStyles = null;

  function lockBodyScroll() {
    const body = document.body;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const computedPaddingRight = Number.parseFloat(window.getComputedStyle(body).paddingRight) || 0;

    previousBodyStyles = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };

    body.classList.add("modal-open");
    body.style.overflow = "hidden";
    body.style.paddingRight = `${computedPaddingRight + scrollbarWidth}px`;
  }

  function unlockBodyScroll() {
    if (!previousBodyStyles) {
      return;
    }

    document.body.classList.remove("modal-open");
    document.body.style.overflow = previousBodyStyles.overflow;
    document.body.style.paddingRight = previousBodyStyles.paddingRight;
    previousBodyStyles = null;
  }

  function trapProjectModalFocus(event) {
    const focusableElements = Array.from(dialog.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
      (element) => !element.hasAttribute("hidden") && element.getAttribute("aria-hidden") !== "true"
    );

    if (focusableElements.length === 0) {
      event.preventDefault();
      dialog.focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement;

    if (activeElement === dialog) {
      event.preventDefault();
      (event.shiftKey ? lastElement : firstElement).focus();
    } else if (event.shiftKey && activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  function stopProjectMedia() {
    if (suspendedCardIframe?.dataset.suspendedSrc) {
      suspendedCardIframe.src = suspendedCardIframe.dataset.suspendedSrc;
      delete suspendedCardIframe.dataset.suspendedSrc;
    }

    suspendedCardIframe = null;
  }

  function populateProjectModal(projectId) {
    const template = document.querySelector(`template[data-project-template="${projectId}"]`);
    if (!template) {
      return false;
    }

    modalCategory.textContent = template.dataset.category ?? "";
    modalTitle.textContent = template.dataset.title ?? "";
    modalDescription.textContent = template.dataset.summary ?? "";
    modalLayout.replaceChildren(template.content.cloneNode(true));
    window.portfolioI18n?.applyTo(modal);
    return true;
  }

  function openProjectModal(projectId, trigger) {
    const experienceModal = document.querySelector("#experience-modal");
    if (experienceModal && !experienceModal.hidden) {
      return;
    }

    if (closeTimer) {
      window.clearTimeout(closeTimer);
      closeTimer = null;
    }

    stopProjectMedia();
    if (!populateProjectModal(projectId)) {
      return;
    }
    modalBody.scrollTop = 0;
    dialog.scrollTop = 0;

    suspendedCardIframe = trigger.closest(".project-card")?.querySelector("iframe") ?? null;
    if (suspendedCardIframe) {
      suspendedCardIframe.dataset.suspendedSrc = suspendedCardIframe.src;
      suspendedCardIframe.removeAttribute("src");
    }

    activeTrigger = trigger;
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    lockBodyScroll();

    window.requestAnimationFrame(() => {
      modalBody.scrollTop = 0;
      dialog.scrollTop = 0;
      modal.classList.add("is-open");
      closeButton.focus({ preventScroll: true });
    });
  }

  function closeProjectModal() {
    if (modal.hidden || modal.getAttribute("aria-hidden") === "true") {
      return;
    }

    const triggerToRestore = activeTrigger;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    stopProjectMedia();
    unlockBodyScroll();
    activeTrigger = null;
    triggerToRestore?.focus({ preventScroll: true });

    closeTimer = window.setTimeout(
      () => {
        modal.hidden = true;
        modalLayout.replaceChildren();
        closeTimer = null;
      },
      prefersReducedMotion ? 0 : 220
    );
  }

  function handleProjectModalKeydown(event) {
    if (modal.hidden || modal.getAttribute("aria-hidden") === "true") {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeProjectModal();
    } else if (event.key === "Tab") {
      trapProjectModalFocus(event);
    }
  }

  caseStudyButtons.forEach((button) => {
    button.addEventListener("click", () => openProjectModal(button.dataset.project, button));
  });

  closeButton.addEventListener("click", closeProjectModal);
  backdrop.addEventListener("click", closeProjectModal);
  document.addEventListener("keydown", handleProjectModalKeydown);
}

function initializeMobileMenu() {
  const topbar = document.querySelector(".topbar");
  const toggle = topbar?.querySelector(".mobile-menu-toggle");
  const panel = topbar?.querySelector(".header-actions-panel");
  const backdrop = topbar?.querySelector(".mobile-menu-backdrop");
  const mobileQuery = window.matchMedia("(max-width: 768px)");

  if (!topbar || !toggle || !panel || !backdrop) {
    return;
  }

  function updateToggleLabel(isOpen) {
    const isSpanish = document.documentElement.lang === "es";
    toggle.setAttribute(
      "aria-label",
      isOpen
        ? isSpanish ? "Cerrar menú de navegación" : "Close navigation menu"
        : isSpanish ? "Abrir menú de navegación" : "Open navigation menu"
    );
  }

  function closeMenu({ restoreFocus = false } = {}) {
    if (!topbar.classList.contains("is-menu-open")) {
      return;
    }
    topbar.classList.remove("is-menu-open");
    document.body.classList.remove("mobile-menu-open");
    toggle.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", String(mobileQuery.matches));
    updateToggleLabel(false);
    if (restoreFocus) toggle.focus({ preventScroll: true });
  }

  function openMenu() {
    if (!mobileQuery.matches) {
      return;
    }
    topbar.classList.add("is-menu-open");
    document.body.classList.add("mobile-menu-open");
    toggle.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");
    updateToggleLabel(true);
    panel.querySelector("a, button")?.focus({ preventScroll: true });
  }

  toggle.addEventListener("click", () => {
    topbar.classList.contains("is-menu-open") ? closeMenu() : openMenu();
  });
  backdrop.addEventListener("click", () => closeMenu({ restoreFocus: true }));
  panel.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (!mobileQuery.matches) {
        return;
      }

      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;
      if (!target) {
        closeMenu();
        return;
      }

      event.preventDefault();
      closeMenu();

      window.requestAnimationFrame(() => {
        const headerBottom = topbar.getBoundingClientRect().bottom;
        const targetTop = target.getBoundingClientRect().top + window.scrollY;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        window.scrollTo({
          top: Math.max(0, targetTop - headerBottom - 16),
          behavior: prefersReducedMotion ? "auto" : "smooth"
        });
        window.history.pushState(null, "", targetId);
      });
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && topbar.classList.contains("is-menu-open")) {
      event.preventDefault();
      closeMenu({ restoreFocus: true });
      return;
    }
    if (event.key === "Tab" && topbar.classList.contains("is-menu-open")) {
      const focusable = [toggle, ...panel.querySelectorAll("a, button")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches) {
      closeMenu();
      panel.setAttribute("aria-hidden", "false");
    } else {
      panel.setAttribute("aria-hidden", "true");
    }
  });
  window.addEventListener("portfolio-language-change", () => {
    updateToggleLabel(topbar.classList.contains("is-menu-open"));
  });
  panel.setAttribute("aria-hidden", String(mobileQuery.matches));
  updateToggleLabel(false);
}

function initializePortfolio() {
  window.portfolioI18n?.initialize();
  initializeMobileMenu();
  initializeRevealAnimations();
  initializeExperienceModal();
  initializeProjectModal();
}

document.addEventListener("DOMContentLoaded", initializePortfolio, { once: true });
