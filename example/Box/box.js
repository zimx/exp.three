if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var camera, scene, renderer;
var geometry, material, mesh;

function setup() {

  var W = window.innerWidth, H = window.innerHeight;

  renderer = new THREE.WebGLRenderer();

  renderer.setSize( W, H );
  var canvasElement = renderer.domElement;
  //canvasElement.className = "canvas-box";
  var page = document.getElementById("page");

  document.body.appendChild( renderer.domElement );


  camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
  camera.position.z =1000;

  scene = new THREE.Scene();



  // paste your code from the geometryGUI here


  geometry = new THREE.CubeGeometry(300, 200, 200);
  material = new THREE.MeshBasicMaterial({shading: THREE.SmoothShading, color: 0x000000, wireframe: true, wireframeLinewidth: 8, transparent: true, opacity: 1});
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = 100;

  scene.add(mesh);


  bg = document.body.style;
  bg.background = 'pink';


}

function draw() {

  requestAnimationFrame( draw );

  // experiment with code from the snippets menu here

  mesh.rotation.x = Date.now() * 0.0008;
  mesh.rotation.y = Date.now() * 0.0003;
  mesh.rotation.z = Date.now() * 0.001;

  renderer.render( scene, camera );

}

setup();
draw();
controls = new THREE.OrbitControls(camera);
