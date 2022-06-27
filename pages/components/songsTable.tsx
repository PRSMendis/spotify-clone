import { Box } from "@chakra-ui/layout";
import { Table, Thead, Td, Tr, Th, Tbody, IconButton } from "@chakra-ui/react";
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'
import { formatDate, formatTime } from "../../lib/formatters";
import { useStoreActions } from "easy-peasy";

const SongTable = ({songs}) => {

    const playSongs = useStoreActions((store: any) => store.changeActiveSongs)
    const setActiveSong = useStoreActions((store: any) => store.changeActiveSong)
    

    const handlePlay = (activeSong?) => {
        console.log('activeSong: ', activeSong);
        setActiveSong(activeSong || songs[0])
        console.log('songs[0]: ', songs[0]);
        playSongs(songs)
    }


     return (
        <Box bg="transparent" color="white">
            <Box padding="10px" marginBottom="20x">
                <Box marginBottom="30px">
                    <IconButton 
                    icon={<BsFillPlayFill 
                    fontSize="30px" />} 
                    aria-label="play"
                    colorScheme="green"
                    size="lg"
                    isRound
                    onClick={() => handlePlay()}
                    />
                </Box>
                
                <Table variant="unstyled">
                    <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
                        <Tr>
                            <Th>#</Th>
                            <Th>Title</Th>
                            <Th>Data Added</Th>
                            <Th>
                                <AiOutlineClockCircle/>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {songs.map((song,i)=> (
                            <Tr suppressHydrationWarning sx={{
                                transition: 'all .3s',
                                '&:hover': {
                                    bg: 'rgba(255,255,255,0.1)'
                                }
                            }}
                            key={song.id}
                            cursor="pointer"
                            onClick={()=> handlePlay(song)}
                            >
                                <Td>{i+1}</Td>
                                <Td>{song.name}</Td>
                                <Td>{formatDate(song.createdAt)}</Td>
                                <Td>{formatTime(song.duration)}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                
            </Box>

        </Box>
    )

}

export default SongTable