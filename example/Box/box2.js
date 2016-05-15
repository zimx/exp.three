

			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

			var camera, scene, renderer;
			var geometry, material, mesh;

			function setup() {

				var W = window.innerWidth, H = window.innerHeight;
				renderer = new THREE.WebGLRenderer();

				renderer.setSize( W, H );
				var canvasElement = renderer.domElement;
				canvasElement.className = "canvas-box";
				var page = document.getElementById("page");
// replace it to seat befor the body in the wordpress page //
				page.insertBefore(renderer.domElement, page.firstChild);
        //document.body.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
				camera.position.z = 500;

				scene = new THREE.Scene();



				// paste your code from the geometryGUI here


				geometry = new THREE.CubeGeometry(200, 200, 200);
				material = new THREE.MeshBasicMaterial({shading: THREE.SmoothShading, color: 0x000000, wireframe: true, wireframeLinewidth: 8, transparent: true, opacity: 1});
				mesh = new THREE.Mesh(geometry, material);
				mesh.position.y = 100;

				scene.add(mesh);


				bg = document.body.style;
				bg.background = "red" ;


			}

			function draw() {

				requestAnimationFrame( draw );

				// experiment with code from the snippets menu here

				mesh.rotation.x = Date.now() * 0.0005;
				mesh.rotation.y = Date.now() * 0.0002;
				mesh.rotation.z = Date.now() * 0.001;

				renderer.render( scene, camera );

			}

			setup();
			draw();
			controls = new THREE.OrbitControls(camera);
