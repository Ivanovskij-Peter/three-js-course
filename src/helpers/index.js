// function getBoxGrid(amount, separationMultiplier) {
//   const group = new THREE.Group();

//   for (let i = 0; i < amount; i++) {
//     const obj = getBox(1, 3, 1);
//     obj.position.x = i * separationMultiplier;
//     obj.position.y = obj.geometry.parameters.height / 2;
//     group.add(obj);
//     for (let j = 1; j < amount; j++) {
//       const obj = getBox(1, 3, 1);
//       obj.position.x = i * separationMultiplier;
//       obj.position.y = obj.geometry.parameters.height / 2;
//       obj.position.z = j * separationMultiplier;
//       group.add(obj);
//     }
//   }

//   group.position.x = -(separationMultiplier * (amount - 1)) / 2;
//   group.position.z = -(separationMultiplier * (amount - 1)) / 2;

//   return group;
// }

// function getPlane(size) {
//   const geometry = new THREE.PlaneGeometry(size, size);
//   const material = new THREE.MeshPhongMaterial({
//     color: "rgb(120, 120, 120)",
//     side: THREE.DoubleSide,
//   });
//   const mesh = new THREE.Mesh(geometry, material);
//   mesh.receiveShadow = true;
//   return mesh;
// }

// function getBox(w, h, d) {
//   const geometry = new THREE.BoxGeometry(w, h, d);
//   const material = new THREE.MeshPhongMaterial({
//     color: "rgb(255,255,255)",
//   });

//   const box = new THREE.Mesh(geometry, material);
//   box.castShadow = true;
//   return box;
// }

// function getSphere(size) {
//   const geometry = new THREE.SphereGeometry(size, 24, 24);
//   const material = new THREE.MeshBasicMaterial({
//     color: "rgb(255,255,255)",
//   });

//   const mesh = new THREE.Mesh(geometry, material);
//   return mesh;
// }

// function getDirectionLight(intensity) {
//   const light = new THREE.DirectionalLight(0xffffff, intensity);
//   light.castShadow = true;

//   light.shadow.camera.left = -40;
//   light.shadow.camera.bottom = -40;
//   light.shadow.camera.right = 40;
//   light.shadow.camera.top = 40;

//   light.shadow.mapSize.width = 4096;
//   light.shadow.mapSize.height = 4096;

//   return light;
// }

// const tween = new TWEEN.Tween({ val: 100 })
//   .to({ val: -50 }, 12000)
//   .onUpdate(function () {
//     cameraZPosition.position.z = this.val;
//   })
//   .start();
// function getAmbientight(intensity) {
//   const light = new THREE.AmbientLight("rgb(10,30,80)", intensity);

//   return light;
// }

// const timeElapsed = clock.getElapsedTime();

// const cameraZRotation = scene.getObjectByName("cameraZRotation");
// cameraZRotation.rotation.z =
//   noise(timeElapsed * 1.5, timeElapsed * 1.5) * 0.02;

// const boxGrid = scene.getObjectByName("boxGrid");
// boxGrid.children.forEach(function (child, index) {
//   const x = timeElapsed + index;
//   child.scale.y = (noise(x, x) + 1) / 2 + 0.001;
//   child.position.y = child.scale.y / 2;
// });

// function getSpotLight(intensity) {
//   const light = new THREE.SpotLight(0xffffff, intensity);
//   light.castShadow = true;

//   light.shadow.bias = 0.001;
//   light.shadow.mapSize.width = 2048;
//   light.shadow.mapSize.height = 2048;

//   return light;
// }

// scene.add(plane);
// light.add(shpere);
// scene.add(light);
// scene.add(boxGrid);

// scene.add(ambientLignt);

// cameraZRotation.add(camera);
// cameraYPosition.add(cameraZRotation);
// cameraZPosition.add(cameraYPosition);
// cameraXRotation.add(cameraZPosition);
// cameraYRotation.add(cameraXRotation);
// scene.add(cameraYRotation);

// plane.rotation.x = Math.PI / 2;
// light.position.x = 13;
// light.position.y = 10;
// light.position.z = 10;
// light.intensity = 2;

// cameraXRotation.rotation.x = -Math.PI / 2;
// cameraYPosition.position.y = 1;
// cameraZPosition.position.z = 100;

// gui.add(cameraZPosition.position, "z", 0, 100);
// gui.add(cameraYRotation.rotation, "y", -Math.PI, Math.PI);
// gui.add(cameraXRotation.rotation, "x", -Math.PI, Math.PI);
// gui.add(cameraZRotation.rotation, "z", -Math.PI, Math.PI);

// const cameraZRotation = new THREE.Group();
// const cameraYPosition = new THREE.Group();
// const cameraZPosition = new THREE.Group();
// const cameraXRotation = new THREE.Group();
// const cameraYRotation = new THREE.Group();

// cameraZRotation.name = "cameraZRotation";
// cameraYPosition.name = "cameraYPosition";
// cameraZPosition.name = "cameraZPosition";
// cameraXRotation.name = "cameraXRotation";
// cameraYRotation.name = "cameraYRotation";
