import GradientLayout from './components/gradientLayout'
import prisma from '../lib/prisma'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { useMe } from '../lib/hooks'

const Home = ({artists}) =>  {

  const {user} = useMe();

  return (
  <GradientLayout color='purple' roundImage='true' 
  subtitle='profile' 
  title={`${user?.firstName} ${user?.lastName}`} 
  description={`${user?.playlistsCount} public playlists`}
  image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
  >
    {console.log('user', user)}

    <Box color="white" paddingX="40px">
      <Box marginBottom="40px">
        <Text fontSize="2xl" fontWeight="bold">Top Artist this month</Text>
        <Text fontSize="medium"> Only visible to you</Text>
      </Box>
      <Flex>
      {artists.map((artist) => (
            <Box paddingX="10px" width="20%" key={artist.name}>
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
      </Flex>
    </Box>

  </GradientLayout>)
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props:{artists},
  }

}

export default Home