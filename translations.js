(() => {
  "use strict";

  const STORAGE_KEY = "portfolio-language";
  const DEFAULT_LANGUAGE = "en";
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();

  const translations = {
    en: {
      title: "Jessica Tello | Senior Unity & XR Engineer · Technical Lead",
      description:
        "Senior Unity & XR Software Engineer and Technical Lead specializing in cross-platform SDK integration, industrial simulation, real-time 3D systems, native integration, and production delivery.",
    },
    es: {
      title: "Jessica Tello | Ingeniera Senior Unity & XR · Líder Técnica",
      description:
        "Ingeniera Senior de Software Unity & XR y Líder Técnica especializada en integración de SDK multiplataforma, simulación industrial, sistemas 3D en tiempo real, integración nativa y entregas a producción.",
      text: {
        "Senior Unity & XR Software Engineer": "Ingeniera Senior de Software Unity & XR",
        "Projects": "Proyectos",
        "Leadership": "Liderazgo",
        "Stack": "Tecnologías",
        "Experience": "Experiencia",
        "Recommendations": "Recomendaciones",
        "Contact": "Contacto",
        "Download CV": "Descargar CV",
        "Technical Lead": "Líder Técnica",
        "Senior Unity & XR Engineer building": "Ingeniera Senior Unity & XR que desarrolla",
        "production-ready systems": "sistemas listos para producción",
        "across platforms.": "en múltiples plataformas.",
        "Cross-Platform SDK Integration": "Integración de SDK multiplataforma",
        "Industrial Simulation": "Simulación industrial",
        "I am a Senior Unity & XR Software Engineer and": "Soy Ingeniera Senior de Software Unity & XR y",
        "with": "con",
        "6+ years": "más de 6 años",
        "building maintainable, production-ready": "desarrollando sistemas mantenibles y listos para producción",
        "cross-platform": "multiplataforma",
        "systems across Unity XR, industrial simulations, multiplayer applications, and Epic Online Services SDK integrations.": "en Unity XR, simulaciones industriales, aplicaciones multijugador e integraciones del SDK de Epic Online Services.",
        "I combine hands-on C# development, native plugin debugging, build-process optimization, reusable architecture, and technical documentation with Agile delivery, mentoring, team coordination, and stakeholder communication from planning and architecture through validation and": "Combino desarrollo práctico en C#, depuración de plugins nativos, optimización de procesos de build, arquitectura reutilizable y documentación técnica con entrega Agile, mentoría, coordinación de equipos y comunicación con stakeholders, desde la planificación y arquitectura hasta la validación y el",
        "production release": "release de producción",
        "Architecture": "Arquitectura",
        "Team Leadership": "Liderazgo de equipos",
        "Scrum Facilitation": "Facilitación Scrum",
        "Technical Delivery": "Entrega técnica",
        "Served as a developer for the Epic Online Services Unity plugin, contributing to": "Trabajé como desarrollador del plugin de Epic Online Services para Unity y contribuí a",
        "7 public production releases": "7 releases públicos de producción",
        "1 release end-to-end": "1 release end-to-end",
        ", owning": ", con responsabilidad integral sobre",
        ", and validating": ", y validando",
        "5 operating systems:": "5 sistemas operativos:",
        "Windows, Android, macOS, iOS, and Linux.": "Windows, Android, macOS, iOS y Linux.",
        "View Selected Work": "Ver proyectos destacados",
        "Download Resume": "Descargar CV",
        "Contact Me": "Contáctame",
        "Cross-Platform Engineering": "Ingeniería multiplataforma",
        "Location": "Ubicación",
        "Availability": "Disponibilidad",
        "Remote": "Remoto",
        "Open to Relocation": "Disponible para reubicación",
        "6+ Years": "Más de 6 años",
        "Professional experience": "Experiencia profesional",
        "7 Releases": "7 releases",
        "Delivered in 14 months": "Entregados en 14 meses",
        "7+ Platforms": "Más de 7 plataformas",
        "Desktop, mobile, web, console and XR": "Desktop, móvil, web, consola y XR",
        "Architecture, mentoring and delivery": "Arquitectura, mentoría y entrega",
        "Selected work": "Trabajo destacado",
        "Selected projects and case studies": "Proyectos seleccionados y casos de estudio",
        "Vehicle Simulation": "Simulación de vehículos",
        "Safety Training": "Capacitación en seguridad",
        "Procedural Training": "Capacitación procedimental",
        "Robotics": "Robótica",
        "Industrial VR · Vehicle Simulation": "Industrial VR · Simulación de vehículos",
        "Industrial VR · Safety Training": "Industrial VR · Capacitación en seguridad",
        "Industrial XR · Procedural Training": "Industrial XR · Capacitación procedimental",
        "Industrial AR · Robotics": "Industrial AR · Robótica",
        "Physics-driven VR simulation for forklift operation, material handling, route navigation, and safety-oriented driving.": "Simulación VR basada en física para operación de montacargas, manejo de materiales, navegación de rutas y conducción orientada a la seguridad.",
        "Role": "Rol",
        "Sole Unity/XR Developer - complete PoC ownership.": "Única desarrolladora Unity/XR, responsable integral del PoC.",
        "Platform": "Plataforma",
        "Key Engineering": "Ingeniería clave",
        "Vehicle Physics": "Física de vehículos",
        "Dynamic Center of Mass": "Centro de masa dinámico",
        "Fork Mechanics": "Mecánica de horquillas",
        "Training Validation": "Validación de capacitación",
        "Outcome": "Resultado",
        "Delivered a complete training PoC with load-dependent vehicle behavior, material-handling mechanics, route validation, collision feedback, and VR comfort improvements.": "Entregué un PoC completo de capacitación con comportamiento del vehículo dependiente de la carga, mecánicas de manejo de materiales, validación de rutas, feedback de colisiones y mejoras de confort VR.",
        "View case study": "Ver caso de estudio",
        "Watch Demo": "Ver demo",
        "ONLINE MULTIPLAYER": "MULTIJUGADOR ONLINE",
        "3D SHOOTER": "SHOOTER 3D",
        "A playable 3D multiplayer shooter prototype where up to four players create or join online rooms, select unique characters, and compete inside a synchronized industrial arena.": "Prototipo jugable de shooter 3D multijugador donde hasta cuatro jugadores crean o se unen a salas online, seleccionan personajes únicos y compiten en una arena industrial sincronizada.",
        "Unity Gameplay & Multiplayer Developer.": "Desarrolladora de gameplay y multijugador en Unity.",
        "Real-Time Networking": "Networking en tiempo real",
        "Character Synchronization": "Sincronización de personajes",
        "Projectile Combat": "Combate con proyectiles",
        "Match State Management.": "Gestión del estado de la partida.",
        "Built a functional multiplayer gameplay loop integrating named rooms, four selectable characters, synchronized movement and animations, projectile combat, health, respawning, and victory conditions. The project remains under continuous improvement.": "Construí un gameplay loop multijugador funcional con salas nombradas, cuatro personajes seleccionables, movimiento y animaciones sincronizados, combate con proyectiles, salud, respawn y condiciones de victoria. El proyecto continúa en mejora constante.",
        "Watch gameplay": "Ver gameplay",
        "A 3D multiplayer shooter developed in Unity where up to four players can join a named room, select different characters, and compete in an industrial arena with synchronized movement, combat, and match state.": "Shooter 3D multijugador desarrollado en Unity donde hasta cuatro jugadores pueden unirse a una sala con nombre, elegir distintos personajes y competir en una arena industrial con movimiento, combate y estado de partida sincronizados.",
        "Photon PUN provides the project’s online communication layer. Server connection, named-room management, player spawning, and match-state updates are separated into focused components that organize the complete multiplayer lifecycle.": "Photon PUN proporciona la capa de comunicación online del proyecto. La conexión al servidor, la gestión de salas con nombre, el spawning de jugadores y las actualizaciones del estado de partida están separados en componentes especializados que organizan todo el ciclo multijugador.",
        "Rooms support up to four participants and use Photon Custom Properties to preserve information such as each player’s selected character and active state.": "Las salas admiten hasta cuatro participantes y utilizan Photon Custom Properties para conservar información como el personaje seleccionado y el estado activo de cada jugador.",
        "The project includes four selectable characters: Mar, Alien, Alan, and Mouse. Character choices are communicated through Photon RPCs and removed from the available list to prevent another participant from selecting the same character.": "El proyecto incluye cuatro personajes seleccionables: Mar, Alien, Alan y Mouse. Las selecciones se comunican mediante Photon RPCs y se eliminan de la lista disponible para impedir que otro participante elija el mismo personaje.",
        "When a participant leaves the room, the corresponding character becomes available again.": "Cuando un participante abandona la sala, el personaje correspondiente vuelve a estar disponible.",
        "The local player controls movement, rotation, and gravity through a Character Controller. Position and rotation data are transmitted across the network and interpolated on remote clients to produce smoother motion.": "El jugador local controla movimiento, rotación y gravedad mediante un Character Controller. Los datos de posición y rotación se transmiten por la red y se interpolan en los clientes remotos para producir un movimiento más fluido.",
        "Running and death states are also synchronized so every participant observes consistent character animations.": "Los estados de carrera y muerte también se sincronizan para que todos los participantes observen animaciones coherentes.",
        "Each character can fire physical projectiles with configurable speed, fire rate, and lifetime. Projectile collisions identify the affected player and request damage through Photon RPCs.": "Cada personaje puede disparar proyectiles físicos con velocidad, cadencia y duración configurables. Las colisiones identifican al jugador afectado y solicitan el daño mediante Photon RPCs.",
        "Every player starts with five health points and has a visual interface that updates as damage is received.": "Cada jugador comienza con cinco puntos de salud y dispone de una interfaz visual que se actualiza al recibir daño.",
        "The system manages random spawning across four arena positions, player elimination, respawning, and the active state of every participant.": "El sistema gestiona el spawning aleatorio en cuatro posiciones de la arena, la eliminación, el respawn y el estado activo de cada participante.",
        "When only one active player remains, the victory screen displays the winning character. Eliminated players receive a defeat screen before leaving the room.": "Cuando queda un solo jugador activo, la pantalla de victoria muestra al personaje ganador. Los jugadores eliminados reciben una pantalla de derrota antes de abandonar la sala.",
        "The match takes place in an industrial arena built with modular structures, walls, lighting, and collision boundaries. The complete flow includes room management, character selection, gameplay instructions, a loading screen, background music, and match-result screens.": "La partida se desarrolla en una arena industrial construida con estructuras modulares, muros, iluminación y límites de colisión. El flujo completo incluye gestión de salas, selección de personajes, instrucciones, pantalla de carga, música y pantallas de resultado.",
        "Additive scene management separates the menu, gameplay systems, and environment, keeping the project flow more modular and organized.": "La gestión aditiva de escenas separa el menú, los sistemas de gameplay y el entorno, manteniendo un flujo más modular y organizado.",
        "The project establishes a functional foundation for a multiplayer shooter: online connectivity, rooms for up to four players, exclusive character selection, synchronized movement and animations, projectile combat, health, respawning, and victory and defeat conditions.": "El proyecto establece una base funcional para un shooter multijugador: conectividad online, salas de hasta cuatro jugadores, selección exclusiva de personajes, movimiento y animaciones sincronizados, combate con proyectiles, salud, respawn y condiciones de victoria y derrota.",
        "Shooter Arena is currently a playable prototype and remains under continuous improvement, with ongoing work focused on stronger network reliability, gameplay polish, clearer user feedback, and preparation for a stable distributable build.": "Shooter Arena es actualmente un prototipo jugable en mejora continua, con trabajo enfocado en fortalecer la fiabilidad de red, pulir el gameplay, clarificar el feedback y preparar un build distribuible estable.",
        "The next development iterations are focused on strengthening the multiplayer foundation and improving the overall player experience.": "Las siguientes iteraciones se enfocan en fortalecer la base multijugador y mejorar la experiencia general.",
        "Strengthen projectile and damage authority across the network.": "Fortalecer la autoridad de proyectiles y daño en la red.",
        "Improve reconnection and player-disconnection handling.": "Mejorar la reconexión y el manejo de desconexiones.",
        "Refine respawning and match-state reset behavior.": "Refinar el respawn y el restablecimiento del estado de partida.",
        "Add clearer feedback for room creation and joining errors.": "Añadir feedback más claro para errores al crear o unirse a salas.",
        "Consolidate player controls through Unity’s Input System.": "Consolidar los controles mediante Unity Input System.",
        "Improve camera behavior, impact feedback, visual effects, and audio.": "Mejorar el comportamiento de cámara, feedback de impactos, efectos visuales y audio.",
        "Introduce scoring, a match timer, and additional game modes.": "Incorporar puntuación, temporizador de partida y modos adicionales.",
        "Optimize the industrial environment and test under different network conditions.": "Optimizar el entorno industrial y probarlo bajo distintas condiciones de red.",
        "Prepare a stable Windows build and a public gameplay demonstration.": "Preparar un build estable para Windows y una demostración pública de gameplay.",
        "End-to-end VR safety-training simulation for elevated-platform operation, harness validation, hazard detection, and controlled fall-arrest behavior.": "Simulación integral de capacitación de seguridad en VR para operación de plataformas elevadas, validación de arnés, detección de peligros y comportamiento controlado de detención de caídas.",
        "Unity/XR Developer - complete PoC implementation.": "Desarrolladora Unity/XR, implementación completa del PoC.",
        "Platform Physics": "Física de plataforma",
        "Procedural Safety Validation": "Validación procedimental de seguridad",
        "Fall Simulation": "Simulación de caídas",
        "VR Comfort": "Confort VR",
        "Delivered a complete industrial VR PoC combining elevated-platform physics, procedural safety validation, controlled fall behavior, multimodal feedback, and VR comfort improvements.": "Entregué un PoC industrial VR completo que combina física de plataforma elevada, validación procedimental de seguridad, comportamiento controlado de caída, feedback multimodal y mejoras de confort VR.",
        "Industrial VR proof of concept for practicing elevated-platform operation, working-at-height safety procedures, harness use, and controlled fall-arrest behavior without real-world fall exposure.": "Prueba de concepto industrial VR para practicar la operación de plataformas elevadas, procedimientos de seguridad en altura, uso de arnés y detención controlada de caídas sin exposición a riesgos reales.",
        "Owned the complete PoC implementation across simulation architecture, environment and model integration, platform physics, SteamVR interaction, procedural safety logic, fall behavior, feedback, optimization, comfort testing, and iterative refinement.": "Fui responsable de la implementación completa del PoC: arquitectura de simulación, integración de entorno y modelos, física de plataforma, interacción SteamVR, lógica procedimental de seguridad, comportamiento de caída, feedback, optimización, pruebas de confort y refinamiento iterativo.",
        "Working-at-height training requires specialized equipment and supervision, while incorrect anchorage, unsafe platform operation, equipment failure, and falls are difficult to demonstrate safely and repeatedly.": "La capacitación para trabajo en altura requiere equipo especializado y supervisión; además, el anclaje incorrecto, la operación insegura, las fallas del equipo y las caídas son difíciles de demostrar de forma segura y repetible.",
        "Maintain stable and comfortable VR interaction while the user operates a moving elevated platform, while simultaneously validating harness state, approved anchorage, safe-zone boundaries, procedural progression, hazardous conditions, and controlled fall behavior.": "Mantener una interacción VR estable y cómoda mientras el usuario opera una plataforma elevada en movimiento, validando simultáneamente el estado del arnés, el anclaje aprobado, los límites de la zona segura, el avance del procedimiento, las condiciones peligrosas y la caída controlada.",
        "Simulation Architecture": "Arquitectura de simulación",
        "Structured the PoC around explicit training states for preparation, harness validation, platform operation, elevated work, unsafe conditions, falling, suspension, recovery, and reset. Integrated the environment, platform, safety equipment, machinery, anchorage points, hazards, and interactive models around that flow.": "Estructuré el PoC mediante estados explícitos de capacitación para preparación, validación del arnés, operación de plataforma, trabajo elevado, condiciones inseguras, caída, suspensión, recuperación y reinicio. Integré el entorno, la plataforma, el equipo de seguridad, la maquinaria, los puntos de anclaje, los peligros y los modelos interactivos alrededor de ese flujo.",
        "Platform Physics and Interaction": "Física e interacción de plataforma",
        "Constrained platform movement with physical controls, minimum and maximum elevation limits, and smooth acceleration and deceleration. Configured rigidbodies, colliders, movement constraints, and collision behavior while stabilizing the player relative to the moving platform for predictable interaction and VR comfort.": "Restringí el movimiento de la plataforma con controles físicos, límites mínimos y máximos de elevación, y aceleración y desaceleración suaves. Configuré rigidbodies, colliders, restricciones y colisiones, estabilizando al jugador respecto a la plataforma móvil para lograr interacción predecible y confort VR.",
        "Safety and Procedural Validation": "Seguridad y validación procedimental",
        "Validated safe zones, working boundaries, user position, harness state, and approved anchorage before operation. Locked interactions during unsafe or incomplete states and added guidance, invalid-action handling, procedural penalties, reset logic, and recovery paths.": "Validé zonas seguras, límites de trabajo, posición del usuario, estado del arnés y anclaje aprobado antes de operar. Bloqueé interacciones en estados inseguros o incompletos y añadí guía, manejo de acciones no válidas, penalizaciones, reinicio y rutas de recuperación.",
        "Fall Simulation and VR Comfort": "Simulación de caídas y confort VR",
        "Connected fall detection to a controlled falling sequence and suspended fall-arrest state. Camera stabilization, reduced unnecessary visual movement, controlled suspension transitions, and acceleration refinement limited abrupt motion during platform and fall events.": "Conecté la detección de caídas con una secuencia controlada y un estado suspendido de detención. La estabilización de cámara, la reducción de movimiento visual innecesario, las transiciones controladas y el ajuste de aceleración limitaron los movimientos abruptos.",
        "Feedback, Optimization, and Testing": "Feedback, optimización y pruebas",
        "Combined visual, spatial-audio, alarm, and controller-haptic feedback for actions, errors, impacts, hazards, and completion. Added damaged-lamp and baked-lighting effects, optimized shadows, polygons, draw calls, physics, and collision checks, and iteratively tested platform behavior, safety interactions, falls, comfort, and performance beyond the early video version.": "Combiné feedback visual, audio espacial, alarmas y respuesta háptica de controles para acciones, errores, impactos, peligros y finalización. Añadí efectos de lámpara dañada y baked lighting; optimicé sombras, polígonos, draw calls, física y colisiones; y probé iterativamente la plataforma, las interacciones, las caídas, el confort y el rendimiento más allá de la versión inicial del video.",
        "Delivered a complete and functional industrial VR safety-training PoC integrating platform physics, state-dependent safety validation, controlled fall behavior, multimodal feedback, and VR comfort improvements.": "Entregué un PoC industrial VR de capacitación en seguridad completo y funcional que integra física de plataforma, validación de seguridad dependiente del estado, caída controlada, feedback multimodal y mejoras de confort VR.",
        "Immersive procedural simulation for practicing the safe isolation, locking, verification, and restoration of an industrial valve.": "Simulación procedimental inmersiva para practicar el aislamiento, bloqueo, verificación y restablecimiento seguros de una válvula industrial.",
        "Unity/XR Engineer.": "Ingeniera Unity/XR.",
        "Procedural State Validation": "Validación de estados procedimentales",
        "Interaction Blocking": "Bloqueo de interacciones",
        "XR Feedback": "Feedback XR",
        "Delivered a functional standalone training flow enforcing correct procedure order, required-step validation, blocked invalid interactions, and immediate feedback.": "Entregué un flujo funcional de capacitación standalone que exige el orden correcto del procedimiento, valida pasos obligatorios, bloquea interacciones no válidas y ofrece feedback inmediato.",
        "Interactive AR robotics prototype for manipulating an end-effector target and visualizing resulting UR5 joint configurations in real time.": "Prototipo interactivo de robótica AR para manipular el objetivo de un efector final y visualizar en tiempo real las configuraciones articulares resultantes del UR5.",
        "AR robotics visualization driven by inverse kinematics and interactive end-effector targeting.": "Visualización de robótica AR impulsada por cinemática inversa y control interactivo del efector final.",
        "Inverse Kinematics": "Cinemática inversa",
        "End-Effector Targeting": "Control del efector final",
        "Joint Visualization": "Visualización de articulaciones",
        "AR Interaction": "Interacción AR",
        "Delivered a functional AR robotics prototype that converts interactive target movement into real-time UR5 joint visualization for training and technical demonstrations.": "Entregué un prototipo funcional de robótica AR que convierte el movimiento interactivo del objetivo en visualización articular del UR5 en tiempo real para capacitación y demostraciones técnicas.",
        "Overview": "Descripción general",
        "Role & Ownership": "Rol y responsabilidad",
        "Problem": "Problema",
        "Engineering Challenge": "Reto de ingeniería",
        "Engineering Approach": "Enfoque de ingeniería",
        "Technology Stack": "Stack tecnológico",
        "Technologies": "Tecnologías",
        "Status": "Estado",
        "Playable prototype under continuous improvement.": "Prototipo jugable en mejora continua.",
        "Shooter Arena is a competitive multiplayer prototype centered on matches for up to four participants. Players can create or join a named room, select one of four available characters, and fight inside an industrial arena until only one active player remains.": "Shooter Arena es un prototipo multijugador competitivo para partidas de hasta cuatro participantes. Los jugadores pueden crear o unirse a una sala con nombre, elegir uno de cuatro personajes y combatir en una arena industrial hasta que quede un único jugador activo.",
        "The project combines gameplay programming, real-time networking, user-interface development, animation synchronization, additive scene management, and full match-flow control.": "El proyecto combina programación de gameplay, networking en tiempo real, desarrollo de interfaz, sincronización de animaciones, gestión aditiva de escenas y control completo del flujo de partida.",
        "I developed the prototype’s core systems in Unity, including the Photon connection, room creation and joining, synchronized character selection, network spawning, player movement, rotation, shooting, damage, health, animation states, respawning, and victory or defeat resolution.": "Desarrollé en Unity los sistemas principales del prototipo: conexión con Photon, creación y acceso a salas, selección sincronizada de personajes, spawning en red, movimiento, rotación, disparos, daño, salud, estados de animación, respawn y resolución de victoria o derrota.",
        "I also integrated the user interface, control instructions, loading and result screens, background audio, and the transition flow between the menu, gameplay systems, and industrial environment.": "También integré la interfaz, instrucciones de control, pantallas de carga y resultados, audio de fondo y el flujo de transición entre menú, sistemas de gameplay y entorno industrial.",
        "A multiplayer shooter requires every client to maintain a consistent representation of the match. Player positions, rotations, animations, projectiles, health values, character selections, and victory states must remain coordinated across different devices.": "Un shooter multijugador requiere que cada cliente mantenga una representación coherente de la partida. Posiciones, rotaciones, animaciones, proyectiles, salud, selección de personajes y estados de victoria deben permanecer coordinados entre dispositivos.",
        "The experience also needed to prevent duplicate character selections and preserve a coherent match flow when a player took damage, was eliminated, respawned, or left the room.": "La experiencia también debía impedir selecciones duplicadas y conservar un flujo coherente cuando un jugador recibía daño, era eliminado, reaparecía o abandonaba la sala.",
        "Maintain a coherent real-time match for up to four players while coordinating local and remote movement, exclusive character selection, projectile collisions, damage, health, elimination, respawning, and last-player-standing detection.": "Mantener una partida coherente en tiempo real para hasta cuatro jugadores coordinando movimiento local y remoto, selección exclusiva de personajes, colisiones de proyectiles, daño, salud, eliminación, respawn y detección del último jugador activo.",
        "These systems also needed to integrate with a clear user interface and a sufficiently large 3D environment for dynamic multiplayer encounters.": "Estos sistemas también debían integrarse con una interfaz clara y un entorno 3D suficientemente amplio para encuentros multijugador dinámicos.",
        "Multiplayer Match Flow": "Flujo de partida multijugador",
        "From server connection and character selection to synchronized combat and match resolution.": "Desde la conexión al servidor y selección de personaje hasta el combate sincronizado y la resolución de la partida.",
        "Player launches the game": "El jugador inicia el juego",
        "Connect to Photon Cloud": "Conexión a Photon Cloud",
        "Room Management": "Gestión de salas",
        "Create Named Room": "Crear sala con nombre",
        "Join Existing Room": "Unirse a una sala existente",
        "Online Room · Up to 4 Players": "Sala online · Hasta 4 jugadores",
        "Synchronized Character Selection": "Selección sincronizada de personajes",
        "Random Arena Spawn": "Spawn aleatorio en la arena",
        "Gameplay Loop": "Gameplay loop",
        "Movement & Rotation": "Movimiento y rotación",
        "Position, Rotation & Animation Sync": "Sincronización de posición, rotación y animación",
        "Projectile Shooting": "Disparo de proyectiles",
        "Collision & Damage RPC": "RPC de colisión y daño",
        "Health & UI Update": "Actualización de salud e interfaz",
        "Shared Match State": "Estado compartido de partida",
        "Is the player still active?": "¿El jugador sigue activo?",
        "Yes": "Sí",
        "Eliminated": "Eliminado",
        "Defeat Screen": "Pantalla de derrota",
        "Last active player": "Último jugador activo",
        "Victory Screen": "Pantalla de victoria",
        "Leave Room": "Salir de la sala",
        "Return to Menu": "Volver al menú",
        "Continuous Improvement": "Mejora continua",
        "Balance": "Balance",
        "Optimization": "Optimización",
        "Multiplayer Architecture": "Arquitectura multijugador",
        "Networked Movement & Animation": "Movimiento y animación en red",
        "Projectile Combat & Health": "Combate con proyectiles y salud",
        "Match Lifecycle": "Ciclo de vida de la partida",
        "Environment & User Experience": "Entorno y experiencia de usuario",
        "Watch demo": "Ver demo",
        "Industrial VR proof of concept for repeatable forklift operation, material handling, route-following, and safe load transportation practice in a controlled virtual environment.": "Prueba de concepto industrial VR para practicar de forma repetible la operación de montacargas, el manejo de materiales, el seguimiento de rutas y el transporte seguro de cargas en un entorno virtual controlado.",
        "Served as the sole Unity / XR Developer with complete PoC ownership across simulation architecture, forklift physics, VR controls, load handling, environment integration, training logic, optimization, testing, and iterative improvement.": "Fui la única desarrolladora Unity/XR y responsable integral del PoC: arquitectura de simulación, física del montacargas, controles VR, manejo de carga, integración del entorno, lógica de capacitación, optimización, pruebas y mejora iterativa.",
        "Real-world forklift training involves operational risks, equipment availability, instructor supervision, and limited opportunities to repeat incorrect maneuvers, collisions, route deviations, and load-handling scenarios safely.": "La capacitación real con montacargas implica riesgos operativos, disponibilidad de equipos, supervisión de instructores y oportunidades limitadas para repetir de forma segura maniobras incorrectas, colisiones, desviaciones de ruta y escenarios de manejo de carga.",
        "Reproduce credible forklift behavior while accounting for steering, braking, fork manipulation, changing load weight, dynamic center-of-mass behavior, collisions, route validation, training objectives, and VR comfort within a repeatable industrial training simulation.": "Reproducir un comportamiento creíble del montacargas considerando dirección, frenado, manipulación de horquillas, cambios de peso, centro de masa dinámico, colisiones, validación de rutas, objetivos de capacitación y confort VR dentro de una simulación industrial repetible.",
        "Vehicle Controls and Physics": "Controles y física del vehículo",
        "Built the vehicle-control model around acceleration, braking, steering response, traction, handling, and constrained movement. Connected an interactive steering wheel and multi-speed gear lever supporting forward, neutral, and reverse operation.": "Construí el modelo de control alrededor de la aceleración, frenado, respuesta de dirección, tracción, manejo y movimiento restringido. Integré un volante interactivo y una palanca de cambios con múltiples velocidades, avance, neutral y reversa.",
        "Fork and Load Handling": "Manejo de horquillas y carga",
        "Implemented independent fork height, tilt, and lifting controls for physics-based pickup, transportation, positioning, and delivery. Rigidbodies, colliders, constraints, and fork interactions were tuned for stable material handling.": "Implementé controles independientes de altura, inclinación y elevación de horquillas para recoger, transportar, posicionar y entregar mediante física. Ajusté rigidbodies, colliders, restricciones e interacciones para lograr un manejo estable de materiales.",
        "Weight-Dependent Dynamics": "Dinámica dependiente del peso",
        "Applied weight limits and dynamic center-of-mass adjustments so load mass affected acceleration, braking distance, steering response, handling, and stability during turns, braking, acceleration, and elevated-load transportation.": "Apliqué límites de peso y ajustes dinámicos del centro de masa para que la carga afectara aceleración, distancia de frenado, respuesta de dirección, manejo y estabilidad durante giros, frenado, aceleración y transporte elevado.",
        "Training and Validation": "Capacitación y validación",
        "Feedback, Comfort and Performance": "Feedback, confort y rendimiento",
        "Combined route and deviation detection with a configurable correction window, objectives, checkpoints, and pickup, transportation, and delivery validation. Collision detection, penalties, reset logic, and recovery states supported repeatable exercises.": "Combiné detección de ruta y desviaciones con una ventana configurable de corrección, objetivos, checkpoints y validación de recogida, transporte y entrega. La detección de colisiones, penalizaciones, resets y estados de recuperación permitieron ejercicios repetibles.",
        "Used visual, audio, and haptic feedback for interactions, collisions, warnings, errors, and completion. Integrated the environment and training objects, baked lighting, optimized polygons, draw calls, and physics, and iteratively tuned movement, camera behavior, steering, load stability, collisions, fork response, and VR comfort beyond the early video version.": "Utilicé feedback visual, auditivo y háptico para interacciones, colisiones, advertencias, errores y finalización. Integré el entorno y objetos de capacitación, baked lighting, optimicé polígonos, draw calls y física, y ajusté iterativamente movimiento, cámara, dirección, estabilidad de carga, colisiones, respuesta de horquillas y confort VR.",
        "Delivered a complete and functional industrial VR proof of concept with physics-based vehicle and load behavior, structured training validation, responsive feedback, and VR comfort refinements.": "Entregué una prueba de concepto industrial VR completa y funcional con comportamiento del vehículo y carga basado en física, validación estructurada de capacitación, feedback responsivo y mejoras de confort VR.",
        "Simulation Architecture": "Arquitectura de simulación",
        "Platform Physics and Interaction": "Física e interacción de plataforma",
        "Safety and Procedural Validation": "Seguridad y validación procedimental",
        "Fall Simulation and VR Comfort": "Simulación de caídas y confort VR",
        "Feedback, Optimization and Testing": "Feedback, optimización y pruebas",
        "Industrial AR prototype that lets users manipulate an end-effector target, observe the resulting UR5 arm configuration, and inspect joint positions in real time.": "Prototipo industrial AR que permite manipular el objetivo del efector final, observar la configuración resultante del brazo UR5 e inspeccionar las posiciones articulares en tiempo real.",
        "Visualizing robot configurations and joint behavior without requiring access to the physical equipment.": "Visualizar configuraciones y comportamiento articular del robot sin requerir acceso al equipo físico.",
        "AR Target": "Objetivo AR",
        "Joint Positions / Rotations": "Posiciones / rotaciones articulares",
        "UR5 Visualization": "Visualización del UR5",
        "Inverse Kinematics & Joint Visualization": "Cinemática inversa y visualización articular",
        "Worked as the Unity / XR Engineer responsible for the AR interaction, movable target, inverse-kinematics calculations, joint updates, real-time visualization, and demonstration workflow.": "Trabajé como Ingeniera Unity/XR responsable de la interacción AR, objetivo móvil, cálculos de cinemática inversa, actualización de articulaciones, visualización en tiempo real y flujo de demostración.",
        "Translate an interactively positioned AR end-effector target into continuously updated robotic-arm joint configurations while maintaining responsive real-time visualization in a mobile AR environment.": "Traducir la posición interactiva de un objetivo de efector final AR en configuraciones articulares actualizadas continuamente, manteniendo visualización responsiva en tiempo real en un entorno AR móvil.",
        "Placed and visualized the UR5 in the physical environment and exposed a movable end-effector target for direct user manipulation. Interaction and visual feedback communicated target movement and the resulting arm response.": "Posicioné y visualicé el UR5 en el entorno físico y expuse un objetivo móvil del efector final para manipulación directa. La interacción y el feedback visual comunicaban el movimiento del objetivo y la respuesta resultante del brazo.",
        "Used inverse-kinematics calculations to translate target movement into continuously updated joint positions and rotations. Displayed the real-time arm configuration and individual joint values for robotics visualization and technical demonstration.": "Utilicé cálculos de cinemática inversa para convertir el movimiento del objetivo en posiciones y rotaciones articulares actualizadas continuamente. Mostré la configuración del brazo y valores individuales de articulaciones en tiempo real.",
        "Industrial XR simulation for practicing the ordered isolation, locking, verification, unlocking, and restoration of an industrial valve with immediate procedural feedback.": "Simulación industrial XR para practicar de forma ordenada el aislamiento, bloqueo, verificación, desbloqueo y restablecimiento de una válvula industrial con feedback procedimental inmediato.",
        "Practicing critical Lockout/Tagout procedures without interacting with operational equipment or being exposed to real-world hazards.": "Practicar procedimientos críticos de Lockout/Tagout sin interactuar con equipos operativos ni exponerse a peligros reales.",
        "Procedural Flow": "Flujo procedimental",
        "Validation and Feedback": "Validación y feedback",
        "XR Integration and Performance": "Integración XR y rendimiento",
        "Worked as the Unity / XR Engineer responsible for procedural interaction logic, validation and feedback systems, Meta Quest 2 and OpenXR integration, industrial model integration, lighting, and functional delivery.": "Trabajé como Ingeniera Unity/XR responsable de la lógica de interacción procedimental, sistemas de validación y feedback, integración de Meta Quest 2 y OpenXR, modelos industriales, iluminación y entrega funcional.",
        "Coordinate an ordered safety procedure in XR where each action depends on completion and validation of previous steps, while blocking invalid interactions and providing immediate feedback without breaking the training flow.": "Coordinar un procedimiento de seguridad ordenado en XR donde cada acción depende de completar y validar pasos previos, bloqueando interacciones no válidas y proporcionando feedback inmediato sin interrumpir el flujo de capacitación.",
        "Structured the isolation, locking, verification, unlocking, and restoration workflow as an ordered sequence with explicit progression and completion validation.": "Estructuré el flujo de aislamiento, bloqueo, verificación, desbloqueo y restablecimiento como una secuencia ordenada con progresión explícita y validación de finalización.",
        "Validated required steps and blocked advancement when actions were incomplete or incorrect. Guidance and interactive feedback communicated valid actions, blocked interactions, procedural errors, and completion states.": "Validé los pasos requeridos y bloqueé el avance cuando las acciones estaban incompletas o eran incorrectas. La guía y el feedback interactivo comunicaban acciones válidas, interacciones bloqueadas, errores procedimentales y estados de finalización.",
        "Developed the experience in Unity and C# for Meta Quest 2 using OpenXR. Adapted MRTK-based interaction patterns to the Meta Quest 2 / OpenXR target workflow, integrated industrial 3D models, and used baked lighting to balance visual quality with standalone XR performance.": "Desarrollé la experiencia en Unity y C# para Meta Quest 2 con OpenXR. Adapté patrones de interacción basados en MRTK al flujo objetivo de Meta Quest 2/OpenXR, integré modelos 3D industriales y utilicé baked lighting para equilibrar calidad visual y rendimiento standalone XR.",
        "Delivered a functional standalone XR training prototype that enforces ordered progression, validates required steps, blocks invalid interactions, and provides immediate procedural feedback.": "Entregué un prototipo funcional standalone de capacitación XR que exige progresión ordenada, valida pasos requeridos, bloquea interacciones no válidas y proporciona feedback procedimental inmediato.",
        "Leadership & delivery": "Liderazgo y entrega",
        "Technical leadership in practice": "Liderazgo técnico en la práctica",
        "Promoted from Unity Developer to Industrial Development Lead after": "Promovida de Unity Developer a Industrial Development Lead después de",
        "1 year": "1 año",
        ", becoming the highest technical authority for the department.": ", convirtiéndome en la máxima autoridad técnica del departamento.",
        "Led up to": "Lideré hasta",
        "15 direct reports": "15 reportes directos",
        "across software development, 3D art, animation, and UX/UI while managing as many as": "en desarrollo de software, arte 3D, animación y UX/UI, mientras gestionaba hasta",
        "6 concurrent XR projects": "6 proyectos XR simultáneos",
        "Owned architecture, estimates, staffing, sprint planning, code reviews, build validation, QA coordination, delivery schedules, technical risk, and client satisfaction.": "Fui responsable de arquitectura, estimaciones, staffing, planificación de sprints, revisiones de código, validación de builds, coordinación con QA, calendarios de entrega, riesgo técnico y satisfacción del cliente.",
        "Introduced Scrum, SOLID principles, coding standards, code reviews, branching practices, Definition of Done, reusable architectures, testing checklists, and structured estimation processes.": "Introduje Scrum, principios SOLID, estándares de código, code reviews, prácticas de branching, Definition of Done, arquitecturas reutilizables, checklists de pruebas y procesos estructurados de estimación.",
        "Technical expertise": "Especialización técnica",
        "Core engineering & XR stack": "Stack principal de ingeniería y XR",
        "Core Engineering": "Ingeniería principal",
        "XR & Immersive": "XR e inmersión",
        "SDK & Runtime Integration": "Integración de SDK y runtime",
        "Native Plugins": "Plugins nativos",
        "Delivery & Tooling": "Entrega y herramientas",
        "Platforms:": "Plataformas:",
        "Career path": "Trayectoria profesional",
        "Senior Unity Developer / Technical Lead": "Desarrollador Senior Unity / Líder Técnico",
        "Client: Epic Games": "Cliente: Epic Games",
        "Served as a developer for the Epic Online Services Unity plugin, contributing to SDK integration, cross-platform architecture, incident investigation, release validation, and production delivery across five operating systems.": "Trabajé como desarrollador del plugin de Epic Online Services para Unity, contribuyendo a la integración del SDK, arquitectura multiplataforma, investigación de incidentes, validación de releases y entrega a producción en cinco sistemas operativos.",
        "Contributed to": "Contribuí a",
        "and owned": "y fui responsable de",
        "Developed and validated functionality across Windows, Android, macOS, iOS, and Linux.": "Desarrollé y validé funcionalidad en Windows, Android, macOS, iOS y Linux.",
        "Integrated EOS SDK versions and participated in release scope, defect, compatibility, and hotfix decisions.": "Integré versiones del SDK de EOS y participé en decisiones de alcance de release, defectos, compatibilidad y hotfixes.",
        "Investigated native plugins, IL2CPP, Mono, authentication, platform loaders, DEXing, dependencies, and builds.": "Investigué plugins nativos, IL2CPP, Mono, autenticación, loaders de plataforma, DEXing, dependencias y builds.",
        "Maintained automated compilation, Unit, PlayMode, Standalone, and CI testing workflows.": "Mantuve flujos automatizados de compilación y pruebas Unit, PlayMode, Standalone y CI.",
        "Handled approximately": "Atendí aproximadamente",
        "12 developer-reported issues per month": "12 incidencias reportadas por desarrolladores al mes",
        "and converted recurring issues into product improvements.": "y convertí problemas recurrentes en mejoras permanentes del producto.",
        "View detailed experience": "Ver experiencia detallada",
        "Release ownership & technical leadership": "Responsabilidad de releases y liderazgo técnico",
        "Served as a developer for the Epic Online Services Unity plugin, responsible for EOS SDK integration, cross-platform architecture, bug prioritization, incident investigation, and final release validation. Contributed to seven public production releases, developed functionality across at least five releases, and owned one release end-to-end.": "Trabajé como desarrollador del plugin de Epic Online Services para Unity, responsable de integración del SDK de EOS, arquitectura multiplataforma, priorización de bugs, investigación de incidentes y validación final de releases. Contribuí a siete releases públicos de producción, desarrollé funcionalidad en al menos cinco y fui responsable integral de uno.",
        "Contributed to 7 public production releases and owned one release end-to-end, covering SDK integration, implementation, testing, validation, packaging, and publication.": "Contribuí a 7 releases públicos de producción y fui responsable integral de uno, cubriendo integración del SDK, implementación, pruebas, validación, empaquetado y publicación.",
        "Defined technical architecture, integrated new EOS SDK versions, prioritized defects, investigated developer-reported incidents, and performed final pre-release validation.": "Definí arquitectura técnica, integré nuevas versiones del SDK de EOS, prioricé defectos, investigué incidentes reportados por desarrolladores y realicé validación final previa al release.",
        "Participated in release scope, defect prioritization, minimum compatibility, and hotfix decisions.": "Participé en decisiones sobre alcance de release, priorización de defectos, compatibilidad mínima y hotfixes.",
        "Expanded from Windows-specific development to cross-platform ownership and validation across five operating systems.": "Amplié mis responsabilidades desde desarrollo específico para Windows hasta ownership y validación multiplataforma en cinco sistemas operativos.",
        "Received positive feedback from technical leadership for delivery quality, technical judgment, and leadership potential.": "Recibí comentarios positivos del liderazgo técnico por la calidad de entrega, criterio técnico y potencial de liderazgo.",
        "Cross-platform engineering & quality": "Ingeniería multiplataforma y calidad",
        "Developed and validated plugin functionality across Windows, Android, macOS, iOS, and Linux while supporting multiple Unity LTS versions.": "Desarrollé y validé funcionalidad del plugin en Windows, Android, macOS, iOS y Linux, con soporte para múltiples versiones Unity LTS.",
        "Added Android support for devices using 16 KB memory pages, Custom Invites Disable Requests, and high-frequency peer-to-peer functionality.": "Añadí soporte Android para dispositivos con páginas de memoria de 16 KB, Custom Invites Disable Requests y funcionalidad peer-to-peer de alta frecuencia.",
        "Fixed EOS configuration persistence so Unity UI changes were saved to the corresponding JSON configuration file.": "Corregí la persistencia de configuración de EOS para guardar los cambios de la UI de Unity en el archivo JSON correspondiente.",
        "Investigated build-blocking and runtime issues involving DEXing, native plugins, IL2CPP, Mono, authentication flows, platform loaders, dependencies, and build configuration.": "Investigué problemas que bloqueaban builds y errores de runtime relacionados con DEXing, plugins nativos, IL2CPP, Mono, flujos de autenticación, loaders de plataforma, dependencias y configuración de build.",
        "Automated and maintained compilation workflows, unit tests, PlayMode tests, and standalone tests locally and through continuous integration; detected a macOS regression before release.": "Automaticé y mantuve flujos de compilación, pruebas unitarias, PlayMode y standalone, localmente y mediante integración continua; detecté una regresión de macOS antes del release.",
        "Diagnosed an Android DEX failure caused by an AAR compiled with JDK 21+ bytecode requiring": "Diagnostiqué un fallo DEX en Android causado por un AAR compilado con bytecode de JDK 21+ que requería",
        ", identifying the root cause through Android Studio.": ", e identifiqué la causa raíz mediante Android Studio.",
        "Resolved non-Windows build failures caused by the EOS_DISABLE scripting symbol by": "Resolví fallos de build fuera de Windows causados por el símbolo de scripting EOS_DISABLE mediante",
        "implementing safeguards for every supported platform.": "la implementación de protecciones para cada plataforma compatible.",
        "Developer support & lasting impact": "Soporte a desarrolladores e impacto duradero",
        "Handled approximately 12 developer-reported issues per month through the Epic Games developer forums, providing fixes, documentation, workarounds, and root-cause analysis.": "Atendí aproximadamente 12 incidencias mensuales reportadas por desarrolladores en los foros de Epic Games, aportando correcciones, documentación, workarounds y análisis de causa raíz.",
        "Converted recurring developer and studio issues into permanent changes included in subsequent public plugin releases.": "Convertí problemas recurrentes de desarrolladores y estudios en cambios permanentes incluidos en releases públicos posteriores del plugin.",
        "Technical scope": "Alcance técnico",
        "Public Contributions": "Contribuciones públicas",
        "GitHub Repository": "Repositorio de GitHub",
        "Published Packages": "Paquetes publicados",
        "Release range: versions 4.1.0 through 6.1.0.": "Rango de releases: versiones 4.1.0 a 6.1.0.",
        "Led the architecture and delivery of immersive training and digital learning solutions while managing a six-person multidisciplinary team and remaining hands-on across Unity, XR, telemetry, reporting, backend integration, and client-facing technical planning.": "Lideré la arquitectura y entrega de soluciones inmersivas de capacitación y aprendizaje digital, gestionando un equipo multidisciplinario de seis personas y manteniendo participación práctica en Unity, XR, telemetría, reporting, integración backend y planificación técnica con clientes.",
        "Led the architecture and delivery of": "Lideré la arquitectura y entrega de",
        "4 client-used Unity projects": "4 proyectos Unity utilizados por clientes",
        "Managed": "Gestioné",
        "6 professionals": "6 profesionales",
        "across software development, UX/UI design, and 3D art.": "en desarrollo de software, diseño UX/UI y arte 3D.",
        "Owned task assignment, estimates, code reviews, architecture approval, QA coordination, and final delivery.": "Fui responsable de asignación de tareas, estimaciones, code reviews, aprobación de arquitectura, coordinación con QA y entrega final.",
        "Designed interaction, persistence, telemetry, scoring, reporting, and backend integration architectures.": "Diseñé arquitecturas de interacción, persistencia, telemetría, scoring, reporting e integración backend.",
        "Built XR applications using OpenXR, XR Interaction Toolkit, SteamVR, and Meta XR.": "Desarrollé aplicaciones XR con OpenXR, XR Interaction Toolkit, SteamVR y Meta XR.",
        "Led demonstrations, requirements, progress reviews, and delivery meetings in English and Spanish.": "Lideré demostraciones, requisitos, revisiones de progreso y reuniones de entrega en inglés y español.",
        "Technical Leadership": "Liderazgo técnico",
        "Key achievements": "Logros principales",
        "Led the technical architecture and delivery of immersive training and digital learning solutions for government defense and international education clients. Managed a six-person multidisciplinary team while remaining hands-on across Unity development, system architecture, telemetry, scoring, reporting, device integration, backend communication, and client-facing technical planning.": "Lideré la arquitectura técnica y entrega de soluciones inmersivas de capacitación y aprendizaje digital para clientes gubernamentales de defensa y educación internacional. Gestioné un equipo multidisciplinario de seis personas y mantuve participación práctica en desarrollo Unity, arquitectura, telemetría, scoring, reporting, integración de dispositivos, comunicación backend y planificación técnica con clientes.",
        "Led the architecture and delivery of 4 client-used Unity projects for government defense and international education organizations.": "Lideré la arquitectura y entrega de 4 proyectos Unity utilizados por organizaciones gubernamentales de defensa y educación internacional.",
        "Managed 6 professionals across software development, UX/UI design, and 3D art, with direct responsibility for task assignment, estimates, code reviews, architecture approval, performance evaluations, QA coordination, and final delivery.": "Gestioné 6 profesionales de desarrollo, diseño UX/UI y arte 3D, con responsabilidad directa sobre asignación, estimaciones, code reviews, aprobación de arquitectura, evaluaciones de desempeño, coordinación con QA y entrega final.",
        "Defined architectures for interaction systems, scene organization, persistence, telemetry, scoring, reporting, device integration, backend communication, and reusable software patterns.": "Definí arquitecturas para sistemas de interacción, organización de escenas, persistencia, telemetría, scoring, reporting, integración de dispositivos, comunicación backend y patrones reutilizables.",
        "Built Unity applications with OpenXR, XR Interaction Toolkit, SteamVR, and Meta XR, including training and assessment systems that captured user actions, progress, performance data, scores, and results.": "Desarrollé aplicaciones Unity con OpenXR, XR Interaction Toolkit, SteamVR y Meta XR, incluidos sistemas de capacitación y evaluación que capturaban acciones, progreso, rendimiento, puntuaciones y resultados.",
        "Integrated backend and persistence services to store user activity and support reporting and organizational monitoring.": "Integré servicios backend y de persistencia para almacenar actividad de usuarios y soportar reporting y seguimiento organizacional.",
        "Led technical demonstrations, progress reviews, requirements discussions, and delivery meetings with clients in English and Spanish.": "Lideré demostraciones técnicas, revisiones de progreso, discusiones de requisitos y reuniones de entrega con clientes en inglés y español.",
        "Translated client requirements into technical proposals, architecture decisions, estimates, sprint plans, and implementation tasks.": "Convertí requisitos de clientes en propuestas técnicas, decisiones de arquitectura, estimaciones, planes de sprint y tareas de implementación.",
        "Balanced technical leadership with hands-on development, integration troubleshooting, code reviews, and validation of critical systems before delivery.": "Equilibré liderazgo técnico con desarrollo práctico, resolución de integraciones, code reviews y validación de sistemas críticos antes de la entrega.",
        "Cloud, Backend & AI Integration": "Integración cloud, backend e IA",
        "Integrated Azure and Firebase services into Unity applications through C# SDKs and REST APIs": "Integré servicios de Azure y Firebase en aplicaciones Unity mediante SDKs de C# y REST APIs",
        ", supporting authentication, persistent user data, cloud storage, telemetry, reporting, and AI-powered functionality.": ", dando soporte a autenticación, datos persistentes, almacenamiento cloud, telemetría, reporting y funcionalidad impulsada por IA.",
        "Designed and implemented cloud-backed application architectures": "Diseñé e implementé arquitecturas de aplicación respaldadas por cloud",
        "using Azure Functions, Cosmos DB, Blob Storage, Key Vault, and Application Insights for backend processing, persistence, secure configuration, storage, and observability.": "usando Azure Functions, Cosmos DB, Blob Storage, Key Vault y Application Insights para procesamiento backend, persistencia, configuración segura, almacenamiento y observabilidad.",
        "Integrated Microsoft Foundry with Azure OpenAI models": "Integré Microsoft Foundry con modelos de Azure OpenAI",
        "into Unity-based workflows while using Firebase Authentication, Firestore, Cloud Storage, and Cloud Functions for complementary application services.": "en flujos basados en Unity, utilizando Firebase Authentication, Firestore, Cloud Storage y Cloud Functions para servicios complementarios.",
        "Two roles": "Dos puestos",
        "Promoted after one year": "Promovida después de un año",
        "Promoted after one year from Unity Developer to Industrial Development Lead based on technical expertise, consistent delivery, recovery of delayed projects, project estimation, mentorship, client communication, and contribution to the department’s growth.": "Promovida después de un año de Unity Developer a Industrial Development Lead por experiencia técnica, entregas consistentes, recuperación de proyectos retrasados, estimación, mentoría, comunicación con clientes y contribución al crecimiento del departamento.",
        "Managed up to": "Gestioné hasta",
        "across Unity development, 3D art, animation, and UX/UI.": "entre desarrollo Unity, arte 3D, animación y UX/UI.",
        "6 concurrent industrial XR projects": "6 proyectos XR industriales simultáneos",
        "Held final authority over architecture, technical decisions, quality, staffing, and delivery.": "Tuve autoridad final sobre arquitectura, decisiones técnicas, calidad, staffing y entrega.",
        "Introduced Scrum, coding standards, reviews, testing, structured estimation, and reusable architectures.": "Introduje Scrum, estándares y revisiones de código, pruebas, estimación estructurada y arquitecturas reutilizables.",
        "Developed end-to-end VR and AR applications, reusable systems, simulations, telemetry, scoring, APIs, persistence, and optimizations.": "Desarrollé aplicaciones VR y AR end-to-end, sistemas reutilizables, simulaciones, telemetría, scoring, APIs, persistencia y optimizaciones.",
        "All client and project names remain confidential.": "Todos los nombres de clientes y proyectos permanecen confidenciales.",
        "Department leadership": "Liderazgo del departamento",
        "Promoted after one year from Unity Developer to Industrial Development Lead based on technical expertise, consistent project delivery, recovery of delayed projects, client communication, project estimation, mentorship, informal leadership, and contribution to the department’s growth. The promotion included a formal change in position, responsibilities, and salary.": "Fui promovida después de un año de Unity Developer a Industrial Development Lead por experiencia técnica, entregas consistentes, recuperación de proyectos retrasados, comunicación con clientes, estimación, mentoría, liderazgo informal y contribución al crecimiento del departamento. La promoción incluyó un cambio formal de puesto, responsabilidades y salario.",
        "Led Fyware’s Industrial Development Department, managing up to 15 direct-report Unity developers, 3D artists, animators, and UX/UI designers across as many as six concurrent industrial XR projects. Held final responsibility for technical execution, architecture, staffing, project planning, delivery schedules, team performance, and client satisfaction while remaining hands-on in Unity and XR development.": "Lideré el Departamento de Desarrollo Industrial de Fyware, gestionando hasta 15 reportes directos entre desarrolladores Unity, artistas 3D, animadores y diseñadores UX/UI en hasta seis proyectos XR industriales simultáneos. Tuve responsabilidad final sobre ejecución técnica, arquitectura, staffing, planificación, calendarios, desempeño y satisfacción del cliente, manteniendo participación práctica en Unity y XR.",
        "Up to 15 direct reports": "Hasta 15 reportes directos",
        "Unity developers, 3D artists, animators, and UX/UI designers": "Desarrolladores Unity, artistas 3D, animadores y diseñadores UX/UI",
        "Up to 6 concurrent projects": "Hasta 6 proyectos simultáneos",
        "Staffing, priorities, dependencies, schedules, and resource allocation": "Staffing, prioridades, dependencias, calendarios y asignación de recursos",
        "Highest technical authority": "Máxima autoridad técnica",
        "Final architecture, technology, quality, and delivery approval": "Aprobación final de arquitectura, tecnología, calidad y entrega",
        "Leadership & Delivery": "Liderazgo y entrega",
        "Owned technical planning, effort and staffing estimates, sprint planning, backlog prioritization, daily meetings, progress tracking, risk management, and blocker resolution.": "Fui responsable de planificación técnica, estimaciones de esfuerzo y staffing, planificación de sprints, priorización del backlog, reuniones diarias, seguimiento, gestión de riesgos y resolución de bloqueos.",
        "Maintained final responsibility for technical quality, delivery dates, team performance, and client satisfaction through implementation, validation, delivery, real-world use, and post-release support.": "Mantuve responsabilidad final sobre calidad técnica, fechas de entrega, desempeño del equipo y satisfacción del cliente durante implementación, validación, entrega, uso real y soporte posterior.",
        "Reported risks and presented status, estimates, technical alternatives, and delivery plans to project managers, sales, management, the CEO, and clients.": "Reporté riesgos y presenté estado, estimaciones, alternativas técnicas y planes de entrega a project managers, ventas, dirección, CEO y clientes.",
        "Coordinated client meetings, technical proposals, project reviews, requirement clarification, delivery validation, and post-release support while protecting contractual scope.": "Coordiné reuniones con clientes, propuestas técnicas, revisiones, aclaración de requisitos, validación de entrega y soporte posterior, protegiendo el alcance contractual.",
        "Architecture & Engineering": "Arquitectura e ingeniería",
        "Approved or rejected technical decisions, system architectures, SDKs, plugins, devices, hardware, and implementation approaches according to project requirements.": "Aprobé o rechacé decisiones técnicas, arquitecturas, SDKs, plugins, dispositivos, hardware y enfoques de implementación según los requisitos.",
        "Defined and reviewed architectures using MVC, state machines, Observer, dependency injection, and ScriptableObject-based systems.": "Definí y revisé arquitecturas con MVC, máquinas de estados, Observer, inyección de dependencias y sistemas basados en ScriptableObject.",
        "Led code and architecture reviews, build validation, internal testing, QA coordination, and final technical approval before client delivery.": "Lideré revisiones de código y arquitectura, validación de builds, pruebas internas, coordinación con QA y aprobación técnica final antes de entregar al cliente.",
        "Led industrial VR and AR solutions involving telemetry, scoring, user evaluation, reporting, progress tracking, APIs, databases, cloud services, controllers, haptics, cameras, and VR equipment.": "Lideré soluciones industriales VR y AR con telemetría, scoring, evaluación de usuarios, reporting, seguimiento de progreso, APIs, bases de datos, cloud, controladores, hápticos, cámaras y equipos VR.",
        "Team Development": "Desarrollo del equipo",
        "Evaluated performance through technical reviews, individual meetings, feedback, mentorship, and personalized training and course roadmaps.": "Evalué desempeño mediante revisiones técnicas, reuniones individuales, feedback, mentoría y rutas personalizadas de capacitación.",
        "Participated in technical interviews, hiring decisions, candidate evaluation, onboarding, promotions, and personnel termination processes.": "Participé en entrevistas técnicas, contratación, evaluación de candidatos, onboarding, promociones y procesos de terminación laboral.",
        "Improved onboarding through shared standards, documented project structures, reusable components, and defined development practices.": "Mejoré el onboarding mediante estándares compartidos, estructuras documentadas, componentes reutilizables y prácticas definidas.",
        "Processes Introduced": "Procesos introducidos",
        "Introduced Scrum practices, clean-code standards, and SOLID principles where no formal agile development process previously existed.": "Introduje prácticas Scrum, estándares de clean code y principios SOLID donde no existía un proceso formal de desarrollo Agile.",
        "Authored the department’s coding standards and implemented code reviews, branching strategies, Definition of Done, sprint planning, retrospectives, bug tracking, technical reviews, testing checklists, performance evaluations, and structured estimation.": "Redacté los estándares de código del departamento e implementé code reviews, estrategias de branching, Definition of Done, planificación de sprints, retrospectivas, seguimiento de bugs, revisiones técnicas, checklists de pruebas, evaluaciones y estimación estructurada.",
        "Created reusable project templates and shared architecture foundations, reducing integration conflicts and enabling teams to reuse common modules.": "Creé templates reutilizables y bases de arquitectura compartidas, reduciendo conflictos de integración y permitiendo reutilizar módulos comunes.",
        "Enabled earlier detection of bugs, performance issues, and integration risks; improved project visibility and made estimates more consistent through structured planning, tracking, reviews, and technical risk evaluation.": "Permití detectar antes bugs, problemas de rendimiento y riesgos de integración; mejoré la visibilidad y consistencia de estimaciones mediante planificación, seguimiento, revisiones y evaluación técnica de riesgos.",
        "Technical & Leadership Scope": "Alcance técnico y de liderazgo",
        "Promoted to Industrial Development Lead": "Promovida a Industrial Development Lead",
        "After one year as a Unity Developer, I was formally promoted to lead Fyware’s Industrial Development Department, with expanded technical, managerial, delivery, staffing, and client-facing responsibilities.": "Después de un año como Unity Developer, fui promovida formalmente para liderar el Departamento de Desarrollo Industrial de Fyware, con responsabilidades ampliadas en técnica, gestión, entrega, staffing y clientes.",
        "Hands-on XR engineering": "Ingeniería XR práctica",
        "Developed complete industrial VR and AR applications and contributed specialized modules to additional internal projects across manufacturing, robotics, industrial training, safety, healthcare, art, entertainment, and real-estate visualization. Worked closely with the technical lead on architecture while creating reusable systems adopted across subsequent projects.": "Desarrollé aplicaciones industriales VR y AR completas y módulos especializados para otros proyectos internos de manufactura, robótica, capacitación, seguridad, salud, arte, entretenimiento y visualización inmobiliaria. Colaboré estrechamente con el technical lead en arquitectura y creé sistemas reutilizables adoptados en proyectos posteriores.",
        "XR Development": "Desarrollo XR",
        "Delivered complete Unity-based VR and AR applications, functional prototypes, client demonstrations, and specialized modules for additional confidential projects.": "Entregué aplicaciones VR y AR completas en Unity, prototipos funcionales, demostraciones para clientes y módulos especializados para proyectos confidenciales adicionales.",
        "Built interaction systems, locomotion, grabbing and manipulation, physics behaviors, machinery simulations, guided procedures, UI flows, training sequences, and multiplayer functionality.": "Construí sistemas de interacción, locomoción, agarre y manipulación, comportamientos físicos, simulaciones de maquinaria, procedimientos guiados, flujos UI, secuencias de capacitación y funcionalidad multijugador.",
        "Developed evaluation, telemetry, scoring, reporting, progress tracking, persistence, API integration, data visualization, animations, and user-interface systems.": "Desarrollé sistemas de evaluación, telemetría, scoring, reporting, seguimiento, persistencia, integración de APIs, visualización de datos, animaciones e interfaces.",
        "Integrated 3D models, animations, controllers, haptic devices, cameras, VR equipment, APIs, databases, servers, cloud services, and persistent user data.": "Integré modelos 3D, animaciones, controladores, dispositivos hápticos, cámaras, equipos VR, APIs, bases de datos, servidores, servicios cloud y datos persistentes.",
        "Technical Ownership": "Responsabilidad técnica",
        "Developed complete projects while contributing assigned modules to projects owned by other teams, including real-estate visualization work requiring additional Unity and XR capacity.": "Desarrollé proyectos completos y contribuí con módulos asignados a proyectos de otros equipos, incluido trabajo de visualización inmobiliaria que requería capacidad adicional de Unity y XR.",
        "Collaborated with the technical lead on architecture decisions and created reusable C# components and development systems used in later company projects.": "Colaboré con el technical lead en decisiones de arquitectura y creé componentes C# y sistemas reutilizables usados en proyectos posteriores.",
        "Demonstrated the ownership, delivery consistency, recovery of delayed projects, estimation, mentorship, and client communication that led to formal promotion after one year.": "Demostré la responsabilidad, consistencia de entrega, recuperación de proyectos retrasados, capacidad de estimación, mentoría y comunicación con clientes que condujeron a mi promoción formal después de un año.",
        "Performance Optimization": "Optimización de rendimiento",
        "Optimized draw calls, 3D models, baked lighting, occlusion culling, memory, object pooling, shaders, and scene-loading times for target XR hardware.": "Optimicé draw calls, modelos 3D, baked lighting, occlusion culling, memoria, object pooling, shaders y tiempos de carga para hardware XR objetivo.",
        "Used Unity Profiler to identify rendering, CPU, GPU, and memory bottlenecks and maintain stable runtime performance.": "Utilicé Unity Profiler para identificar cuellos de botella de renderizado, CPU, GPU y memoria, manteniendo rendimiento estable en runtime.",
        "Authored an internal XR development and optimization guide covering rendering, lighting, models, memory, code optimization, and runtime performance.": "Redacté una guía interna de desarrollo y optimización XR sobre renderizado, iluminación, modelos, memoria, optimización de código y rendimiento en runtime.",
        "Technical Scope": "Alcance técnico",
        "What people say about my work": "Lo que dicen sobre mi trabajo",
        "View all recommendations on LinkedIn": "Ver todas las recomendaciones en LinkedIn",
        "Education": "Educación",
        "Mechatronics Engineering": "Ingeniería Mecatrónica",
        "Research": "Investigación",
        "Oculus Rift mechanical assembly interaction project": "Proyecto de interacción para ensamble mecánico con Oculus Rift",
        "Presentation": "Presentación",
        "6th Young Researchers Meeting 2018": "6.º Encuentro de Jóvenes Investigadores 2018",
        "XR and virtual object manipulation": "XR y manipulación de objetos virtuales",
        "Detailed experience": "Experiencia detallada",
        "Let's build real-time systems that ship cleanly.": "Construyamos sistemas en tiempo real con entregas sólidas.",
        "Send me an email": "Envíame un correo",
        "Message me on WhatsApp": "Escríbeme por WhatsApp",
        "View my LinkedIn": "Ver mi LinkedIn",
        "Open resume PDF": "Abrir CV en PDF",
        "Original recommendations in English": "Recomendaciones originales en inglés"
      },
      attributes: {
        "Language selector": "Selector de idioma",
        "Open navigation menu": "Abrir menú de navegación",
        "Close navigation menu": "Cerrar menú de navegación",
        "Leadership capabilities": "Capacidades de liderazgo",
        "Professional credibility metrics": "Métricas de credibilidad profesional",
        "Professional metrics": "Métricas profesionales",
        "Technologies": "Tecnologías",
        "Primary technologies": "Tecnologías principales",
        "Project quick facts": "Datos principales del proyecto",
        "Roles at Fyware": "Puestos en Fyware",
        "Jessica Tello profile": "Perfil de Jessica Tello",
        "Education and research": "Educación e investigación",
        "Watch the Forklift Operation demonstration on YouTube": "Ver la demostración de Forklift Operation en YouTube",
        "Watch the Working at Heights demonstration on YouTube": "Ver la demostración de Working at Heights en YouTube",
        "Portrait of Jessica Tello": "Retrato de Jessica Tello",
        "Forklift Operation industrial VR training demonstration": "Demostración de capacitación industrial VR de Forklift Operation",
        "Working at Heights industrial VR safety-training demonstration": "Demostración de capacitación de seguridad industrial VR de Working at Heights",
        "Shooter Arena multiplayer gameplay": "Gameplay multijugador de Shooter Arena",
        "LOTO safety-training simulation reel": "Video de simulación de capacitación de seguridad LOTO",
        "UR5 augmented reality simulation reel": "Video de simulación de realidad aumentada del UR5",
        "UR5 interaction flow": "Flujo de interacción del UR5",
        "Industrial Development Lead highlights": "Aspectos destacados de Industrial Development Lead",
        "Career promotion": "Promoción profesional",
        "Shooter Arena multiplayer match flow: the player launches the game, connects to Photon Cloud, creates or joins a named room, selects a synchronized character, spawns in the arena, enters the gameplay loop, synchronizes movement or resolves projectile damage, updates the shared match state, reaches victory or defeat, leaves the room, returns to the menu, and continues through planned networking, user-experience, balance, and optimization improvements.": "Flujo de partida multijugador de Shooter Arena: el jugador inicia el juego, se conecta a Photon Cloud, crea o se une a una sala con nombre, selecciona un personaje sincronizado, aparece en la arena, entra al gameplay loop, sincroniza el movimiento o resuelve el daño de proyectiles, actualiza el estado compartido, alcanza la victoria o derrota, abandona la sala, vuelve al menú y continúa con mejoras planificadas de networking, experiencia de usuario, balance y optimización.",
        "Close project case study": "Cerrar caso de estudio",
        "Close detailed experience": "Cerrar experiencia detallada",
        "View all of Jessica Tello's recommendations on LinkedIn (opens in a new tab)": "Ver todas las recomendaciones de Jessica Tello en LinkedIn (abre en una pestaña nueva)"
      }
    }
  };

  const monthReplacements = [
    ["January", "enero"], ["February", "febrero"], ["March", "marzo"], ["April", "abril"],
    ["May", "mayo"], ["June", "junio"], ["July", "julio"], ["August", "agosto"],
    ["September", "septiembre"], ["October", "octubre"], ["November", "noviembre"], ["December", "diciembre"]
  ];

  function normalize(value) {
    return value
      .replace(/\s+/g, " ")
      .replace(/Â·/g, "·")
      .replace(/â€™/g, "’")
      .replace(/—/g, "-")
      .trim();
  }

  function translateValue(value, language) {
    if (language === "en") return value;
    const normalized = normalize(value);
    const direct = translations.es.text[normalized];
    if (direct) return direct;

    let translated = value.replace(" · Client: ", " · Cliente: ");
    monthReplacements.forEach(([english, spanish]) => {
      translated = translated.replaceAll(english, spanish);
    });
    return translated;
  }

  function translateTextNodes(root, language, { preserveSources = false } = {}) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const parent = node.parentElement;
      if (
        !parent ||
        parent.closest("script, style, .recommendation-quote") ||
        (preserveSources && parent.closest("template, .experience-details-source"))
      ) return;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      if (!source.trim()) return;
      const leading = source.match(/^\s*/)?.[0] ?? "";
      const trailing = source.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leading}${translateValue(source, language).trim()}${trailing}`;

      if (parent.childNodes.length === 1 && parent.textContent.trim()) {
        parent.dataset.i18n = normalize(source);
      }
    });
  }

  function translateAttributes(root, language) {
    root.querySelectorAll("[aria-label], [title], [alt]").forEach((element) => {
      if (!originalAttributes.has(element)) {
        originalAttributes.set(element, {
          ariaLabel: element.getAttribute("aria-label"),
          title: element.getAttribute("title"),
          alt: element.getAttribute("alt")
        });
      }
      const source = originalAttributes.get(element);
      ["aria-label", "title", "alt"].forEach((attribute) => {
        const original = attribute === "aria-label" ? source.ariaLabel : attribute === "title" ? source.title : source.alt;
        if (!original) return;
        const translated = language === "es" ? translations.es.attributes[original] ?? original : original;
        element.setAttribute(attribute, translated);
        element.setAttribute(`data-i18n-${attribute}`, original);
      });
    });
  }

  function translateRoot(root, language) {
    translateTextNodes(root, language, { preserveSources: root === document });
    translateAttributes(root, language);
  }

  function setLanguage(language, { persist = true } = {}) {
    const nextLanguage = language === "es" ? "es" : "en";
    translateRoot(document, nextLanguage);
    document.documentElement.lang = nextLanguage;
    document.title = translations[nextLanguage].title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", translations[nextLanguage].description);
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === nextLanguage));
    });
    const note = document.querySelector(".recommendation-language-note");
    if (note) note.hidden = nextLanguage !== "es";
    if (persist) localStorage.setItem(STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: { language: nextLanguage } }));
  }

  function initializeI18n() {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initialLanguage = stored === "es" || stored === "en" ? stored : DEFAULT_LANGUAGE;
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.language));
    });
    setLanguage(initialLanguage, { persist: false });
  }

  window.portfolioI18n = {
    translations,
    initialize: initializeI18n,
    setLanguage,
    applyTo: (root) => translateRoot(root, document.documentElement.lang === "es" ? "es" : "en"),
    getLanguage: () => document.documentElement.lang === "es" ? "es" : "en"
  };
})();
