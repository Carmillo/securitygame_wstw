/**
 * IT-Security Adventure 3D
 * Full 3D Game with Three.js and Cannon.js Physics
 * © 2025 TechCorp Industries
 */

// ==================== GAME STATE ====================
const GameState = {
    scene: null,
    camera: null,
    renderer: null,
    composer: null, // Post-processing composer
    world: null, // Physics world
    clock: new THREE.Clock(),

    // Player
    playerBody: null,
    playerHeight: 1.8,
    playerRadius: 0.5,
    moveSpeed: 5,
    jumpVelocity: 7,
    canJump: false,

    // Controls
    controls: {
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        interact: false
    },

    // Camera rotation
    euler: new THREE.Euler(0, 0, 0, 'YXZ'),

    // NPCs
    npcs: [],
    currentNPC: null,
    npcProgress: 0,

    // Game data
    score: 0,
    startTime: Date.now(),
    currentLanguage: 'de',

    // Interaction
    raycaster: new THREE.Raycaster(),
    nearestInteractable: null,

    // Audio
    audioContext: null,
    isMusicPlaying: false,
    musicGainNode: null,

    // Incidents
    incidents: [],
    usedIncidents: [],
    incidentTimer: null,

    // Graphics
    textures: {},
    particleSystems: []
};

// ==================== TEXTURES & MATERIALS ====================
function createProceduralTextures() {
    console.log('Creating procedural textures...');

    // Wood texture for desks
    GameState.textures.wood = createWoodTexture();

    // Carpet texture for floor
    GameState.textures.carpet = createCarpetTexture();

    // Metal texture
    GameState.textures.metal = createMetalTexture();

    // Concrete texture for walls
    GameState.textures.concrete = createConcreteTexture();

    // Fabric texture for chairs
    GameState.textures.fabric = createFabricTexture();
}

function createWoodTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Base wood color
    const gradient = ctx.createLinearGradient(0, 0, 512, 0);
    gradient.addColorStop(0, '#8B4513');
    gradient.addColorStop(0.5, '#A0522D');
    gradient.addColorStop(1, '#8B4513');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    // Wood grain
    for (let i = 0; i < 100; i++) {
        ctx.strokeStyle = `rgba(101, 67, 33, ${Math.random() * 0.3})`;
        ctx.lineWidth = Math.random() * 2 + 1;
        ctx.beginPath();
        ctx.moveTo(Math.random() * 512, 0);
        ctx.lineTo(Math.random() * 512, 512);
        ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
}

function createCarpetTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Base carpet color (office gray)
    ctx.fillStyle = '#6b7280';
    ctx.fillRect(0, 0, 512, 512);

    // Carpet fibers (noise)
    for (let i = 0; i < 5000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const brightness = Math.random() * 50 - 25;
        ctx.fillStyle = `rgb(${107 + brightness}, ${114 + brightness}, ${128 + brightness})`;
        ctx.fillRect(x, y, 2, 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
    return texture;
}

function createMetalTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Brushed metal effect
    const gradient = ctx.createLinearGradient(0, 0, 256, 0);
    gradient.addColorStop(0, '#888888');
    gradient.addColorStop(0.5, '#aaaaaa');
    gradient.addColorStop(1, '#888888');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);

    // Brush lines
    for (let i = 0; i < 50; i++) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.2})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(Math.random() * 256, 0);
        ctx.lineTo(Math.random() * 256, 256);
        ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}

function createConcreteTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Base concrete color
    ctx.fillStyle = '#d4d4d4';
    ctx.fillRect(0, 0, 512, 512);

    // Concrete texture (noise and cracks)
    for (let i = 0; i < 3000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const brightness = Math.random() * 40 - 20;
        ctx.fillStyle = `rgb(${212 + brightness}, ${212 + brightness}, ${212 + brightness})`;
        ctx.fillRect(x, y, Math.random() * 3 + 1, Math.random() * 3 + 1);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
}

function createFabricTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Base fabric color
    ctx.fillStyle = '#333333';
    ctx.fillRect(0, 0, 256, 256);

    // Fabric weave pattern
    for (let x = 0; x < 256; x += 4) {
        for (let y = 0; y < 256; y += 4) {
            const brightness = Math.random() * 30 - 15;
            ctx.fillStyle = `rgb(${51 + brightness}, ${51 + brightness}, ${51 + brightness})`;
            ctx.fillRect(x, y, 2, 2);
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
}

// ==================== INITIALIZATION ====================
function init() {
    console.log('Initializing 3D Game...');

    // Create textures first
    createProceduralTextures();

    // Setup Three.js scene
    setupScene();

    // Setup physics world
    setupPhysics();

    // Create environment
    createOfficeEnvironment();

    // Create NPCs
    createNPCs();

    // Setup player
    setupPlayer();

    // Setup controls
    setupControls();

    // Setup lights
    setupLights();

    // Setup post-processing
    setupPostProcessing();

    // Hide loading screen
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'flex';

    // Start button
    document.getElementById('start-button').addEventListener('click', startGame);
}

function setupScene() {
    // Create scene
    GameState.scene = new THREE.Scene();
    GameState.scene.background = new THREE.Color(0x87ceeb);
    GameState.scene.fog = new THREE.Fog(0x87ceeb, 0, 100);

    // Create camera
    GameState.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    GameState.camera.position.set(0, GameState.playerHeight, 0);

    // Create renderer
    const canvas = document.getElementById('gameCanvas');
    GameState.renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    });
    GameState.renderer.setSize(window.innerWidth, window.innerHeight);
    GameState.renderer.setPixelRatio(window.devicePixelRatio);
    GameState.renderer.shadowMap.enabled = true;
    GameState.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Handle window resize
    window.addEventListener('resize', onWindowResize);
}

