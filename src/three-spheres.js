/* globals THREE */

function init() {
  let scene = new THREE.Scene();

  var SCREEN_WIDTH = 700 || window.innerWidth, SCREEN_HEIGHT = 700 || window.innerHeight;
  var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
  let camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);

  scene.add(camera);
  camera.position.set(0,150,400);
  camera.lookAt(scene.position);

  let renderer = new THREE.WebGLRenderer( {antialias:true} );
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  let container = document.getElementById( 'container' );
  container.appendChild( renderer.domElement );

  // FLOOR
  let floorTexture = new THREE.ImageUtils.loadTexture( 'images/checkerboard.jpg' );
  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.set( 10, 10 );
  let floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
  let floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
  let floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.position.y = -0.5;
  floor.rotation.x = Math.PI / 2;
  scene.add(floor);

// LIGHT
  var light = new THREE.PointLight(0xffffff);
  light.position.set(0,150,100);
  scene.add(light);
// EVENTS
  THREEx.WindowResize(renderer, camera);
  THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });
  // CONTROLS
  controls = new THREE.OrbitControls( camera, renderer.domElement );
}

init();

