import React, { useState } from 'react'

const setups = [
  {
    id: 'switch2',
    name: 'Setup 1: Switch 2 Bundle',
    components: [
      'Switch 2 Mario Kart World Bundle ($499.99)',
      '⚡ 512GB microSD Express ($89.99) - Fast load times',
      'NSO N64 Controller ($54.99)',
      'NSO GameCube Controller ($64.99)',
      'Case ($25)',
      'Screen Protector ($12)',
      'Controller Accessory Pack ($15)'
    ],
    subtotal: 761.95,
    tax: 47.62,
    shipping: 0,
    retailTotal: 809.57,
    arianasDeal: 650,
    condition: 'New'
  },
  {
    id: 'analogue3d',
    name: 'Setup 2: Analogue 3D',
    components: [
      'Analogue 3D White ($269.99)',
      '8BitDo N64 White ($44.99)',
      'Kaico SummerCart64 32GB ($89.99)'
    ],
    subtotal: 404.97,
    tax: 26.62,
    shipping: 20,
    retailTotal: 451.59,
    arianasDeal: 451.59,
    condition: 'New'
  },
  {
    id: 'oled',
    name: 'Setup 3: OLED Switch Bundle',
    components: [
      'OLED Switch w/ Dock ($349.99)',
      'NSO N64 Controller ($54.99)',
      '512GB microSDXC ($69.99)',
      'Case ($25)'
    ],
    subtotal: 499.97,
    tax: 31.25,
    shipping: 0,
    retailTotal: 531.22,
    arianasDeal: 300,
    condition: 'Open box (console barely used)'
  },
  {
    id: 'kindle',
    name: 'Amazon Kindle Scribe',
    components: [
      'Amazon Kindle Scribe (64GB) ($449.99)',
      'Premium Pen - Metallic Jade ($0 - included)',
      'Plant-Based Leather Folio Case ($79.99)'
    ],
    subtotal: 529.98,
    tax: 33.12,
    shipping: 0,
    retailTotal: 563.10,
    arianasDeal: 366.02,
    condition: 'Open box, but mint',
    bundlePrice: 300,
    bundleDiscount: 0.18
  }
]

