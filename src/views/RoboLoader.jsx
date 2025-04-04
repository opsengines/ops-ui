import React from 'react'

function RoboLoader() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const wrapperStyle = {
    textAlign: 'center'
  }

  const imageStyle = {
    width: '200px',
    height: '200px',
    animation: 'bounce 3s ease-in-out infinite'
  }

  const loadingTextStyle = {
    color: 'white',
    fontSize: '1.25rem',
    fontWeight: '600',
    marginTop: '1rem'
  }

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <img src='/images/robo.png' alt='Loading Astronaut' style={imageStyle} />
        <p style={loadingTextStyle}>Loading...</p>
        <style>
          {`
            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-20px);
              }
            }
          `}
        </style>
      </div>
    </div>
  )
}

export default RoboLoader
