import React from 'react'

const features = [
  {
    platform: 'Switch 2 Online (Setup 1)',
    n64: '~75 emulated games (Expansion Pack req\'d, $50/yr); official wireless controllers; save states; some emulation glitches',
    gamecube: '~15 emulated games (Expansion Pack); official wireless controller; GameCube exclusive to Switch 2',
    notes: 'Portable; online multiplayer; subscription required'
  },
  {
    platform: 'Switch OLED Online (Setup 3)',
    n64: '~75 emulated games (Expansion Pack req\'d, $50/yr); official wireless controllers; save states; some emulation glitches',
    gamecube: 'Not available (Switch 1 doesn\'t support GameCube on NSO)',
    notes: 'Portable; online multiplayer; subscription required'
  },
  {
    platform: 'Analogue 3D (Setup 2)',
    n64: '100% cart compatibility (FPGA); ROM/homebrew via flashcart; 64DD support; region-free; 4K output',
    gamecube: 'Not available',
    notes: 'No subscription needed; cartridge-based preferred; top accuracy and low latency'
  }
]

export default function FeaturesComparison() {
  return (
    <>
      <h2>🎮 Features Comparison</h2>
      <div className="table-wrapper">
        <table className="features-table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>N64 Compatibility</th>
              <th>GameCube Compatibility</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx}>
                <td><strong>{feature.platform}</strong></td>
                <td>{feature.n64}</td>
                <td>{feature.gamecube}</td>
                <td>{feature.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
