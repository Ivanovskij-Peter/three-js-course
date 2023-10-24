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

  const particleGeo = new THREE.BufferGeometry();

  const particleMat = new THREE.PointsMaterial({
    color: "rgb(255, 255, 255)",
    size: 1,
    map: new THREE.TextureLoader().load(texture),
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const particleCount = 100000;
  const particleDistance = 500;
  const arr = [];
  const newArr = [];
  newArr.push(arr);

  for (let i = 0; i < particleCount; i++) {
    const posX = (Math.random() - 0.5) * particleDistance;
    const posY = (Math.random() - 0.5) * particleDistance;
    const posZ = (Math.random() - 0.5) * particleDistance;
    // const particle = new THREE.Vector3(posX, posY, posZ);
    arr.push(posX, posY, posZ);
  }

  particleGeo.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(Array.from(arr), 3)
  );

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  particleSystem.name = "particleSystem";

  scene.add(particleSystem);

  function update(renderer, scene, camera, controls, clock) {
    renderer.render(scene, camera);

    controls.update();

    const particleSystem = scene.getObjectByName("particleSystem");
    particleSystem.rotation.y += 0.001;
    particleSystem.rotation.x += 0.001;

    // console.log(particleSystem.geometry.getAttribute("position"));

    // const arr = particleSystem.geometry.attributes.position.array;
    // const point = new THREE.Vector3();

    // for (let i = 0; i < arr; i++) {
    //   point.fromBufferAttribute(arr, i);
    //   const key = [point.x, point.y, point.z].join(",");
    //   key[0] = (Math.random() - 1) * 0.1;
    //   key[1] = (Math.random() - 0.75) * 0.1;
    //   key[2] = Math.random() * 0.1;

    //   particleSystem.geometry.attributes.position.array.setXYZ(
    //     key[0],
    //     key[1],
    //     key[2]
    //   );
    // }

    //   if (particle.x < 50) {
    //     particle.x = 50;
    //   }
    //   if (particle.y < 50) {
    //     particle.y = 50;
    //   }
    //   if (particle.z < 50) {
    //     particle.z = 50;
    //   }
    // });

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
