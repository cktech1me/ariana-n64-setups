import React from 'react'
import CostBreakdown from './components/CostBreakdown'
import FeaturesComparison from './components/FeaturesComparison'
import WhatsIncluded from './components/WhatsIncluded'
import SetupImages from './components/SetupImages'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>🎮 Ariana's "R" Us</h1>
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
