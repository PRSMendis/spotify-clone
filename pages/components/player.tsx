import { Box, ButtonGroup, IconButton, RangeSlider, RangeSliderFilledTrack,
RangeSliderTrack, RangeSliderThumb, Center, Flex, Text  } from "@chakra-ui/react";
import ReactHowler from 'react-howler'
import { useEffect, useRef, useState } from "react";
import { MdShuffle, MdSkipPrevious, MdSkipNext, MdOutlinePlayCircleFilled, 
MdPauseCircleFilled, MdOutlineRepeat, MdRepeat } from "react-icons/md";
import { useStoreActions } from "easy-peasy";

const Player = () => {
    return (
        <Box>
            <Box>
                {/* <ReactHowler/> */}
            </Box>
            <Center color="gray.600">
                <ButtonGroup>
                    <IconButton outline="none" variant="link" aria-label="shuffle" fontSize="20px" icon={<MdShuffle/>} />
                    <IconButton outline="none" variant="link" aria-label="previous" fontSize="24px" icon={<MdSkipPrevious/>} />
                    <IconButton outline="none" variant="link" aria-label="play" fontSize="40px" icon={<MdOutlinePlayCircleFilled/>} color="white"/>
                    <IconButton outline="none" variant="link" aria-label="Pause" fontSize="40px" icon={<MdPauseCircleFilled/>} color="white"/>
                    <IconButton outline="none" variant="link" aria-label="skip" fontSize="24px" icon={<MdSkipNext/>} />
                    <IconButton outline="none" variant="link" aria-label="repeat" fontSize="20px" icon={<MdRepeat/>} />

                </ButtonGroup>
            </Center>
            <Box color="gray.900">
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

                        </RangeSlider>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )

}

export default Player