function setupPhysics() {
    // Create Cannon.js physics world
    GameState.world = new CANNON.World();
    GameState.world.gravity.set(0, -20, 0);
    GameState.world.broadphase = new CANNON.NaiveBroadphase();
    GameState.world.solver.iterations = 10;

    // Contact material for less bounciness
    const groundMaterial = new CANNON.Material('groundMaterial');
    const playerMaterial = new CANNON.Material('playerMaterial');

    const contactMaterial = new CANNON.ContactMaterial(
        groundMaterial,
        playerMaterial,
        {
            friction: 0.4,
            restitution: 0.0
        }
    );

    GameState.world.addContactMaterial(contactMaterial);
}

function setupPlayer() {
    // Create physics body for player (capsule approximated as sphere)
    const shape = new CANNON.Sphere(GameState.playerRadius);
    GameState.playerBody = new CANNON.Body({
        mass: 80,
        shape: shape,
        position: new CANNON.Vec3(0, 5, 0),
        linearDamping: 0.9,
        fixedRotation: true
    });

    GameState.world.addBody(GameState.playerBody);

    // Add contact listener to detect when player can jump
    GameState.playerBody.addEventListener('collide', (e) => {
        const contact = e.contact;

        // Check if player is on ground (contact normal points up)
        if (contact.bi.id === GameState.playerBody.id || contact.bj.id === GameState.playerBody.id) {
            const normal = new CANNON.Vec3();
            if (contact.bi.id === GameState.playerBody.id) {
                contact.ni.negate(normal);
            } else {
                normal.copy(contact.ni);
            }

            if (normal.y > 0.5) {
                GameState.canJump = true;
            }
        }
    });
}

function setupLights() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    GameState.scene.add(ambientLight);

    // Main directional light (sun)
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    dirLight.shadow.camera.left = -30;
    dirLight.shadow.camera.right = 30;
    dirLight.shadow.camera.top = 30;
    dirLight.shadow.camera.bottom = -30;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    GameState.scene.add(dirLight);

    // Office lights (point lights)
    const officeLight1 = new THREE.PointLight(0xffffee, 0.5, 20);
    officeLight1.position.set(0, 4, 0);
    officeLight1.castShadow = true;
    GameState.scene.add(officeLight1);

    const officeLight2 = new THREE.PointLight(0xffffee, 0.5, 20);
    officeLight2.position.set(10, 4, 10);
    officeLight2.castShadow = true;
    GameState.scene.add(officeLight2);

    const officeLight3 = new THREE.PointLight(0xffffee, 0.5, 20);
    officeLight3.position.set(-10, 4, -10);
    officeLight3.castShadow = true;
    GameState.scene.add(officeLight3);
}

function setupPostProcessing() {
    // Check if EffectComposer is available
    if (typeof THREE.EffectComposer === 'undefined') {
        console.warn('Post-processing not available - EffectComposer not loaded');
        return;
    }

    // Create composer
    GameState.composer = new THREE.EffectComposer(GameState.renderer);

    // Render pass
    const renderPass = new THREE.RenderPass(GameState.scene, GameState.camera);
    GameState.composer.addPass(renderPass);

    // Bloom pass for glow effect
    const bloomPass = new THREE.UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.5,  // strength
        0.4,  // radius
        0.85  // threshold
    );
    GameState.composer.addPass(bloomPass);

    console.log('Post-processing enabled with Bloom');
}

