import React from 'react';

import { Video } from 'react-native';

import styled from 'styled-components/native';

const ProductVideo = styled(Video)`
	height: 80%;
`

const VideoPlayer = ({ video, poster }) => {
	return (
		<ProductVideo
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
