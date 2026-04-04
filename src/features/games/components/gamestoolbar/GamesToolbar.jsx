/* eslint-disable react/prop-types */

import './GamesToolbar.css'

function GamesToolbar({ search, setSearch }) {
  return (
    <div className="games-toolbar">
      <input
        className="games-toolbar__input"
        type="text"
        placeholder="Search games..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  )
}

export default GamesToolbar