function createOfficeEnvironment() {
    // Floor with carpet texture
    const floorGeometry = new THREE.PlaneGeometry(60, 60);
    const floorMaterial = new THREE.MeshStandardMaterial({
        map: GameState.textures.carpet,
        roughness: 0.9,
        metalness: 0.0,
        normalScale: new THREE.Vector2(0.5, 0.5)
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    GameState.scene.add(floor);

    // Physics floor
    const floorShape = new CANNON.Plane();
    const floorBody = new CANNON.Body({
        mass: 0,
        shape: floorShape
    });
    floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    GameState.world.addBody(floorBody);

    // Ceiling with concrete texture
    const ceilingGeometry = new THREE.PlaneGeometry(60, 60);
    const ceilingMaterial = new THREE.MeshStandardMaterial({
        map: GameState.textures.concrete,
        color: 0xeeeeee,
        roughness: 0.95,
        metalness: 0.0,
        side: THREE.DoubleSide
    });
    const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 5;
    ceiling.receiveShadow = true;
    GameState.scene.add(ceiling);

    // Create walls for main office
    createWalls();

    // Create office furniture
    createFurniture();

    // Create decorative elements
    createDecor();
}

function createWalls() {
    const wallMaterial = new THREE.MeshStandardMaterial({
        map: GameState.textures.concrete,
        color: 0xeeeeee,
        roughness: 0.85,
        metalness: 0.0
    });

    const walls = [
        // North wall
        { x: 0, z: -30, width: 60, height: 5, depth: 0.5, rotation: 0 },
        // South wall
        { x: 0, z: 30, width: 60, height: 5, depth: 0.5, rotation: 0 },
        // East wall
        { x: 30, z: 0, width: 0.5, height: 5, depth: 60, rotation: 0 },
        // West wall
        { x: -30, z: 0, width: 0.5, height: 5, depth: 60, rotation: 0 }
    ];

    walls.forEach(wall => {
        const geometry = new THREE.BoxGeometry(wall.width, wall.height, wall.depth);
        const mesh = new THREE.Mesh(geometry, wallMaterial);
        mesh.position.set(wall.x, wall.height / 2, wall.z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        GameState.scene.add(mesh);

        // Physics
        const shape = new CANNON.Box(new CANNON.Vec3(wall.width / 2, wall.height / 2, wall.depth / 2));
        const body = new CANNON.Body({ mass: 0, shape: shape });
        body.position.set(wall.x, wall.height / 2, wall.z);
        GameState.world.addBody(body);
    });

    // Internal walls for rooms
    const internalWalls = [
        // Room dividers
        { x: -15, z: 10, width: 0.3, height: 5, depth: 20, rotation: 0 },
        { x: 15, z: -10, width: 0.3, height: 5, depth: 20, rotation: 0 }
    ];

    internalWalls.forEach(wall => {
        const geometry = new THREE.BoxGeometry(wall.width, wall.height, wall.depth);
        const mesh = new THREE.Mesh(geometry, wallMaterial);
        mesh.position.set(wall.x, wall.height / 2, wall.z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        GameState.scene.add(mesh);

        // Physics
        const shape = new CANNON.Box(new CANNON.Vec3(wall.width / 2, wall.height / 2, wall.depth / 2));
        const body = new CANNON.Body({ mass: 0, shape: shape });
        body.position.set(wall.x, wall.height / 2, wall.z);
        GameState.world.addBody(body);
    });
}

function createFurniture() {
    const deskMaterial = new THREE.MeshStandardMaterial({
        map: GameState.textures.wood,
        roughness: 0.6,
        metalness: 0.1
    });

    const computerMaterial = new THREE.MeshStandardMaterial({
        map: GameState.textures.metal,
        color: 0x444444,
        roughness: 0.3,
        metalness: 0.8,
        emissive: 0x111111
    });

    // Desks with computers
    const deskPositions = [
        { x: -20, z: -20 },
        { x: -20, z: 0 },
        { x: -20, z: 20 },
        { x: 20, z: -20 },
        { x: 20, z: 0 },
        { x: 20, z: 20 },
        { x: 0, z: -15 },
        { x: 0, z: 15 }
    ];

    deskPositions.forEach(pos => {
        // Desk
        const deskGeometry = new THREE.BoxGeometry(2, 0.8, 1.2);
        const desk = new THREE.Mesh(deskGeometry, deskMaterial);
        desk.position.set(pos.x, 0.4, pos.z);
        desk.castShadow = true;
        desk.receiveShadow = true;
        GameState.scene.add(desk);

        // Physics for desk
        const deskShape = new CANNON.Box(new CANNON.Vec3(1, 0.4, 0.6));
        const deskBody = new CANNON.Body({ mass: 0, shape: deskShape });
        deskBody.position.set(pos.x, 0.4, pos.z);
        GameState.world.addBody(deskBody);

        // Computer monitor
        const monitorGeometry = new THREE.BoxGeometry(0.6, 0.5, 0.1);
        const monitor = new THREE.Mesh(monitorGeometry, computerMaterial);
        monitor.position.set(pos.x, 1.05, pos.z);
        monitor.castShadow = true;
        GameState.scene.add(monitor);

        // Monitor screen (glowing)
        const screenGeometry = new THREE.PlaneGeometry(0.55, 0.45);
        const screenMaterial = new THREE.MeshBasicMaterial({
            color: 0x4488ff,
            emissive: 0x2266cc,
            emissiveIntensity: 0.5
        });
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        screen.position.set(pos.x, 1.05, pos.z + 0.051);
        GameState.scene.add(screen);
    });

    // Conference table
    const tableGeometry = new THREE.BoxGeometry(4, 0.8, 2);
    const table = new THREE.Mesh(tableGeometry, deskMaterial);
    table.position.set(0, 0.4, 0);
    table.castShadow = true;
    table.receiveShadow = true;
    GameState.scene.add(table);

    // Physics for table
    const tableShape = new CANNON.Box(new CANNON.Vec3(2, 0.4, 1));
    const tableBody = new CANNON.Body({ mass: 0, shape: tableShape });
    tableBody.position.set(0, 0.4, 0);
    GameState.world.addBody(tableBody);

    // Chairs around conference table
    const chairMaterial = new THREE.MeshStandardMaterial({
        color: 0x444444,
        roughness: 0.7
    });

    const chairPositions = [
        { x: -1.5, z: 1.5 },
        { x: 1.5, z: 1.5 },
        { x: -1.5, z: -1.5 },
        { x: 1.5, z: -1.5 }
    ];

    chairPositions.forEach(pos => {
        const chairGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const chair = new THREE.Mesh(chairGeometry, chairMaterial);
        chair.position.set(pos.x, 0.25, pos.z);
        chair.castShadow = true;
        chair.receiveShadow = true;
        GameState.scene.add(chair);

        // Chair back
        const backGeometry = new THREE.BoxGeometry(0.5, 0.6, 0.1);
        const back = new THREE.Mesh(backGeometry, chairMaterial);
        back.position.set(pos.x, 0.8, pos.z + 0.2);
        back.castShadow = true;
        GameState.scene.add(back);
    });
}

function createDecor() {
    // Plants
    const plantMaterial = new THREE.MeshStandardMaterial({
        color: 0x228B22,
        roughness: 0.8
    });

    const potMaterial = new THREE.MeshStandardMaterial({
        color: 0x8B4513,
        roughness: 0.6
    });

    const plantPositions = [
        { x: -25, z: -25 },
        { x: 25, z: -25 },
        { x: -25, z: 25 },
        { x: 25, z: 25 }
    ];

    plantPositions.forEach(pos => {
        // Pot
        const potGeometry = new THREE.CylinderGeometry(0.3, 0.2, 0.5, 8);
        const pot = new THREE.Mesh(potGeometry, potMaterial);
        pot.position.set(pos.x, 0.25, pos.z);
        pot.castShadow = true;
        pot.receiveShadow = true;
        GameState.scene.add(pot);

        // Plant (simple sphere for leaves)
        const plantGeometry = new THREE.SphereGeometry(0.5, 8, 8);
        const plant = new THREE.Mesh(plantGeometry, plantMaterial);
        plant.position.set(pos.x, 0.8, pos.z);
        plant.castShadow = true;
        GameState.scene.add(plant);
    });

    // Whiteboards on walls
    const whiteboardMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.2,
        metalness: 0.1
    });

    const whiteboardGeometry = new THREE.BoxGeometry(3, 1.5, 0.1);
    const whiteboard = new THREE.Mesh(whiteboardGeometry, whiteboardMaterial);
    whiteboard.position.set(0, 2.5, -29.7);
    whiteboard.castShadow = true;
    GameState.scene.add(whiteboard);
}

function createNPCs() {
    // Get NPC data from npcs_data.js
    const npcDataList = window.npcsData || [];

    const npcPositions = [
        { x: -20, z: -20 },
        { x: -20, z: 0 },
        { x: -20, z: 20 },
        { x: 20, z: -20 },
        { x: 20, z: 0 },
        { x: 20, z: 20 },
        { x: -5, z: -15 },
        { x: 5, z: 15 },
        { x: -10, z: 10 },
        { x: 10, z: -10 },
        { x: -15, z: -5 },
        { x: 15, z: 5 }
    ];

    npcDataList.slice(0, 12).forEach((npcData, index) => {
        const pos = npcPositions[index];

        // Create NPC 3D model (detailed humanoid)
        const npcGroup = new THREE.Group();
        const baseColor = getRandomColor();

        // Legs
        const legGeometry = new THREE.BoxGeometry(0.2, 0.7, 0.2);
        const legMaterial = new THREE.MeshStandardMaterial({
            color: 0x2c3e50,
            roughness: 0.8
        });
        const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
        leftLeg.position.set(-0.15, 0.35, 0);
        leftLeg.castShadow = true;
        npcGroup.add(leftLeg);

        const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
        rightLeg.position.set(0.15, 0.35, 0);
        rightLeg.castShadow = true;
        npcGroup.add(rightLeg);

        // Torso
        const torsoGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.3);
        const torsoMaterial = new THREE.MeshStandardMaterial({
            color: baseColor,
            roughness: 0.6,
            metalness: 0.1
        });
        const torso = new THREE.Mesh(torsoGeometry, torsoMaterial);
        torso.position.y = 1.1;
        torso.castShadow = true;
        npcGroup.add(torso);

        // Arms
        const armGeometry = new THREE.BoxGeometry(0.15, 0.7, 0.15);
        const armMaterial = new THREE.MeshStandardMaterial({
            color: baseColor,
            roughness: 0.6
        });
        const leftArm = new THREE.Mesh(armGeometry, armMaterial);
        leftArm.position.set(-0.375, 1, 0);
        leftArm.castShadow = true;
        npcGroup.add(leftArm);

        const rightArm = new THREE.Mesh(armGeometry, armMaterial);
        rightArm.position.set(0.375, 1, 0);
        rightArm.castShadow = true;
        npcGroup.add(rightArm);

        // Head
        const headGeometry = new THREE.SphereGeometry(0.25, 20, 20);
        const headMaterial = new THREE.MeshStandardMaterial({
            color: 0xffdbac,
            roughness: 0.7
        });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.position.y = 1.75;
        head.castShadow = true;
        npcGroup.add(head);

        // Eyes
        const eyeGeometry = new THREE.SphereGeometry(0.05, 8, 8);
        const eyeMaterial = new THREE.MeshStandardMaterial({
            color: 0x000000,
            emissive: 0x333333
        });
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.1, 1.8, 0.22);
        npcGroup.add(leftEye);

        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.1, 1.8, 0.22);
        npcGroup.add(rightEye);

        // Add glow effect around NPC
        const glowGeometry = new THREE.SphereGeometry(0.8, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: baseColor,
            transparent: true,
            opacity: 0.1,
            side: THREE.BackSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.y = 1.2;
        npcGroup.add(glow);

        // Name tag above head
        createNameTag(npcData.name, npcGroup, 2.3);

        // Position NPC
        npcGroup.position.set(pos.x + 1, 0, pos.z);
        GameState.scene.add(npcGroup);

        // Store NPC data
        GameState.npcs.push({
            mesh: npcGroup,
            data: npcData,
            position: pos,
            talked: false
        });

        // Add particle effect above NPC
        createNPCParticles(npcGroup, baseColor);
    });
}

