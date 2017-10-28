/* globals THREE */
// Set the scene size.
const WIDTH = 400 || window.innerWidth;
const HEIGHT = 300 || window.innerHeight;

let renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

let camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 500);
camera.position.set(0, 0, 500);
camera.lookAt(new THREE.Vector3(0, 0, 0));

let scene = new THREE.Scene();

//create a blue LineBasicMaterial
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, 0, 10));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));
var line = new THREE.Line(geometry, material);

scene.add(line);

//create a triangular geometry
var geometry = new THREE.Geometry();
geometry.vertices.push( new THREE.Vector3( -50, -50, 100 ) );
geometry.vertices.push( new THREE.Vector3(  50, -50, 0 ) );
geometry.vertices.push( new THREE.Vector3(  50,  50, 0 ) );

//create a new face using vertices 0, 1, 2
var normal = new THREE.Vector3( 0, 1, 0 ); //optional
var color = new THREE.Color( 0xffaa00 ); //optional
var materialIndex = 0; //optional
var face = new THREE.Face3( 0, 1, 2, normal, color, materialIndex );

//add the face to the geometry's faces array
geometry.faces.push( face );

//the face normals and vertex normals can be calculated automatically if not supplied above
geometry.computeFaceNormals();
geometry.computeVertexNormals();

scene.add( new THREE.Mesh( geometry, material ) );







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