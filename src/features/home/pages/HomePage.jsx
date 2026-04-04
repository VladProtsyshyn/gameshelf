import HomeGenres from '../components/homegenres/HomeGenres'
import HomeHero from '../components/homehero/HomeHero'
import HomeShowcase from '../components/homeshowcase/HomeShowcase'
import HomeStudios from '../components/homestudios/HomeStudios'

const trendingPreview = [
  { title: 'Elden Ring', meta: 'Action RPG • PC / PS5', note: 'Epic worldbuilding and premium presentation.' },
  { title: 'Cyberpunk 2077', meta: 'Open World • PC / Xbox', note: 'Perfect candidate for large visual cards and details.' },
  { title: 'Hades II', meta: 'Roguelike • PC', note: 'A good example for spotlight and wishlist behavior.' },
]

void trendingPreview

function HomePage() {
  return (
    <section className="page page--hero">
      <HomeHero />
      <HomeShowcase />
      <HomeGenres />
      <HomeStudios />
    </section>
  )
}

export default HomePage
