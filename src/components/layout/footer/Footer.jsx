import InstagramIcon from '../../icons/InstagramIcon'
import SteamIcon from '../../icons/SteamIcon'
import EpicIcon from '../../icons/EpicIcon'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__logo">GameShelf</span>
          <p className="site-footer__tag">Платформа для відкриття ігор з характером</p>
        </div>

        <div className="site-footer__info">
          <div className="site-footer__links">
            <a
              className="site-footer__icon-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            <a
              className="site-footer__icon-link"
              href="https://store.steampowered.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Steam"
            >
              <SteamIcon />
            </a>

            <a
              className="site-footer__icon-link"
              href="https://store.epicgames.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Epic Games"
            >
              <EpicIcon />
            </a>
          </div>

          <a className="site-footer__mail" href="mailto:hello@gameshelf.dev">
            hello@gameshelf.dev
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
