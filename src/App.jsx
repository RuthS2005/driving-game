import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'
import Experience from './game/Experience'
import TheoryUI from './game/TheoryUI'

function App() {
  const [mistakes, setMistakes] = useState(0)
  const [currentSpeed, setCurrentSpeed] = useState(0)

  const map = [
    { name: 'forward', keys: ['w', 'W', 'ArrowUp'] },
    { name: 'backward', keys: ['s', 'S', 'ArrowDown'] },
    { name: 'left', keys: ['a', 'A', 'ArrowLeft'] },
    { name: 'right', keys: ['d', 'D', 'ArrowRight'] },
  ]

  return (
    <KeyboardControls map={map}>
      <TheoryUI speed={currentSpeed} mistakes={mistakes} />
      <div style={{ width: '100vw', height: '100vh', background: '#222' }}>
        <Canvas shadows camera={{ position: [0, 5, 12], fov: 50 }}>
          <color attach="background" args={['#87ceeb']} />
          <Experience setMistakes={setMistakes} setCurrentSpeed={setCurrentSpeed} />
        </Canvas>
      </div>
    </KeyboardControls>
  )
}
export default App