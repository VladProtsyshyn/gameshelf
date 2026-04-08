import './LoadingIndicator.css'

function LoadingIndicator() {
    return (
        <div className="loading-indicator" role="status" aria-live="polite">
            <div className="loading-indicator__bar">
                <span className="loading-indicator__cell" />
                <span className="loading-indicator__cell" />
                <span className="loading-indicator__cell" />
                <span className="loading-indicator__cell" />
                <span className="loading-indicator__cell" />
            </div>

            <p className="loading-indicator__label">Завантаження...</p>
        </div>
    )
}

export default LoadingIndicator
