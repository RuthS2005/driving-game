import { useEffect, useRef } from 'react'

const TheoryUI = ({ mistakes, speedRef }) => {
  const speedTextRef = useRef()

  useEffect(() => {
    // מאזין ללולאת המשחק ומעדכן את טקסט המהירות בצורה ישירה
    const interval = setInterval(() => {
      if (speedTextRef.current && speedRef && speedRef.current !== undefined) {
        const displaySpeed = Math.max(0, Math.round(speedRef.current * 100))
        speedTextRef.current.innerText = `מהירות: ${displaySpeed} קמ"ש`
      }
    }, 50)

    return () => clearInterval(interval)
  }, [speedRef])

  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      zIndex: 10, // שומר על הממשק מעל ה-Canvas שלא ייעלם
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '15px',
      borderRadius: '10px',
      pointerEvents: 'none'
    }}>
      <h2 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>מבחן נהיגה מעשי</h2>
      <div ref={speedTextRef} style={{ fontSize: '16px', marginBottom: '5px' }}>מהירות: 0 קמ"ש</div>
      <div style={{
        fontSize: '16px',
        fontWeight: 'bold',
        color: mistakes >= 4 ? '#ff4d4d' : '#fff'
      }}>
        פסילות: {mistakes} / 5
      </div>
    </div>
  )
}

export default TheoryUI