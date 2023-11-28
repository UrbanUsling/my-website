import React from 'react'

const Presentkort: React.FC = () => {
  const cardStyle: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    padding: '20px',
    width: '300px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #ffdb4d, #ff8c1a)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  }

  const imageStyle: React.CSSProperties = {
    width: '100px',
    height: 'auto',
    marginBottom: '10px',
  }

  return (
    <div style={cardStyle}>
      <img
        src="https://i0.wp.com/www.makerspace.se/wp-content/uploads/2015/06/logo-transparent-500px.png?w=500&ssl=1"
        alt="Maker_logo"
        style={imageStyle}
      />
      <h2>Presentkort</h2>
    </div>
  )
}

export default Presentkort
