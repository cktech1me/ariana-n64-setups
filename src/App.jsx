import React from 'react'
import ConsoleSelector from './components/ConsoleSelector'
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
        <p>Choose Your Perfect N64 Gaming Setup</p>
      </header>

      <div className="content">
        <ConsoleSelector />
        <SetupImages />
        <CostBreakdown />
        <FeaturesComparison />
        <WhatsIncluded />
      </div>
    </div>
  )
}
