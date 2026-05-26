import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import * as THREE from 'three'

const Car = ({ setMistakes, setCurrentSpeed }) => {
  const meshRef = useRef()
  const [, getKeys] = useKeyboardControls()
  const speed = useRef(0)
  const hasStoppedAtSign = useRef(false)

  useFrame((state, delta) => {
    const { forward, backward, left, right } = getKeys()

    // לוגיקת תנועה
    if (forward) speed.current += 0.005
    if (backward) speed.current -= 0.005
    speed.current *= 0.97
    
    // סיבוב
    if (Math.abs(speed.current) > 0.01) {
      if (left) meshRef.current.rotation.y += 0.03
      if (right) meshRef.current.rotation.y -= 0.03
    }

    meshRef.current.position.x += Math.sin(meshRef.current.rotation.y) * speed.current
    meshRef.current.position.z += Math.cos(meshRef.current.rotation.y) * speed.current

    // עדכון המהירות ל-UI
    setCurrentSpeed(speed.current)

    // --- תיקון מצלמה (מבט מאחורי הרכב) ---
    const carPos = meshRef.current.position
    const idealOffset = new THREE.Vector3(0, 3, -7) // 3 מטר מעל, 7 מאחור
    idealOffset.applyQuaternion(meshRef.current.quaternion) // מסובב את האופסט לפי כיוון הרכב
    idealOffset.add(carPos)

    state.camera.position.lerp(idealOffset, 0.1)
    state.camera.lookAt(carPos.x, carPos.y + 1, carPos.z)

    // --- לוגיקת תאוריה (בדיקת תמרור עצור) ---
    // נניח שיש תמרור במיקום Z=20
    const distToSign = meshRef.current.position.distanceTo(new THREE.Vector3(0, 0, 20))
    if (distToSign < 3) {
       if (speed.current < 0.001) {
         if (!hasStoppedAtSign.current) {
            console.log("עצרת יפה מאוד!")
            hasStoppedAtSign.current = true
         }
       }
    } else if (distToSign < 1 && speed.current > 0.05 && !hasStoppedAtSign.current) {
        // אם עבר את התמרור מהר מדי מבלי לעצור
        setMistakes(prev => prev + 1)
        hasStoppedAtSign.current = true // מונע טעויות כפולות על אותו תמרור
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