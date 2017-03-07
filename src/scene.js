/* globals THREE */
// Set the scene size.
const WIDTH = 400 || window.innerWidth;
const HEIGHT = 300 || window.innerHeight;

let renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

let camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 500);
camera.position.set(0, 0, 50);
camera.lookAt(new THREE.Vector3(0, 0, 0));

let scene = new THREE.Scene();

//create a blue LineBasicMaterial
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));
var line = new THREE.Line(geometry, material);

scene.add(line);

renderer.render(scene, camera);
// let geometry = new THREE.BoxGeometry(1, 1, 1);
// let cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
//
// camera.position.z = 5;
//
// function render() {
//   requestAnimationFrame(render);
//   cube.rotation.x += 0.1;
//   cube.rotation.y += 0.1;
//   renderer.render(scene, camera);
// }
// render();