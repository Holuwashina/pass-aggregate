import Hero from '../components/Hero'
import HeroBottom from '../components/HeroBottom'
import PlatformSection from '../components/PlatformSection'

const Home = ({ platforms } ) => {
  return (
    <>
      <Hero />
      <HeroBottom />
      <PlatformSection platforms={platforms} />
    </>
  )
}

//http://json-db-passa.herokuapp.com/platforms
//http://localhost:4000/platforms

export const getStaticProps = async () => {
  //Fetch the platform 
  const platform_res = await fetch('http://json-db-passa.herokuapp.com/platforms')
  const platforms = await platform_res.json()

  if (!platforms) {
    return {
      notFound: true,
    }
  }

  //Return the platform as props
  return {
    props: {
      platforms
    }
  }
}

export default Home