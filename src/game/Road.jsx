import * as THREE from 'three'

export const StopSign = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2.5]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      <mesh position={[0, 2.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 8]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  )
}

export const Crosswalk = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[i * 1.5 - 3.75, 0.02, 0]} rotation-x={-Math.PI * 0.5}>
          <planeGeometry args={[0.8, 4]} />
          <meshStandardMaterial color="white" />
        </mesh>
      ))}
    </group>
  )
}

const Road = ({ position = [0, 0, 0], length = 100 }) => {
  return (
    <group position={position}>
      <mesh rotation-x={-Math.PI * 0.5} receiveShadow>
        <planeGeometry args={[10, length]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* קווי הפרדה */}
      {[...Array(Math.floor(length / 5))].map((_, i) => (
        <mesh key={i} position={[0, 0.05, i * 5 - length / 2]} rotation-x={-Math.PI * 0.5}>
          <planeGeometry args={[0.15, 2]} />
          <meshStandardMaterial color="white" />
        </mesh>
      ))}
    </group>
  )
}

export default Road