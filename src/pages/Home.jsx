import Hero from '../components/HomePage/Hero/Hero'
import MustVisit from '../components/HomePage/Must-Visit/MustVisit'
import Explore from '../components/HomePage/Explore/Explore'
import ReelSection from '../components/Homepage/Reels/ReelSection'
import Map from '../components/HomePage/Map/Map'

const Home = ({dark}) => (
  <div>
    <Hero dark={dark} />
    <MustVisit dark={dark} />
    <Explore dark={dark} />
    <Map dark={dark} />
    <ReelSection dark={dark} />
  </div>
)

export default Home