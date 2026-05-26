import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'
import { useState, useRef } from 'react'
import Experience from './game/Experience'
import TheoryUI from './game/TheoryUI'

function App() {
  const [mistakes, setMistakes] = useState(0)
  const speedRef = useRef(0) // ה-Ref שיחזיק את המהירות בצורה יעילה ללא רינדורים מיותרים

  const map = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'right', keys: ['ArrowRight', 'KeyD'] },
  ]

  return (
    <KeyboardControls map={map}>
      {/* העברת ה-speedRef והפסילות לממשק המשתמש */}
      <TheoryUI mistakes={mistakes} speedRef={speedRef} />
      
      <div style={{ width: '100vw', height: '100vh', background: '#222' }}>
        <Canvas shadows camera={{ position: [0, 5, 12], fov: 50 }}>
          <color attach="background" args={['#87CEEB']} />
          {/* העברת ה-speedRef וה-setMistakes לחלל המשחק */}
          <Experience setMistakes={setMistakes} speedRef={speedRef} />
        </Canvas>
      </div>
    </KeyboardControls>
  )
}

export default App