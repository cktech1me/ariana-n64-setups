import React from 'react'

export default function Modal({ isOpen, image, title, onClose }) {
  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-40px',
            right: '0',
            background: 'white',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}
        >
          ×
        </button>
        
        <img
          src={image}
          alt={title}
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            borderRadius: '8px',
            objectFit: 'contain'
          }}
        />
        
        <p
          style={{
            marginTop: '15px',
            color: 'white',
            textAlign: 'center',
            fontSize: '16px'
          }}
        >
          {title}
        </p>
      </div>
    </div>
  )
}
