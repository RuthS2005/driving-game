import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import * as THREE from 'three'

const Car = ({ setMistakes, speedRef }) => {
  const meshRef = useRef()
  const [, getKeys] = useKeyboardControls()
  const hasStoppedAtSign = useRef(false)

  useFrame((state) => {
    const { forward, backward, left, right } = getKeys()

    // הגנה למקרה ש-speedRef עדיין לא הגיע
    if (!speedRef) return

    // לוגיקת תנועה
    if (forward) speedRef.current += 0.005
    if (backward) speedRef.current -= 0.005
    speedRef.current *= 0.97
    
    // סיבוב הרכב
    if (Math.abs(speedRef.current) > 0.01) {
      if (left) meshRef.current.rotation.y += 0.03
      if (right) meshRef.current.rotation.y -= 0.03
    }

    // עדכון מיקום
    meshRef.current.position.x += Math.sin(meshRef.current.rotation.y) * speedRef.current
    meshRef.current.position.z += Math.cos(meshRef.current.rotation.y) * speedRef.current

    // מצלמה עוקבת חלקה
    const carPos = meshRef.current.position
    const idealOffset = new THREE.Vector3(0, 3, -7)
    idealOffset.applyQuaternion(meshRef.current.quaternion)
    idealOffset.add(carPos)

    state.camera.position.lerp(idealOffset, 0.1)
    state.camera.lookAt(carPos.x, carPos.y + 1, carPos.z)

    // לוגיקת תמרור עצור
    const currentZ = meshRef.current.position.z
    const signZ = 20 
    const absoluteSpeed = Math.abs(speedRef.current)

    if (currentZ > signZ - 4 && currentZ <= signZ) {
      if (absoluteSpeed < 0.005 && !hasStoppedAtSign.current) {
        console.log("עצרת יפה מאוד!")
        hasStoppedAtSign.current = true
      }
    }

    if (currentZ > signZ) {
      if (!hasStoppedAtSign.current) {
        setMistakes(prev => prev + 1)
        hasStoppedAtSign.current = true
      }
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0.5, 0]} castShadow>
      <boxGeometry args={[1, 0.5, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default Car