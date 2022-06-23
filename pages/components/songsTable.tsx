import { Box } from "@chakra-ui/layout";
import { Table, Thead, Td, Tr, Th, Tbody, IconButton } from "@chakra-ui/react";
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'

const SongTable = ({songs}) => {
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
                </Table>
                
            </Box>

        </Box>
    )

}

export default SongTable