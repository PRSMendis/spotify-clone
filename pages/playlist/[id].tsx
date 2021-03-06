import { validateToken } from "../../lib/auth"
import prisma from "../../lib/prisma"
import GradientLayout from "../components/gradientLayout"
import dynamic from 'next/dynamic'

const SongTable = dynamic(() => import("../components/songsTable"), {
  ssr: false,
})

const getRBGColor = id => {
    const colors = [
        'red',
        'green',
        'blue',
        'orange', 
        'purple',
        'gray',
        'teal'
    ]

    return colors [id-1] || colors[Math.floor(Math.random() * colors.length)]
}


const Playlist = ({playlist})=> {

    const color = getRBGColor(playlist.id)

    return (
        <GradientLayout color={color} roundImage={false} title = {playlist.name}
         subtitle="playlist" description={`${playlist.songs.length} songs`} image={`https://picsum.photos/400?random=${playlist.id}`} >

            <SongTable songs={playlist.songs}/>


        </GradientLayout>
    )
}


export const getServerSideProps = async ({query, req}) => {

    let user 

    try {
        user = validateToken(req.cookies.RAY_ACCESS_TOKEN)
    } catch (e) {
        return {
            redirect: {
                permanent: false, 
                destination: '/signin'
            }
        }
    }



    const {id} = validateToken(req.cookies.RAY_ACCESS_TOKEN) 
    const [playlist] = await prisma.playlist.findMany({ 
        where: {
            id: +query.id,
            userId: id,
        },
        include: {
            songs: {
                include: {
                    artist: {
                        select: {
                            name: true, 
                            id: true
                        },
                    },
                },
            },
        },
    })

    return {
        props: {playlist},
    }
}


export default Playlist