function createNameTag(name, parentGroup, yOffset) {
    // Create canvas for name
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;

    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'white';
    context.font = 'bold 24px Arial';
    context.textAlign = 'center';
    context.fillText(name, canvas.width / 2, canvas.height / 2 + 8);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(1.5, 0.375, 1);
    sprite.position.y = yOffset;

    parentGroup.add(sprite);
}

function getRandomColor() {
    const colors = [0x3498db, 0xe74c3c, 0x2ecc71, 0xf39c12, 0x9b59b6, 0x1abc9c];
    return colors[Math.floor(Math.random() * colors.length)];
}

// ==================== PARTICLE SYSTEM ====================
function createNPCParticles(npcGroup, color) {
    const particleCount = 20;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
        positions.push(
            (Math.random() - 0.5) * 0.5,
            2.5 + Math.random() * 0.5,
            (Math.random() - 0.5) * 0.5
        );
        velocities.push(
            (Math.random() - 0.5) * 0.02,
            Math.random() * 0.02 + 0.01,
            (Math.random() - 0.5) * 0.02
        );
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: color,
        size: 0.1,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    npcGroup.add(particles);

    // Store particle system for updates
    GameState.particleSystems.push({
        particles: particles,
        velocities: velocities,
        parent: npcGroup,
        time: 0
    });
}

