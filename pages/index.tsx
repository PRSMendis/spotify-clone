import GradientLayout from './components/gradientLayout'
import prisma from '../lib/prisma'

const Home = () =>  {
  return (<GradientLayout color='red' roundImage='true' 
  subtitle='profile' 
  title='Rayhan Mendis' 
  description='10 public playlists'
  image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
  >

  </GradientLayout>)
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props:{artists},
  }

}

export default Home