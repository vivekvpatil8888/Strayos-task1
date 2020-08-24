var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 300;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.autoRotate = true;

// var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
// keyLight.position.set(-100, 0, 100);

// var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
// fillLight.position.set(100, 0, 100);

// var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
// backLight.position.set(100, 0, -100).normalize();

// scene.add(keyLight);
// scene.add(fillLight);
// scene.add(backLight);
// var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
// scene.add( light );
scene.background = new THREE.Color( 'white' )
//TEXTURE


//LIGHTS
// var directionalLight = new THREE.DirectionalLight( 0xffeedd );
// directionalLight.position.set( 0, 0.5, 0.5 );
// scene.add( directionalLight );

  // Create a directional light
  const light = new THREE.DirectionalLight( 0xffffbb, 1.0 );

  // move the light back and up a bit
  light.position.set( 10, 10, 10 );

  // remember to add the light to the scene
  scene.add( light );
// var texture = new THREE.TextureLoader().load( './model2/Untitled.001.png' );

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('/examples/3d-obj-loader/model/');
mtlLoader.setPath('/examples/3d-obj-loader/model/');
mtlLoader.load('geomodel3.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
     objLoader.setMaterials(materials);
    objLoader.setPath('/examples/3d-obj-loader/model/');
    objLoader.load('geomodel3.obj', function (object) {
    
        scene.add(object);
        // object.color = 0xff0000;
        object.position.y -= 60;
    
    });
});

var texture = new THREE.DepthTexture();


var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();
