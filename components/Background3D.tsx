import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const isMobile = window.innerWidth < 768;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0f14, isMobile ? 0.03 : 0.015);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 15);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile, 
      alpha: true,
      powerPreference: "high-performance" 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const cursorLight = new THREE.PointLight(0x00f3ff, 20, 50);
    scene.add(cursorLight);

    // Icy Wireframe Grid
    const gridSize = 200;
    const gridDivisions = isMobile ? 40 : 100;
    const grid = new THREE.GridHelper(gridSize, gridDivisions, 0x00f3ff, 0x0a1a2a);
    grid.material.transparent = true;
    grid.material.opacity = 0.15;
    scene.add(grid);

    // Optimized Snow System
    const snowCount = isMobile ? 800 : 3000;
    const snowGeometry = new THREE.BufferGeometry();
    const snowPositions = new Float32Array(snowCount * 3);
    const snowSpeeds = new Float32Array(snowCount);
    const snowDrift = new Float32Array(snowCount);

    for (let i = 0; i < snowCount; i++) {
      snowPositions[i * 3] = (Math.random() - 0.5) * 120;
      snowPositions[i * 3 + 1] = Math.random() * 60;
      snowPositions[i * 3 + 2] = (Math.random() - 0.5) * 120;
      snowSpeeds[i] = Math.random() * 0.06 + 0.02;
      snowDrift[i] = (Math.random() - 0.5) * 0.03;
    }

    snowGeometry.setAttribute('position', new THREE.BufferAttribute(snowPositions, 3));
    const snowMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: isMobile ? 0.2 : 0.12,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const snowParticles = new THREE.Points(snowGeometry, snowMaterial);
    scene.add(snowParticles);

    // Crystalline Monoliths
    const buildings: THREE.Mesh[] = [];
    const buildingGeometry = new THREE.BoxGeometry(1, 1, 1);
    const buildingCount = isMobile ? 25 : 60;
    
    for (let i = 0; i < buildingCount; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: 0x00f3ff,
        emissive: 0x001122,
        transparent: true,
        opacity: 0.1,
        wireframe: i % 2 === 0,
        shininess: 80
      });

      const building = new THREE.Mesh(buildingGeometry, material);
      const scaleY = Math.random() * 20 + 5;
      building.scale.set(Math.random() * 3 + 1, scaleY, Math.random() * 3 + 1);
      
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 70 + 15;
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
      const requestID = requestAnimationFrame(animate);

      // Smooth Camera movement
      camera.position.x += (mouse.current.x * 3 - camera.position.x) * 0.02;
      camera.position.y += ((-mouse.current.y * 2 + 8) - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      // Light follows mouse
      cursorLight.position.set(mouse.current.x * 25, mouse.current.y * 15 + 5, 5);

      // Floor Movement
      grid.position.z += 0.06;
      if (grid.position.z > 4) grid.position.z = 0;

      // Snow animation
      const positions = snowParticles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < snowCount; i++) {
        positions[i * 3 + 1] -= snowSpeeds[i];
        positions[i * 3] += snowDrift[i];
        
        if (positions[i * 3 + 1] < -5) {
          positions[i * 3 + 1] = 55;
          positions[i * 3] = (Math.random() - 0.5) * 120;
        }
      }
      snowParticles.geometry.attributes.position.needsUpdate = true;

      // Monolith movement
      buildings.forEach((b) => {
        b.position.z += 0.06;
        if (b.position.z > 50) {
          b.position.z = -70;
        }
      });

      renderer.render(scene, camera);
      return requestID;
    };

    window.addEventListener('mousemove', onMouseMove);
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    const animationID = animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationID);
      containerRef.current?.removeChild(renderer.domElement);
      // Proper memory cleanup
      scene.clear();
      renderer.dispose();
      buildingGeometry.dispose();
      snowGeometry.dispose();
      snowMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10 bg-[#060a0f] touch-none" />;
};

export default Background3D;