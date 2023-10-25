import { useEffect } from "react";
import "./App.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import texture from "./assets/textures/particle.jpg";

const App = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );

  camera.position.z = 0;
  camera.position.x = 0;
  camera.position.y = 1;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  const clock = new THREE.Clock();
  const pGeom = new THREE.BufferGeometry();
  const pMat = new THREE.PointsMaterial({
    color: "rgb(255, 255, 255)",
    size: 1,
    map: new THREE.TextureLoader().load(texture),
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const pCount = 20000;
  const pDistance = 100;
  const positions = new THREE.BufferAttribute(new Float32Array(pCount * 3), 3);
  for (let i = 0; i < pCount; i++) {
    positions.setXYZ(
      i,
      (Math.random() - 0.5) * pDistance,
      (Math.random() - 0.5) * pDistance,
      (Math.random() - 0.5) * pDistance
    );
  }
  pGeom.setAttribute("position", positions);
  pGeom.name = "pGeom";
  const particleSystem = new THREE.Points(pGeom, pMat);
  scene.add(particleSystem);

  function start() {
    const positionAttribute = particleSystem.geometry.getAttribute("position");

    particleSystem.rotation.y += 0.001;

    const vertex = new THREE.Vector3();

    for (var i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);
      vertex.x += (Math.random() - 1) * 0.1;
      vertex.y += (Math.random() - 0.75) * 0.1;
      vertex.z += Math.random() * 0.1;

      if (vertex.x < -50) {
        vertex.x = 50;
      }

      if (vertex.y < -50) {
        vertex.y = 50;
      }

      if (vertex.z < -50) {
        vertex.z = 50;
      }

      if (vertex.z > 50) {
        vertex.z = -50;
      }

      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    positionAttribute.needsUpdate = true;
  }

  function update(renderer, scene, camera, controls, clock) {
    renderer.render(scene, camera);

    controls.update();

    start();

    requestAnimationFrame(() => {
      update(renderer, scene, camera, controls, clock);
    });
  }

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("rgb(20,20,20)");
    document.getElementById("root").appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    const id = requestAnimationFrame(() => {
      update(renderer, scene, camera, controls, clock);
    });
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default App;
