(function() {

  var viewport = document.querySelector('.viewport');

  var scene, camera, renderer, loader, light, controls;

  var WIDTH = window.innerWidth,
      HEIGHT = window.innerHeight;

  var VIEW_ANGLE = 40,
      ASPECT = WIDTH / HEIGHT,
      NEAR = 1,
      FAR = 10000;

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.shadowMapEnabled = true;
  renderer.shadowMapSoft = true;
  renderer.shadowMapType = THREE.PCFShadowMap;
  renderer.shadowMapAutoUpdate = true;

  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  camera.position.z = 400;

  scene.add(camera);

  controls = new THREE.OrbitControls(camera);

  renderer.setSize(WIDTH, HEIGHT);

  viewport.appendChild(renderer.domElement);

  loader = new THREE.JSONLoader();

  loader.load('box.js', function (geometry, materials) {
    var mesh, material;

    material = new THREE.MeshFaceMaterial(materials);
    mesh = new THREE.Mesh(geometry, material);

    mesh.scale.set(10, 10, 10);
    mesh.receiveShadow = true;
    mesh.castShadow = true;

    scene.add(mesh);
  });

  light = new THREE.DirectionalLight("rgb(255,50,1)");
    light.castShadow = true;
	light.position.set(10, 10, 10);

  scene.add(light);

  animate();

  function animate() {
	
    renderer.render(scene, camera);
    controls.update();
	
    requestAnimationFrame(animate);
  }
  
			

})();