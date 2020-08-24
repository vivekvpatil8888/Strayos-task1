var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 200;

// var controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.campingFactor = 0.25;
// controls.enableZoom = true;

// var mtlLoader = new THREE.MTLLoader();
// mtlLoader.setTexturePath('examples/3d-obj-loader/assets');
// mtlLoader.setPath('examples/3d-obj-loader/assets/');
// mtlLoader.load('r2-d2.mtl', function(materials){
// 	materials.preload();

// })

var objLoader = new THREE.OBJLoader();
// objLoader.setMaterials(materials);
objLoader.setPath('examples/3d-obj-loader/assets/');
objLoader.load('r2-d2.obj', function(object) {
	object.position.y -= 60;
	scene.add(object);
})

var animate = function () {
	requestAnimationFrame( animate );

	// cube.rotation.x += 0.1;
	// cube.rotation.y += 0.1;

	renderer.render(scene, camera);
};

animate();