function updateParticles(delta) {
    GameState.particleSystems.forEach(system => {
        const positions = system.particles.geometry.attributes.position.array;

        for (let i = 0; i < positions.length / 3; i++) {
            const idx = i * 3;

            // Update position
            positions[idx] += system.velocities[idx];
            positions[idx + 1] += system.velocities[idx + 1];
            positions[idx + 2] += system.velocities[idx + 2];

            // Reset particle if too high
            if (positions[idx + 1] > 3.5) {
                positions[idx] = (Math.random() - 0.5) * 0.5;
                positions[idx + 1] = 2.5;
                positions[idx + 2] = (Math.random() - 0.5) * 0.5;
            }
        }

        system.particles.geometry.attributes.position.needsUpdate = true;

        // Rotate particles slightly
        system.particles.rotation.y += delta * 0.5;
    });
}

function setupControls() {
    // Keyboard controls
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    // Mouse controls (pointer lock)
    document.addEventListener('click', () => {
        if (!document.pointerLockElement) {
            document.body.requestPointerLock();
        }
    });

    document.addEventListener('mousemove', onMouseMove);

    // Pointer lock change
    document.addEventListener('pointerlockchange', () => {
        if (document.pointerLockElement === document.body) {
            console.log('Pointer locked');
        } else {
            console.log('Pointer unlocked');
        }
    });
}