export default function SetupPricingSelector() {
  const [selectedConsoles, setSelectedConsoles] = useState([])
  const [breakdownExpanded, setBreakdownExpanded] = useState(true)

  const toggleConsole = (id) => {
    setSelectedConsoles(prev => 
      prev.includes(id) 
        ? prev.filter(c => c !== id)
        : [...prev, id]
    )
  }

  const kindleSetup = setups.find(s => s.id === 'kindle')
  const isKindleDiscounted = selectedConsoles.includes('kindle') && selectedConsoles.filter(id => id !== 'kindle').length > 0
  const kindlePrice = isKindleDiscounted ? kindleSetup.bundlePrice : kindleSetup.arianasDeal

  const selectedSetups = setups.filter(s => selectedConsoles.includes(s.id))
  const totalPrice = selectedSetups.reduce((sum, s) => {
    if (s.id === 'kindle') {
      return sum + kindlePrice
    }
    return sum + s.arianasDeal
  }, 0)

  return (
    <div className="setup-pricing-selector">
      {/* Special Offer Banner */}
      <div className="offer-banner">
        <div className="offer-content">
          <h2>🎁 Special Bundle Offer</h2>
          <p className="offer-subtitle">Select console(s) below to see pricing. Get the Kindle Scribe for <span className="highlight">just $300</span> when you buy a console!</p>
        </div>
      </div>

      {/* Console Selection Grid */}
      <div className="selector-section">
        <h3>Choose Your Gaming Setup</h3>
        <div className="setups-grid">
          {setups.map((setup) => (
            <div 
              key={setup.id}
              className={`setup-option ${selectedConsoles.includes(setup.id) ? 'selected' : ''}`}
              onClick={() => toggleConsole(setup.id)}
            >
              <input
                type="checkbox"
                checked={selectedConsoles.includes(setup.id)}
                onChange={() => toggleConsole(setup.id)}
                className="setup-checkbox"
              />
              <div className="setup-info">
                <h4>{setup.name}</h4>
                <div className="price-tag">
                  {setup.id === 'kindle' && selectedConsoles.filter(id => id !== 'kindle').length > 0
                    ? `$${kindlePrice.toFixed(2)}` 
                    : `$${setup.id === 'kindle' ? setup.arianasDeal.toFixed(2) : setup.arianasDeal.toFixed(2)}`}
                  {setup.id === 'kindle' && selectedConsoles.filter(id => id !== 'kindle').length > 0 && 
                    <span className="bundle-badge"> Bundle Deal</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Cost Breakdown Table */}
      <div className="detailed-breakdown">
        <h3 
          onClick={() => setBreakdownExpanded(!breakdownExpanded)}
          className="breakdown-header"
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <span>💰 Detailed Cost Breakdown</span>
          <span style={{ fontSize: '18px', transition: 'transform 0.3s' }}>
            {breakdownExpanded ? '▼' : '▶'}
          </span>
        </h3>
        {breakdownExpanded && (
          <div className="table-wrapper">
            <table className="cost-breakdown-table">
            <thead>
              <tr>
                <th>Setup</th>
                <th>Components</th>
                <th>Subtotal</th>
                <th>Tax (6.25%)</th>
                <th>Shipping</th>
                <th>Retail Total</th>
                <th>Ariana's Deal</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              {setups.filter(s => s.id !== 'kindle').map((setup) => (
                <tr key={setup.id} className={selectedConsoles.includes(setup.id) ? 'highlighted' : ''}>
                  <td><strong>{setup.name}</strong></td>
                  <td>
                    <ul style={{ marginLeft: '20px', lineHeight: '1.6', marginTop: 0, marginBottom: 0 }}>
                      {setup.components.map((comp, i) => (
                        <li key={i}>{comp}</li>
                      ))}
                    </ul>
                  </td>
                  <td>${setup.subtotal.toFixed(2)}</td>
                  <td>${setup.tax.toFixed(2)}</td>
                  <td>${setup.shipping.toFixed(2)}</td>
                  <td>${setup.retailTotal.toFixed(2)}</td>
                  <td><strong>${setup.arianasDeal.toFixed(2)}</strong></td>
                  <td>{setup.condition}</td>
                </tr>
              ))}
              <tr className={selectedConsoles.includes('kindle') ? 'highlighted' : ''}>
                <td><strong>Amazon Kindle Scribe</strong></td>
                <td>
                  <ul style={{ marginLeft: '20px', lineHeight: '1.6', marginTop: 0, marginBottom: 0 }}>
                    {kindleSetup.components.map((comp, i) => (
                      <li key={i}>{comp}</li>
                    ))}
                  </ul>
                </td>
                <td>${kindleSetup.subtotal.toFixed(2)}</td>
                <td>${kindleSetup.tax.toFixed(2)}</td>
                <td>FREE</td>
                <td>${kindleSetup.retailTotal.toFixed(2)}</td>
                <td>
                  <strong>
                    {selectedConsoles.filter(id => id !== 'kindle').length > 0 ? (
                      <span>
                        ${kindlePrice.toFixed(2)} <span style={{ fontSize: '12px', color: '#10b981' }}>(-18%)</span>
                      </span>
                    ) : (
                      `$${kindlePrice.toFixed(2)}`
                    )}
                  </strong>
                </td>
                <td>{selectedConsoles.filter(id => id !== 'kindle').length > 0 ? 'Bundle Deal' : kindleSetup.condition}</td>
              </tr>
            </tbody>
          </table>
            </div>
        )}
      </div>

      {/* Pricing Breakdown */}
      {selectedConsoles.length > 0 && (
        <div className="pricing-breakdown">
          <h3>💰 Order Summary</h3>
          <div className="breakdown-items">
            {selectedSetups.filter(s => s.id !== 'kindle').map((setup) => (
              <div key={setup.id} className="breakdown-item">
                <span>{setup.name}</span>
                <span className="price">${setup.arianasDeal.toFixed(2)}</span>
              </div>
            ))}
            
            {selectedConsoles.includes('kindle') && (
              <div className="breakdown-item kindle-item">
                <div>
                  <span className="kindle-label">Amazon Kindle Scribe</span>
                  {selectedConsoles.filter(id => id !== 'kindle').length > 0 && 
                    <span className="kindle-note">with console purchase (18% off)</span>}
                </div>
                <div className="kindle-pricing">
                  {selectedConsoles.filter(id => id !== 'kindle').length > 0 && (
                    <>
                      <span className="original-price">${kindleSetup.arianasDeal.toFixed(2)}</span>
                      <span className="discount-text">-18%</span>
                    </>
                  )}
                  <span className="final-price">${kindlePrice.toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>

          <div className="total-section">
            <div className="total-line">
              <span>Total</span>
              <span className="total-price">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="savings-note">✨ You're saving big with Ariana's deals!</p>
          </div>
        </div>
      )}
    </div>
  )
}
