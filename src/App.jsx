import React from 'react'
import SetupPricingSelector from './components/SetupPricingSelector'
import SetupImages from './components/SetupImages'
import FeaturesComparison from './components/FeaturesComparison'
import NSOGameLibrary from './components/NSOGameLibrary'
import WhatsIncluded from './components/WhatsIncluded'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <img 
          src="./logo.webp" 
          alt="Ariana's R Us" 
          style={{ maxHeight: '200px', marginBottom: '16px' }}
        />
        <p>Choose Your Perfect N64 Gaming Setup</p>
      </header>

      <div className="content">
        <SetupPricingSelector />
        <SetupImages />
        <FeaturesComparison />
        <NSOGameLibrary />
        <WhatsIncluded />
      </div>
    </div>
  )
}