function onKeyDown(event) {
    switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
            GameState.controls.moveForward = true;
            break;
        case 'KeyS':
        case 'ArrowDown':
            GameState.controls.moveBackward = true;
            break;
        case 'KeyA':
        case 'ArrowLeft':
            GameState.controls.moveLeft = true;
            break;
        case 'KeyD':
        case 'ArrowRight':
            GameState.controls.moveRight = true;
            break;
        case 'Space':
            GameState.controls.jump = true;
            break;
        case 'KeyE':
            GameState.controls.interact = true;
            handleInteraction();
            break;
        case 'Escape':
            if (document.getElementById('dialog-box').style.display === 'block') {
                closeDialog();
            } else {
                document.exitPointerLock();
            }
            break;
    }
}

function onKeyUp(event) {
    switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
            GameState.controls.moveForward = false;
            break;
        case 'KeyS':
        case 'ArrowDown':
            GameState.controls.moveBackward = false;
            break;
        case 'KeyA':
        case 'ArrowLeft':
            GameState.controls.moveLeft = false;
            break;
        case 'KeyD':
        case 'ArrowRight':
            GameState.controls.moveRight = false;
            break;
        case 'Space':
            GameState.controls.jump = false;
            break;
        case 'KeyE':
            GameState.controls.interact = false;
            break;
    }
}

function onMouseMove(event) {
    if (document.pointerLockElement === document.body) {
        const movementX = event.movementX || 0;
        const movementY = event.movementY || 0;

        GameState.euler.y -= movementX * 0.002;
        GameState.euler.x -= movementY * 0.002;

        // Limit vertical rotation
        GameState.euler.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, GameState.euler.x));
    }
}

function onWindowResize() {
    GameState.camera.aspect = window.innerWidth / window.innerHeight;
    GameState.camera.updateProjectionMatrix();
    GameState.renderer.setSize(window.innerWidth, window.innerHeight);
}

// ==================== GAME LOOP ====================
function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.body.requestPointerLock();
    GameState.startTime = Date.now();

    // Initialize audio
    initAudio();
    playBackgroundMusic();

    // Initialize incidents
    initIncidents();

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    const delta = GameState.clock.getDelta();

    // Update physics
    GameState.world.step(1 / 60, delta, 3);

    // Update player movement
    updatePlayerMovement(delta);

    // Update camera position
    updateCamera();

    // Check for nearby NPCs
    checkNearbyNPCs();

    // Update HUD
    updateHUD();

    // Update particle systems
    updateParticles(delta);

    // Render with post-processing if available
    if (GameState.composer) {
        GameState.composer.render();
    } else {
        GameState.renderer.render(GameState.scene, GameState.camera);
    }
}

function updatePlayerMovement(delta) {
    const velocity = GameState.playerBody.velocity;

    // Direction vectors
    const forward = new THREE.Vector3();
    const right = new THREE.Vector3();

    GameState.camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

    // Calculate movement
    const moveDirection = new THREE.Vector3();

    if (GameState.controls.moveForward) {
        moveDirection.add(forward);
    }
    if (GameState.controls.moveBackward) {
        moveDirection.sub(forward);
    }
    if (GameState.controls.moveLeft) {
        moveDirection.sub(right);
    }
    if (GameState.controls.moveRight) {
        moveDirection.add(right);
    }

    moveDirection.normalize();
    moveDirection.multiplyScalar(GameState.moveSpeed);

    // Apply horizontal velocity
    velocity.x = moveDirection.x;
    velocity.z = moveDirection.z;

    // Jump
    if (GameState.controls.jump && GameState.canJump) {
        velocity.y = GameState.jumpVelocity;
        GameState.canJump = false;
    }
}

function updateCamera() {
    // Update camera rotation
    GameState.camera.quaternion.setFromEuler(GameState.euler);

    // Update camera position to follow player
    GameState.camera.position.set(
        GameState.playerBody.position.x,
        GameState.playerBody.position.y + GameState.playerHeight - 0.5,
        GameState.playerBody.position.z
    );
}

function checkNearbyNPCs() {
    // Raycast from camera to check for NPCs
    const direction = new THREE.Vector3();
    GameState.camera.getWorldDirection(direction);

    GameState.raycaster.set(GameState.camera.position, direction);

    const npcMeshes = GameState.npcs.map(npc => npc.mesh);
    const intersects = GameState.raycaster.intersectObjects(npcMeshes, true);

    if (intersects.length > 0 && intersects[0].distance < 3) {
        // Find which NPC was hit
        const hitObject = intersects[0].object;
        let targetNPC = null;

        for (const npc of GameState.npcs) {
            if (npc.mesh === hitObject || npc.mesh.children.includes(hitObject)) {
                targetNPC = npc;
                break;
            }
        }

        if (targetNPC && !targetNPC.talked) {
            GameState.nearestInteractable = targetNPC;
            document.getElementById('interaction-prompt').style.display = 'block';
            return;
        }
    }

    GameState.nearestInteractable = null;
    document.getElementById('interaction-prompt').style.display = 'none';
}

