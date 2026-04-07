import HomeGenres from '../components/homegenres/HomeGenres'
import HomeHero from '../components/homehero/HomeHero'
import HomeShowcase from '../components/homeshowcase/HomeShowcase'
import HomeStudios from '../components/homestudios/HomeStudios'

function HomePage() {
  return (
    <section className="page page--hero home-page">
      <HomeShowcase />
      <HomeHero />
      <HomeGenres />
      <HomeStudios />
    </section>
  )
}

export default HomePage
