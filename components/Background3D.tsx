
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0f14, 0.015);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const cursorLight = new THREE.PointLight(0x00f3ff, 20, 50);
    scene.add(cursorLight);

    // Icy Wireframe Grid
    const gridSize = 200;
    const gridDivisions = 100;
    const grid = new THREE.GridHelper(gridSize, gridDivisions, 0x00f3ff, 0x0a1a2a);
    grid.material.transparent = true;
    grid.material.opacity = 0.2;
    scene.add(grid);

    // Advanced Snow System
    const snowCount = 4000;
    const snowGeometry = new THREE.BufferGeometry();
    const snowPositions = new Float32Array(snowCount * 3);
    const snowSpeeds = new Float32Array(snowCount);
    const snowDrift = new Float32Array(snowCount);

    for (let i = 0; i < snowCount; i++) {
      snowPositions[i * 3] = (Math.random() - 0.5) * 100;
      snowPositions[i * 3 + 1] = Math.random() * 50;
      snowPositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      snowSpeeds[i] = Math.random() * 0.05 + 0.02;
      snowDrift[i] = (Math.random() - 0.5) * 0.02;
    }

    snowGeometry.setAttribute('position', new THREE.BufferAttribute(snowPositions, 3));
    const snowMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const snowParticles = new THREE.Points(snowGeometry, snowMaterial);
    scene.add(snowParticles);

    // Crystalline Monoliths
    const buildings: THREE.Mesh[] = [];
    const buildingGeometry = new THREE.BoxGeometry(1, 1, 1);
    
    for (let i = 0; i < 60; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: 0x00f3ff,
        emissive: 0x001122,
        transparent: true,
        opacity: 0.15,
        wireframe: i % 3 === 0,
        shininess: 100
      });

      const building = new THREE.Mesh(buildingGeometry, material);
      const scaleY = Math.random() * 15 + 5;
      building.scale.set(Math.random() * 3 + 1, scaleY, Math.random() * 3 + 1);
      
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 60 + 10;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      
      building.position.set(x, scaleY / 2, z);
      scene.add(building);
      buildings.push(building);
    }

    const onMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Camera sway
      camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.01;
      camera.position.y += ((-mouse.current.y * 2 + 6) - camera.position.y) * 0.01;
      camera.lookAt(0, 0, 0);

      // Light follows mouse
      cursorLight.position.set(mouse.current.x * 20, mouse.current.y * 10 + 5, 5);

      // Infinite Floor Move
      grid.position.z += 0.05;
      if (grid.position.z > 2) grid.position.z = 0;

      // Snow animation with drift
      const positions = snowParticles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < snowCount; i++) {
        positions[i * 3 + 1] -= snowSpeeds[i];
        positions[i * 3] += snowDrift[i];
        
        if (positions[i * 3 + 1] < -5) {
          positions[i * 3 + 1] = 45;
          positions[i * 3] = (Math.random() - 0.5) * 100;
        }
      }
      snowParticles.geometry.attributes.position.needsUpdate = true;

      // Animate monoliths
      buildings.forEach((b, idx) => {
        b.position.z += 0.05;
        b.rotation.y += 0.001 * (idx % 2 === 0 ? 1 : -1);
        if (b.position.z > 40) {
          b.position.z = -60;
        }
      });

      renderer.render(scene, camera);
    };

    window.addEventListener('mousemove', onMouseMove);
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10 bg-[#060a0f]" />;
};

export default Background3D;
