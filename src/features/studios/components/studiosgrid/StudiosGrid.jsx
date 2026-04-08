/* eslint-disable react/prop-types */

import StudioCard from '../studiocard/StudioCard'
import './StudiosGrid.css'

function StudiosGrid({ studios }) {
  return (
    <div className="page-grid page-grid--three studios-grid">
      {studios.map((studio) => (
        <StudioCard key={studio.id} studio={studio} />
      ))}
    </div>
  )
}

export default StudiosGrid
