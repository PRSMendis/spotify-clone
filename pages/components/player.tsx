import { Box, ButtonGroup, IconButton, RangeSlider, RangeSliderFilledTrack,
RangeSliderTrack, RangeSliderThumb, Center, Flex, Text  } from "@chakra-ui/react";
import ReactHowler from 'react-howler'
import { useEffect, useRef, useState } from "react";
import { MdShuffle, MdSkipPrevious, MdSkipNext, MdOutlinePlayCircleFilled, 
MdPauseCircleFilled, MdOutlineRepeat, MdRepeat } from "react-icons/md";
import { useStoreActions } from "easy-peasy";

const Player = ({songs, activeSong}) => {
    const [playing, setPlaying] = useState(true)
    const [index, setIndex] = useState(0)
    const [seek, setSeek] = useState(0.0)
    const [repeat, setRepeat] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [duration, setDuration] = useState(0.0)

    const setPlayState = (value) => {
        setPlaying(value)
    }

    const onShuffle = () => {
        setShuffle((state) => !state)
    }

    const onRepeat = () => {
        setRepeat(state => !state)
    }


    return (
        <Box>
            <Box>
                {/* <ReactHowler 
                playing={playing}
                src={activeSong?.url}
                /> */}
            </Box>
            <Center color="gray.600">
                <ButtonGroup>
                    <IconButton outline="none" variant="link" aria-label="shuffle" fontSize="20px" icon={<MdShuffle/>} color={shuffle ? 'white' : 'gray.600'} onClick={onShuffle} />
                    <IconButton outline="none" variant="link" aria-label="previous" fontSize="24px" icon={<MdSkipPrevious/>} />
                    {playing ? 
                    (<IconButton outline="none" variant="link" aria-label="Pause" fontSize="40px" icon={<MdPauseCircleFilled/>} color="white" onClick={()=> setPlayState(false)} /> ) 
                    : (<IconButton outline="none" variant="link" aria-label="play" fontSize="40px" icon={<MdOutlinePlayCircleFilled/>} color="white" onClick={()=> setPlayState(true)}/> )}
                    <IconButton outline="none" variant="link" aria-label="skip" fontSize="24px" icon={<MdSkipNext/>} />
                    <IconButton outline="none" variant="link" aria-label="repeat" fontSize="20px" icon={<MdRepeat/>} color={repeat ? 'white' : 'gray.600'} onClick={onRepeat} />

                </ButtonGroup>
            </Center>
            <Box color="gray.600">
                <Flex justify="center" align="center">
                    <Box width="10%">
                        <Text fontSize="xs">1:21</Text>
                    </Box>
                    <Box width="80%">
                        <RangeSlider aria-label={['min', 'max']}
                        step={0.1}
                        min={0}
                        max={321}
                        id="player-range">
                            <RangeSliderTrack bg="gray.800">
                                <RangeSliderFilledTrack bg="gray.600"/>
                            </RangeSliderTrack>
                            <RangeSliderThumb index={0}/>
                        </RangeSlider>
                    </Box>
                    <Box width="10%" textAlign="right">
                        <Text fontSize="xs">321</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )

}

export default Player