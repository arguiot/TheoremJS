const $ = new DisplayJS(window);



const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff)

let camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 8, 12);
camera.lookAt(new THREE.Vector3(0, 0, 0));
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth * 2, window.innerHeight * 2)
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
camera.updateProjectionMatrix()
document.body.appendChild(renderer.domElement);

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}


// Sphere
const shape = new THREE.SphereGeometry(0.75, 16, 26, 0, Math.PI * 2, 0, Math.PI * 2);
const geometry = new THREE.EdgesGeometry(shape);
const material = new THREE.LineBasicMaterial({
    color: 0x0000,
    linewidth: 1
});
const sphere = new THREE.LineSegments(geometry, material)
scene.add(sphere);
sphere.position.x = -2;
sphere.position.y = 1.2;

// Triangle
const triShape = new THREE.CylinderGeometry(0, 0.5, 1, 3);
const triangle = new THREE.LineSegments(new THREE.EdgesGeometry(triShape), material);
scene.add(triangle)
triangle.position.x = 2
triangle.position.y = -1.2

// Line 1
const l1Shape = new THREE.EdgesGeometry(new THREE.BoxGeometry(0.01, 10, 0.01));
const line1 = new THREE.Mesh(l1Shape, material)
scene.add(line1)
line1.position.x = 2
line1.position.y = 1
line1.rotation.z = 1
// Line 2
const l2Shape = new THREE.EdgesGeometry(new THREE.BoxGeometry(0.01, 10, 0.01));
const line2 = new THREE.Mesh(l2Shape, material)
scene.add(line2)
line2.position.x = 2
line2.position.y = 1
line2.rotation.z = 1.2

// Points
const pointShape = new THREE.SphereGeometry(0.03, 4, 4);
const pMaterial = new THREE.MeshBasicMaterial( {color: 0x0000} )
const point = new THREE.Mesh( pointShape, pMaterial )
scene.add(point)
point.position.x = 2;
point.position.y = 1;


camera.position.z = 10;

sphere.constRand = 0.4
triangle.constRand = -0.3

let moveBy = 0
const render = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    for (let i of [sphere, triangle]) {
        i.rotation.y += .01 * i.constRand;
        i.rotation.x += .01 * i.constRand;
        i.rotation.z += .01 * i.constRand;
    }
    sphere.position.x = -moveBy - 2
    triangle.position.x = moveBy + 2
    line1.position.y = moveBy / .9 + 1
    line2.position.y = moveBy + 1
	point.position.y = moveBy / 1.22 + 1
	point.position.x = (-moveBy / -2.25) + 2
    renderer.render(scene, camera);
	requestAnimationFrame(render)
};

$.scroll(() => {
    if ($.scrollTop() < window.innerHeight) {
        moveBy = 2.5 * ($.scrollTop() / window.innerWidth)
    }
})

var year = new Date().getFullYear()
$.var()

render()
