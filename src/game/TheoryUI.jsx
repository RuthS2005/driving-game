const TheoryUI = ({ speed, mistakes }) => {
  return (
    <div style={{
      position: 'absolute', top: '20px', left: '20px',
      color: 'white', fontFamily: 'Arial', backgroundColor: 'rgba(0,0,0,0.5)',
      padding: '15px', borderRadius: '10px', pointerEvents: 'none'
    }}>
      <h2 style={{ margin: 0 }}>מבחן נהיגה</h2>
      <p style={{ fontSize: '20px' }}>מהירות: {(speed * 100).toFixed(0)} קמ"ש</p>
      <p style={{ fontSize: '20px', color: mistakes >= 4 ? 'red' : 'white' }}>
        טעויות: {mistakes} / 5
      </p>
    </div>
  )
}

export default TheoryUI