import React from 'react'

import { Video } from 'react-native-video'

import styled from 'styled-components/native'

/*
const ProductVideo = styled(Video)`
	height: 80%;
`
*/

const VideoPlayer = ({ video, poster }) => {
	return (
		<Video
            source={require('../assets/IMG_0240.mp4')}
			rate={1.0}
			volume={1.0}
			isMuted={false}
			shouldPlay
			useNativeControls={false}
			posterSource={poster}
			source={video}
            resizeMode='cover'
		/>
	)
}

export default VideoPlayer;
