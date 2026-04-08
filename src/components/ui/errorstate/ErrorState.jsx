import './ErrorState.css'

function ErrorState() {
    return (
        <div className="error-state" role="alert" aria-live="assertive">
            <div className="error-state__screen">
                <span className="error-state__pixel" />
                <span className="error-state__pixel" />
                <span className="error-state__pixel" />
                <span className="error-state__pixel" />
                <span className="error-state__pixel" />
            </div>

            <h3 className="error-state__title">System Error</h3>
            <p className="error-state__text">Не вдалося завантажити дані.</p>
        </div>
    )
}

export default ErrorState