function handleInteraction() {
    if (GameState.nearestInteractable && !GameState.nearestInteractable.talked) {
        openNPCDialog(GameState.nearestInteractable);
    }
}

function openNPCDialog(npc) {
    GameState.currentNPC = npc;

    const dialogBox = document.getElementById('dialog-box');
    const dialogContent = document.getElementById('dialog-content');
    const dialogButtons = document.getElementById('dialog-buttons');

    // Get question
    const questionData = npc.data.questions[0]; // For simplicity, use first question

    dialogContent.innerHTML = `
        <h3>${npc.data.name}</h3>
        <p><em>"${npc.data.greeting}"</em></p>
        <br>
        <h4>${questionData.question}</h4>
    `;

    // Create answer buttons
    dialogButtons.innerHTML = '';
    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'dialog-button';
        button.textContent = answer;
        button.onclick = () => handleAnswer(index, questionData.correctAnswer);
        dialogButtons.appendChild(button);
    });

    dialogBox.style.display = 'block';
    document.exitPointerLock();
}

function handleAnswer(selectedIndex, correctIndex) {
    const isCorrect = selectedIndex === correctIndex;

    const dialogContent = document.getElementById('dialog-content');
    const dialogButtons = document.getElementById('dialog-buttons');

    // Mark button as correct/wrong
    const buttons = dialogButtons.querySelectorAll('.dialog-button');
    buttons[selectedIndex].className += isCorrect ? ' correct' : ' wrong';
    buttons[correctIndex].className += ' correct';

    if (isCorrect) {
        GameState.score += 100;
        dialogContent.innerHTML += '<br><p style="color: #4CAF50;">✅ Richtig! +100 Punkte</p>';

        // Mark NPC as talked
        GameState.currentNPC.talked = true;
        GameState.npcProgress++;

        // Change NPC color to indicate completion (torso is at index 2)
        // Also change arms (indices 3, 4) and glow (index 7)
        GameState.currentNPC.mesh.children[2].material.color.setHex(0x4CAF50); // Torso
        GameState.currentNPC.mesh.children[3].material.color.setHex(0x4CAF50); // Left arm
        GameState.currentNPC.mesh.children[4].material.color.setHex(0x4CAF50); // Right arm
        if (GameState.currentNPC.mesh.children[7]) {
            GameState.currentNPC.mesh.children[7].material.color.setHex(0x4CAF50); // Glow
        }

        // Play success sound
        playSoundEffect(1200, 0.3);

        // Check if game is completed
        checkGameCompletion();
    } else {
        dialogContent.innerHTML += '<br><p style="color: #f44336;">❌ Leider falsch!</p>';
        playSoundEffect(400, 0.3);
    }

    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    // Add close button
    setTimeout(() => {
        const closeButton = document.createElement('button');
        closeButton.className = 'dialog-button';
        closeButton.textContent = 'Weiter';
        closeButton.onclick = closeDialog;
        dialogButtons.innerHTML = '';
        dialogButtons.appendChild(closeButton);
    }, 2000);
}

function closeDialog() {
    document.getElementById('dialog-box').style.display = 'none';
    document.body.requestPointerLock();
    GameState.currentNPC = null;
}

