        var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;
        
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(100,WIDTH / HEIGHT,0.1,1000);
        

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(WIDTH, HEIGHT);
        renderer.setClearColor(0xDDDDDD, 1);
        document.body.appendChild(renderer.domElement);


        //Creación de malla
        const size = 500;
        const divisions = 1000;
        const gridHelper = new THREE.GridHelper( size, divisions );
        scene.add( gridHelper );


        //Creación de ejes X,Y,Z
        const axesHelper1 = new THREE.AxesHelper( 50 );
        const axesHelper2 = new THREE.AxesHelper( -50 );
        scene.add( axesHelper1,axesHelper2 )


        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            -1, -1, -1,
            1, -1, -1,
            1, 1, -1,
            -1, 1, -1,
            -1, -1, 1,
            1, -1, 1,
            1, 1, 1,
            -1, 1, 1,
        ]);
        const indices = new Uint32Array([
            0, 1, 2, 0, 2, 3,
            4, 5, 6, 4, 6, 7,
            0, 4, 5, 0, 5, 1,
            1, 5, 6, 1, 6, 2,
            2, 6, 7, 2, 7, 3,
            3, 7, 4, 3, 4, 0,
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometry.setIndex(new THREE.BufferAttribute(indices, 1));

        const material = new THREE.MeshBasicMaterial({ color: 0x000000 ,wireframe: true });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.y=1
        camera.position.x=1;
        camera.position.y=2;
        camera.position.z =5;
        

        const controls = new THREE.OrbitControls(camera, renderer.domElement);

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();