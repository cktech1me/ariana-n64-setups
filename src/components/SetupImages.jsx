import React, { useState } from 'react'
import Modal from './Modal'

const setups = [
  {
    title: 'Setup 1: Switch 2 Bundle',
    image: './1-switch2.webp',
    description: 'Nintendo Switch 2 with Mario Kart World Bundle, including GameCube and N64 controllers, microSD card, and accessories'
  },
  {
    title: 'Setup 2: Analogue 3D',
    image: './2-analogue3d.webp',
    description: 'Analogue 3D white console with 8BitDo N64 controller and Kaico SummerCart64 flash cart'
  },
  {
    title: 'Setup 3: OLED Switch Bundle',
    image: './3-oled-switch1.webp',
    description: 'Nintendo Switch OLED with dock, N64 controller, 512GB microSD card, and protective case'
  },
  {
    title: 'Setup 4: Amazon Kindle Scribe',
    image: './4-kindle.webp',
    description: 'Amazon Kindle Scribe (64GB) with Premium Pen - Metallic Jade. Your notes, documents and books, all in one place with built-in AI notebook summarization'
  }
]

export default function SetupImages() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <h2>📸 Setup Images</h2>
      <div className="setup-images">
        {setups.map((setup, idx) => (
          <div key={idx} className="setup-image-card">
            <h3 style={{ padding: '15px 15px 0 15px', color: '#667eea' }}>
              {setup.title}
            </h3>
            <img
              src={setup.image}
              alt={setup.title}
              onClick={() => setSelectedImage(setup)}
              style={{ cursor: 'pointer' }}
            />
            <p>{setup.description}</p>
          </div>
        ))}
      </div>
      
      <Modal
        isOpen={selectedImage !== null}
        image={selectedImage?.image}
        title={selectedImage?.title}
        onClose={() => setSelectedImage(null)}
      />
    </>
  )
}