function updateHUD() {
    document.getElementById('score-display').textContent = GameState.score;
    document.getElementById('npc-progress').textContent = `${GameState.npcProgress}/12`;

    const elapsed = Math.floor((Date.now() - GameState.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('time-display').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// ==================== AUDIO SYSTEM ====================
function initAudio() {
    GameState.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    GameState.musicGainNode = GameState.audioContext.createGain();
    GameState.musicGainNode.connect(GameState.audioContext.destination);
    GameState.musicGainNode.gain.value = 0.3;
}

function playBackgroundMusic() {
    if (GameState.isMusicPlaying || !GameState.audioContext) return;

    const notes = [
        { freq: 523.25, duration: 0.3 },  // C5
        { freq: 587.33, duration: 0.3 },  // D5
        { freq: 659.25, duration: 0.3 },  // E5
        { freq: 698.46, duration: 0.3 },  // F5
        { freq: 783.99, duration: 0.6 },  // G5
        { freq: 659.25, duration: 0.3 },  // E5
        { freq: 523.25, duration: 0.6 }   // C5
    ];

    GameState.isMusicPlaying = true;
    let time = GameState.audioContext.currentTime;

    function playLoop() {
        if (!GameState.isMusicPlaying) return;

        notes.forEach(note => {
            const oscillator = GameState.audioContext.createOscillator();
            oscillator.type = 'square';
            oscillator.frequency.value = note.freq;
            oscillator.connect(GameState.musicGainNode);
            oscillator.start(time);
            oscillator.stop(time + note.duration * 0.8);
            time += note.duration;
        });

        setTimeout(playLoop, notes.reduce((sum, n) => sum + n.duration, 0) * 1000);
    }

    playLoop();
}

function playSoundEffect(frequency, duration = 0.1) {
    if (!GameState.audioContext) return;

    const oscillator = GameState.audioContext.createOscillator();
    const gainNode = GameState.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(GameState.audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, GameState.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, GameState.audioContext.currentTime + duration);

    oscillator.start();
    oscillator.stop(GameState.audioContext.currentTime + duration);
}

// ==================== INCIDENT SYSTEM ====================
function initIncidents() {
    if (window.incidentsData && window.incidentsData.length > 0) {
        GameState.incidents = window.incidentsData;
        scheduleNextIncident();
    }
}

function scheduleNextIncident() {
    // Random time between 30-90 seconds
    const delay = 30000 + Math.random() * 60000;

    GameState.incidentTimer = setTimeout(() => {
        showRandomIncident();
    }, delay);
}

function showRandomIncident() {
    // Get unused incidents
    const availableIncidents = GameState.incidents.filter(
        incident => !GameState.usedIncidents.includes(incident.id)
    );

    if (availableIncidents.length === 0) {
        console.log('All incidents used!');
        return;
    }

    const incident = availableIncidents[Math.floor(Math.random() * availableIncidents.length)];
    GameState.usedIncidents.push(incident.id);

    showIncidentDialog(incident);
}

function showIncidentDialog(incident) {
    const dialogBox = document.getElementById('dialog-box');
    const dialogContent = document.getElementById('dialog-content');
    const dialogButtons = document.getElementById('dialog-buttons');

    dialogContent.innerHTML = `
        <h3>⚠️ Sicherheitsvorfall!</h3>
        <p>${incident.description}</p>
        <br>
        <h4>${incident.question}</h4>
    `;

    dialogButtons.innerHTML = '';
    incident.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'dialog-button';
        button.textContent = option.text;
        button.onclick = () => handleIncidentAnswer(option, incident);
        dialogButtons.appendChild(button);
    });

    dialogBox.style.display = 'block';
    document.exitPointerLock();

    playSoundEffect(800, 0.2);
}

function handleIncidentAnswer(selectedOption, incident) {
    const dialogContent = document.getElementById('dialog-content');
    const dialogButtons = document.getElementById('dialog-buttons');

    const isCorrect = selectedOption.isCorrect;

    if (isCorrect) {
        GameState.score += selectedOption.points || 50;
        dialogContent.innerHTML += `<br><p style="color: #4CAF50;">✅ ${selectedOption.feedback}</p>`;
        dialogContent.innerHTML += `<p style="color: #4CAF50;">+${selectedOption.points || 50} Punkte</p>`;
        playSoundEffect(1000, 0.3);
    } else {
        dialogContent.innerHTML += `<br><p style="color: #f44336;">❌ ${selectedOption.feedback}</p>`;
        playSoundEffect(400, 0.3);
    }

    // Disable all buttons
    dialogButtons.querySelectorAll('.dialog-button').forEach(btn => btn.disabled = true);

    // Add close button
    setTimeout(() => {
        const closeButton = document.createElement('button');
        closeButton.className = 'dialog-button';
        closeButton.textContent = 'Weiter';
        closeButton.onclick = () => {
            closeDialog();
            scheduleNextIncident();
        };
        dialogButtons.innerHTML = '';
        dialogButtons.appendChild(closeButton);
    }, 2000);
}

// ==================== ENHANCED FEATURES ====================
function checkGameCompletion() {
    if (GameState.npcProgress >= 12) {
        setTimeout(() => {
            showCompletionDialog();
        }, 1000);
    }
}

function showCompletionDialog() {
    const dialogBox = document.getElementById('dialog-box');
    const dialogContent = document.getElementById('dialog-content');
    const dialogButtons = document.getElementById('dialog-buttons');

    const elapsed = Math.floor((Date.now() - GameState.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    dialogContent.innerHTML = `
        <h2>🎉 Herzlichen Glückwunsch!</h2>
        <p>Du hast alle NPCs erfolgreich abgeschlossen!</p>
        <br>
        <h3>📊 Deine Statistik:</h3>
        <p><strong>Score:</strong> ${GameState.score} Punkte</p>
        <p><strong>Zeit:</strong> ${minutes}:${seconds.toString().padStart(2, '0')}</p>
        <p><strong>NPCs:</strong> ${GameState.npcProgress}/12</p>
        <p><strong>Incidents gelöst:</strong> ${GameState.usedIncidents.length}</p>
    `;

    dialogButtons.innerHTML = '';
    const restartButton = document.createElement('button');
    restartButton.className = 'dialog-button';
    restartButton.textContent = 'Spiel neu starten';
    restartButton.onclick = () => location.reload();
    dialogButtons.appendChild(restartButton);

    dialogBox.style.display = 'block';
    document.exitPointerLock();
}

// ==================== START ====================
window.addEventListener('DOMContentLoaded', init);
