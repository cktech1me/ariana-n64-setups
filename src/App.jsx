import React from 'react'
import CostBreakdown from './components/CostBreakdown'
import FeaturesComparison from './components/FeaturesComparison'
import WhatsIncluded from './components/WhatsIncluded'
import SetupImages from './components/SetupImages'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>🎮 Ariana's Nintendo 64 Setup Comparison</h1>
        <p>1me Games - Chris King</p>
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
