import React from 'react'

const setups = [
  {
    name: 'Switch 2 Bundle',
    components: [
      'Switch 2 Mario Kart World Bundle ($499.99)',
      '512GB microSD Express ($89.99)',
      'NSO N64 Controller ($54.99)',
      'NSO GameCube Controller ($64.99)',
      'Case ($25)',
      'Screen Protector ($12)',
      'Controller Accessory Pack ($15)'
    ],
    subtotal: '$761.95',
    tax: '$47.62',
    shipping: '$0',
    retailTotal: '$809.57',
    arianasDeal: '$680 (16% off)',
    condition: 'New'
  },
  {
    name: 'Analogue 3D',
    components: [
      'Analogue 3D White ($269.99)',
      '8BitDo N64 White ($44.99)',
      'Kaico SummerCart64 32GB ($89.99)'
    ],
    subtotal: '$404.97',
    tax: '$26.62',
    shipping: '$20',
    retailTotal: '$451.59',
    arianasDeal: '$451.59 (no discount)',
    condition: 'New'
  },
  {
    name: 'OLED Switch Bundle',
    components: [
      'OLED Switch w/ Dock ($349.99)',
      'NSO N64 Controller ($54.99)',
      '512GB microSDXC ($69.99)',
      'Case ($25)'
    ],
    subtotal: '$499.97',
    tax: '$31.25',
    shipping: '$0',
    retailTotal: '$531.22',
    arianasDeal: '$325 (39% off)',
    condition: 'Open box (console barely used)'
  },
  {
    name: 'Amazon Kindle Scribe',
    components: [
      'Amazon Kindle Scribe (64GB) ($449.99)',
      'Premium Pen - Metallic Jade ($0 - included)',
      'Kindle Unlimited ($0 for 3 months, $11.99/month after)'
    ],
    subtotal: '$449.99',
    tax: '$0 (digital)',
    shipping: 'FREE',
    retailTotal: '$449.99',
    arianasDeal: '$292.49 (35% off)',
    condition: 'Open box, but mint'
  }
]

export default function CostBreakdown() {
  return (
    <>
      <h2>💰 Cost Breakdown by Setup</h2>
      <div className="table-wrapper">
        <table>
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
            {setups.map((setup, idx) => (
              <tr key={idx}>
                <td><strong>{setup.name}</strong></td>
                <td>
                  <ul style={{ marginLeft: '20px', lineHeight: '1.6' }}>
                    {setup.components.map((comp, i) => (
                      <li key={i}>{comp}</li>
                    ))}
                  </ul>
                </td>
                <td>{setup.subtotal}</td>
                <td>{setup.tax}</td>
                <td>{setup.shipping}</td>
                <td>{setup.retailTotal}</td>
                <td><strong>{setup.arianasDeal}</strong></td>
                <td>{setup.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
