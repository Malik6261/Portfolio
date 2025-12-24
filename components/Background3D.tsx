
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    // Winter fog: slightly lighter/bluer than pure black
    scene.fog = new THREE.FogExp2(0x0a0f14, 0.002);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 3;
    camera.rotation.x = -0.4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Icy Wireframe Grid
    const gridSize = 100;
    const gridDivisions = 50;
    const grid = new THREE.GridHelper(gridSize, gridDivisions, 0x00f3ff, 0x0a1a2a);
    scene.add(grid);

    // Snow Particles System
    const snowCount = 2000;
    const snowGeometry = new THREE.BufferGeometry();
    const snowPositions = new Float32Array(snowCount * 3);
    const snowVelocities = new Float32Array(snowCount);

    for (let i = 0; i < snowCount; i++) {
      snowPositions[i * 3] = (Math.random() - 0.5) * 60;
      snowPositions[i * 3 + 1] = Math.random() * 30;
      snowPositions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      snowVelocities[i] = Math.random() * 0.05 + 0.02;
    }

    snowGeometry.setAttribute('position', new THREE.BufferAttribute(snowPositions, 3));
    const snowMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const snowParticles = new THREE.Points(snowGeometry, snowMaterial);
    scene.add(snowParticles);

    // Icy Skyscrapers
    const buildings: THREE.Mesh[] = [];
    const buildingGeometry = new THREE.BoxGeometry(1, 1, 1);
    const buildingMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00f3ff, 
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });

    for (let i = 0; i < 40; i++) {
      const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
      const scaleY = Math.random() * 10 + 2;
      building.scale.set(Math.random() * 2 + 1, scaleY, Math.random() * 2 + 1);
      
      const x = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      
      building.position.set(x, scaleY / 2, z);
      scene.add(building);
      buildings.push(building);
    }

    const animate = () => {
      requestAnimationFrame(animate);

      // Move camera/floor forward
      grid.position.z += 0.03;
      if (grid.position.z > 2) grid.position.z = 0;

      // Animate snow
      const positions = snowParticles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < snowCount; i++) {
        positions[i * 3 + 1] -= snowVelocities[i];
        if (positions[i * 3 + 1] < -5) {
          positions[i * 3 + 1] = 25;
        }
      }
      snowParticles.geometry.attributes.position.needsUpdate = true;

      buildings.forEach(b => {
        b.position.z += 0.03;
        if (b.position.z > 25) {
          b.position.z = -25;
        }
      });

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10 bg-[#0a0f14]" />;
};

export default Background3D;
