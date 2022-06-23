import { Box, List, ListItem, ListIcon, Divider,
     Center, LinkBox, LinkOverlay } from "../../node_modules/@chakra-ui/layout/dist/chakra-ui-layout.cjs"
import { MdHome, MdSearch, MdLibraryMusic, MdFavorite, MdPlaylistAdd } from "react-icons/md"
import Image from 'next/image';
import Link from "next/link.js";
import { usePlaylist } from "../../lib/hooks";

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
]

const musicMenu = [
    {
        name: 'CreatePlaylist',
        icon: MdPlaylistAdd,
        route: "/"
    },
    {
        name: 'Favorites',
        icon: MdFavorite,
        route: "/"
    },
]

// const playlists = new Array(30).fill(1).map((_ , i) => `Playlist ${i + 1}`)






const Sidebar = () => {
    const {playlists} = usePlaylist()


    return (
        <Box 
            width="100%" height="calc(100vh - 100px)"
            bg="black" paddingX="5px" color="gray">

            <Box paddingY="20px" height="100%">
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
                                            <ListIcon as={menu.icon} color="white" marginRight="20px"/>{menu.name}
                                        </LinkOverlay>
                                    </Link>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>

                </Box>
                <Box marginBottom="20px" marginTop="20px">
                    <List spacing={2}>
                        {/* Implicit return */}
                        {musicMenu.map(menu => (
                            <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                                <LinkBox>
                                    <Link href={menu.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon as={menu.icon} color="white" marginRight="20px"/>{menu.name}
                                        </LinkOverlay>
                                    </Link>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>

                </Box>
                <Divider color="gray.700"/>
                <Box height="60%" overflowY="auto" paddingY="20px">
                    <List spacing={2}>
                        {}

                        {playlists.map((playlist)=> (
                            <ListItem paddingX="20px" key={playlist.id}>
                                <LinkBox>
                                    <Link href={{
                                        pathname: "/playlist/[id]",
                                        query: {id: playlist.id}
                                    }} passHref>
                                        <LinkOverlay>
                                            {playlist.name}
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