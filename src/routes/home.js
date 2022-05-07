import Carousel from '../components/home/carousel'
import Options from '../components/home/options'
import Layout from '../components/layout'
import Shirts from '../components/home/shirts'
import CountyLeagues from '../components/home/country_leagues'
import OtherCollection from '../components/home/other_collection'
import PersSocialNet from '../components/home/pers_social_net'

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <Options />
      <Shirts />
      <CountyLeagues />
      <OtherCollection />
      <PersSocialNet />
    </Layout>
  )
}

export default Home