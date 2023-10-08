import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import { useRef, useEffect } from 'react';

const MyElement3D = () => {
  const refFirstMesh = useRef();
  const refSecondMesh = useRef();

  const { xSize, ySize, zSize, xSegments, ySegments, zSegments } = useControls({
    xSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    ySize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    zSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    xSegments: { value: 1, min: 1, max: 10, step: 1 },
    ySegments: { value: 1, min: 1, max: 10, step: 1 },
    zSegments: { value: 1, min: 1, max: 10, step: 1 }
  });

  useEffect(() => {
    refSecondMesh.current.geometry = refFirstMesh.current.geometry;
  }, [xSize, ySize, zSize, xSegments, ySegments, zSegments]);

  return (
    <>
      <OrbitControls />

      <ambientLight />
      <directionalLight />

      <mesh ref={refFirstMesh}>
        <boxGeometry args={[xSize, ySize, zSize, xSegments, ySegments, zSegments]} />
        <meshStandardMaterial color="#e76e22" />
      </mesh>

      <mesh ref={refSecondMesh}>
        <meshStandardMaterial emissive="yellow" wireframe={true} />
      </mesh>
    </>
  );
};

export default MyElement3D;
