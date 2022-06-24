import { Box } from "../../node_modules/@chakra-ui/layout/dist/chakra-ui-layout.cjs.js";
import PlayerBar from "./playerBar";

import Sidebar from "./sidebar"
const playerLayout = ({children}) => {
    return (
        <Box width="100vw" height="100vh">
            <Box position="absolute" top="0" width="250px" left="0">
                <Sidebar></Sidebar>
            </Box>
            <Box marginLeft="250px" marginBottom="100px">
                <Box height="calc(100vh - 100px)">
                    {children}
                </Box>
            </Box>
            <Box position="absolute" left="0" bottom="0">
                <PlayerBar/>

            </Box>
        </Box>
        

    )
}

export default playerLayout