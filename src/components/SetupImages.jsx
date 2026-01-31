import React, { useState } from 'react'
import Modal from './Modal'

const setups = [
  {
    title: 'Setup 1: Switch 2 Bundle',
    images: ['./1-switch2.webp', './1-2-switch2.webp'],
    description: 'Nintendo Switch 2 with Mario Kart World Bundle, including GameCube and N64 controllers, microSD card, and accessories'
  },
  {
    title: 'Setup 2: Analogue 3D',
    images: ['./2-analogue3d.webp', './2-2-analogue3d.webp'],
    description: 'Analogue 3D white console with 8BitDo N64 controller and Kaico SummerCart64 flash cart',
    link: 'https://www.analogue.co/3d'
  },
  {
    title: 'Setup 3: OLED Switch Bundle',
    images: ['./3-oled-switch1.webp', './3-2-oled-switch1.webp'],
    description: 'Nintendo Switch OLED with dock, N64 controller, 512GB microSD card, and protective case'
  },
  {
    title: 'Amazon Kindle Scribe',
    images: ['./4-kindle.webp', './4-2-kindle.webp'],
    description: 'Amazon Kindle Scribe (64GB) with Premium Pen - Metallic Jade. Your notes, documents and books, all in one place with built-in AI notebook summarization'
  }
]

export default function SetupImages() {
  const [selectedImage, setSelectedImage] = useState(null)

  const getImageForSetup = (setup) => {
    return setup.image || (setup.images && setup.images[0])
  }

  return (
    <>
      <h2>📸 Setup Images</h2>
      <div className="setup-images">
        {setups.map((setup, idx) => (
          <div key={idx} className="setup-image-card">
            <div className="setup-card-image-wrapper">
              {setup.images ? (
                <div className="setup-multiple-images">
                  {setup.images.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={img}
                      alt={`${setup.title} ${imgIdx + 1}`}
                      onClick={() => setSelectedImage({ image: img, title: setup.title })}
                      className="setup-card-image"
                    />
                  ))}
                </div>
              ) : (
                <>
                  <img
                    src={setup.image}
                    alt={setup.title}
                    onClick={() => setSelectedImage(setup)}
                    className="setup-card-image"
                  />
                  <div className="setup-image-hint">Click to enlarge</div>
                </>
              )}
              {setup.images && <div className="setup-image-hint">Click to enlarge</div>}
            </div>
            <div className="setup-card-details">
              <h3>
                {setup.link ? (
                  <a href={setup.link} target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', textDecoration: 'none' }}>
                    {setup.title}
                  </a>
                ) : (
                  setup.title
                )}
              </h3>
              <p>{setup.description}</p>
            </div>
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
