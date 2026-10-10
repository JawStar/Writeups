(function () {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.z = 22;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);

  // --- Node graph: scattered points inside a sphere, connected if close enough ---
  const NODE_COUNT = 90;
  const RADIUS = 11;
  const positions = [];
  const nodeGroup = new THREE.Group();

  const amberColor = new THREE.Color(0xffb000);
  const cyanColor = new THREE.Color(0x2de2e6);

  const nodeGeo = new THREE.SphereGeometry(0.07, 6, 6);
  for (let i = 0; i < NODE_COUNT; i++) {
    // random point roughly within a sphere volume
    const r = RADIUS * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    positions.push(new THREE.Vector3(x, y, z));

    const isAmber = Math.random() < 0.18;
    const mat = new THREE.MeshBasicMaterial({ color: isAmber ? amberColor : cyanColor, transparent: true, opacity: isAmber ? 0.95 : 0.6 });
    const mesh = new THREE.Mesh(nodeGeo, mat);
    mesh.position.copy(positions[i]);
    nodeGroup.add(mesh);
  }

  // connecting lines between nearby nodes
  const lineVerts = [];
  const CONNECT_DIST = 4.6;
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      if (positions[i].distanceTo(positions[j]) < CONNECT_DIST) {
        lineVerts.push(positions[i].x, positions[i].y, positions[i].z);
        lineVerts.push(positions[j].x, positions[j].y, positions[j].z);
      }
    }
  }
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(lineVerts, 3));
  const lineMat = new THREE.LineBasicMaterial({ color: 0x2de2e6, transparent: true, opacity: 0.12 });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  nodeGroup.add(lines);

  scene.add(nodeGroup);

  // subtle parallax toward mouse
  let mouseX = 0, mouseY = 0;
  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
  });

  resize();

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.0022;
    nodeGroup.rotation.y = t;
    nodeGroup.rotation.x = Math.sin(t * 0.6) * 0.15;

    camera.position.x += (mouseX * 3 - camera.position.x) * 0.02;
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }
  animate();
})();
