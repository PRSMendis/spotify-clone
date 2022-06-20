import { Box, List, ListItem, ListIcon, Divider,
     Center, LinkBox, LinkOverlay } from "../../node_modules/@chakra-ui/layout/dist/chakra-ui-layout.cjs"
import { MdHome, MdSearch, MdLibraryMusic, MdFavorite, MdPlaylistAdd } from "react-icons/md"
import Image from 'next/image';
import Link from "next/link.js";

const navMenu = [
    {
        name: 'Home',
        icon: MdHome,
        route: "/"
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: "/search"
    },
    {
        name: 'Your Library',
        icon: MdLibraryMusic,
        route: "/library"
    },
    {
        name: 'Home',
        icon: MdHome,
        route: "/"
    }
]






const Sidebar = () => {
    return (
        <Box 
            width="100%" height="calc(100vh - 100px)"
            bg="black" paddingX="5px" color="gray">

            <Box paddingY="20px">
                <Box width="120px" marginBottom="20px" paddingX="20px">
                    <Image src="/circle.svg" height={60} width={60}></Image>
                </Box>
                <Box marginBottom="20px">
                    <List spacing={2}>
                        {/* Implicit return */}
                        {navMenu.map(menu => (
                            <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                                <LinkBox>
                                    <Link href={menu.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon as={menu.icon} color="white" marginRight="20px"/>
                                        </LinkOverlay>
                                    </Link>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>

                </Box>

            </Box>
        </Box>
    )

}

export default Sidebar