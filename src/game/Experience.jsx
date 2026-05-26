import Road, { StopSign, Crosswalk } from './Road'
import Car from './Car'

const Experience = ({ setMistakes, setCurrentSpeed }) => {
  return (
    <>
      {/* תאורה הכרחית - בלי זה הכל שחור */}
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />

      {/* המכונית - מעבירים לה את הפונקציות לעדכון ה-UI */}
      <Car setMistakes={setMistakes} setCurrentSpeed={setCurrentSpeed} />

      {/* הכביש והאלמנטים */}
      <Road position={[0, 0, 0]} length={200} />
      <StopSign position={[6, 0, 20]} />
      <Crosswalk position={[0, 0, 50]} />

      {/* רקע ירוק */}
      <mesh rotation-x={-Math.PI * 0.5} position={[0, -0.1, 0]} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#2d5e2d" />
      </mesh>
    </>
  )
}

export default Experience