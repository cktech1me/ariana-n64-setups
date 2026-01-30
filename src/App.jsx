import React from 'react'
import CostBreakdown from './components/CostBreakdown'
import FeaturesComparison from './components/FeaturesComparison'
import WhatsIncluded from './components/WhatsIncluded'
import SetupImages from './components/SetupImages'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <img 
          src="./logo.webp" 
          alt="Ariana's R Us" 
          style={{ maxHeight: '200px', marginBottom: '16px' }}
        />
        <p>Nintendo 64 Setup Comparison and Random Kindle</p>
      </header>

      <div className="content">
        <SetupImages />
        <CostBreakdown />
        <FeaturesComparison />
        <WhatsIncluded />
      </div>
    </div>
  )
}
