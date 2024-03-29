import * as THREE from '../build/three.module.js';
import {OrbitControls} from '../jsm/OrbitControls.js';
import {GLTFLoader} from '../jsm/GLTFLoader.js';

function init(){
    var scene = new THREE.Scene();		
    scene.background = new THREE.Color(0x000000)
	
    var camera = new THREE.PerspectiveCamera(17, window.innerWidth / window.innerHeight, 1, 100);	
    var renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    var paraFrenteLoad = true
    var flutuando = true
    var container = document.getElementById('inicio')
    renderer.setSize(window.innerWidth, window.innerHeight);		

    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true
    controls.enableZoom = false
    controls.enablePan = false
    controls.maxPolarAngle = 1.4
    controls.minPolarAngle = 1.4
    controls.update();  

    const loader = new GLTFLoader().setPath('./models/');
    loader.load('space_boi.glb', function(glb){
        const model = glb.scene
        scene.add(model);
        var box = new THREE.Box3().setFromObject(model)
        var obj_size = box.getSize(new THREE.Vector3(0,0,0))
        camera.position.z = obj_size.length()
        model.position.y = -2
    });

    function animate() {
        requestAnimationFrame(animate);

        if (paraFrenteLoad == true) {
            scene.rotation.y += 0.003
        }
        else {
            scene.rotation.y -= 0.1
        }

        if(flutuando == true){
            scene.position.y += 0.002
            
            if(scene.position.y >= 0.5){
                flutuando = false
            }
        }else{
            scene.position.y -= 0.002;
            if(scene.position.y <= 0.01){
                flutuando = true
            }
        }

        if(controls)
            controls.update();

        renderer.render(scene, camera);
        container.appendChild(renderer.domElement) 
    };
    animate();
}

window.onload = init