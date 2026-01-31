import React, { useState } from 'react'

const consoles = [
  {
    id: 'switch2',
    name: 'Setup 1: Switch 2 Bundle',
    price: 650
  },
  {
    id: 'analogue3d',
    name: 'Setup 2: Analogue 3D',
    price: 451.59
  },
  {
    id: 'oled',
    name: 'Setup 3: OLED Switch Bundle',
    price: 300
  }
]

export default function ConsoleSelector() {
  const [selectedConsoles, setSelectedConsoles] = useState([])

  const toggleConsole = (id) => {
    setSelectedConsoles(prev => 
      prev.includes(id) 
        ? prev.filter(c => c !== id)
        : [...prev, id]
    )
  }

  const kindleOriginalPrice = 366.02
  const kindleDiscount = selectedConsoles.length > 0 ? kindleOriginalPrice * 0.18 : 0
  const kindleDiscountedPrice = selectedConsoles.length > 0 ? 300 : kindleOriginalPrice

  const getTotalPrice = () => {
    const consoleTotal = consoles
      .filter(c => selectedConsoles.includes(c.id))
      .reduce((sum, c) => sum + c.price, 0)
    
    return consoleTotal + kindleDiscountedPrice
  }

  return (
    <div className="console-selector">
      <div className="console-offer">
        <h3>🎁 Special Offer</h3>
        <p>Buy a console and get the Kindle Scribe bundle for <strong>just $300</strong> (18% off)!</p>
      </div>

      <div className="consoles-list">
        <h3>Select Consoles to Purchase:</h3>
        {consoles.map(console => (
          <label key={console.id} className="console-checkbox">
            <input
              type="checkbox"
              checked={selectedConsoles.includes(console.id)}
              onChange={() => toggleConsole(console.id)}
            />
            <span className="console-label">
              <strong>{console.name}</strong> - ${console.price.toFixed(2)}
            </span>
          </label>
        ))}
      </div>

      {selectedConsoles.length > 0 && (
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {consoles
              .filter(c => selectedConsoles.includes(c.id))
              .map(c => (
                <div key={c.id} className="summary-item">
                  <span>{c.name}</span>
                  <span>${c.price.toFixed(2)}</span>
                </div>
              ))}
            <div className="summary-item kindle-item">
              <span>
                Kindle Scribe Bundle
                {kindleDiscount > 0 && <span className="discount-badge">-18%</span>}
              </span>
              <div className="price-info">
                {kindleDiscount > 0 && (
                  <span className="original-price">${kindleOriginalPrice.toFixed(2)}</span>
                )}
                <span className="final-price">${kindleDiscountedPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="summary-total">
            <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
          </div>
        </div>
      )}
    </div>
  )
}
