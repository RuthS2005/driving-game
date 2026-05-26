import Road from './Road'
import Car from './Car'

const Experience = ({ setMistakes, speedRef }) => {
  return (
    <>
      {/* תאורה הכרחית - בלי זה הכל שחור */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 15, 10]} intensity={1.5} castShadow />

      {/* המכונית - מקבלת את הנתונים ומעדכנת אותם בלולאה */}
      <Car setMistakes={setMistakes} speedRef={speedRef} />

      {/* הכביש הראשי */}
      <Road position={[0, 0, 0]} length={200} />

      {/* תמרור עצור - בנוי ישירות כאן כדי למנוע קריסת ייבוא */}
      {/* תמרור עצור מתוקן ויציב */}
      <group position={[3.5, 0, 20]}> 
        {/* העמוד האפור - עומד ישר */}
        <mesh position={[0, 1.5, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 3, 16]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        
        {/* השלט האדום - ממוקם בראש העמוד ומסובב נכון קדימה */}
    <mesh position={[0, 3, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.15, 8]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </group>
      {/* משטח הדשא הירוק */}
      <mesh rotation-x={-Math.PI * 0.5} position={[0, -0.05, 0]} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#2d5e2d" />
      </mesh>
    </>
  )
}

export default Experience