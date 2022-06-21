import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
    // Whatever is beiing massed into useSWR, will be cached
    const {data, error} = useSWR('/me', fetcher)

    return {
        user: data,
        isLoading: !data && error,
        isError: error,
    }
}

export const usePlaylist = () => {
    const {data, error} = useSWR('playlist', fetcher)

    return {
        playlists: (data as any) || [],
        isLoading: !data && error,
        isError: error,
    }
    
    }