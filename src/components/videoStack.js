import React, { useState, FlatList, View } from "react";

import PagerView from "react-native-pager-view";
import { PagerViewOnPageScrollEventData, PagerViewOnPageSelectedEventData } from 'react-native-pager-view';

import Colors from "./colors";
import VideoCard from "./videoCard";

const VideoStack = ({ navigation, stack }) => {
    const [selected, setSelected] = useState(0);
    const [focus, setFocus] = useState(true);

    /*
     * Listeners to see whether videoStack is focues/visible screen.
     * Will stop and then start video when exiting to see product or
     * creator page and then returning to For You.
     */
    React.useEffect(() => {
        const didBlur = navigation.addListener("blur", () => {
            setFocus(false);
        });
        const didFocus = navigation.addListener("focus", () => {
            setFocus(true);
        });
        return didBlur, didFocus;
    }, [navigation]);

    // return (
    //     <PagerView
    //         orientation="vertical"
    //         onPageSelected={(e) => setSelected(e.nativeEvent.position)}
    //         initialPage={1}
    //         offscreenPageLimit={2}
    //         style={{ backgroundColor: Colors.darkGrey }}
    //     >
    //         {stack.map((card, index) => {
    //             return (
    //                 <VideoCard
    //                     key={index}
    //                     navigation={navigation}
    //                     card={card}
    //                     isPlay={selected === index && focus}
    //                 />
    //             );
    //         })}
    //     </PagerView>
    // );

    const renderItem = ({ item }) => {
        return (
            <VideoCard
                key={index}
                navigation={navigation}
                card={card}
                isPlay={selected === index && focus}
            />
        );
    }

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 80,
    };

    return (
        <View>
            <FlatList
                snapToAlignment={'start'}
                // snapToInterval={screenHeight}
                decelerationRate={'fast'}
                scrollEventThrottle={250}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                vertical={true}
                scrollEnabled={true}
                style={{ flex: 1 }}
                data={stack}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                // onViewableItemsChanged={this.onViewableItemsChanged}
                initialNumToRender={3}
                maxToRenderPerBatch={3}
                windowSize={5}
                getItemLayout={(_data, index) => ({
                    length: cellHeight,
                    offset: cellHeight * index,
                    index,
                })}
                // onEndReached={this.onEndReached}
                // onEndReachedThreshold={0.1}
                viewabilityConfig={viewabilityConfig}
                removeClippedSubviews={true}
            >
                {/* {stack.map((card, index) => {
                return (
                    <VideoCard
                        key={index}
                        navigation={navigation}
                        card={card}
                        isPlay={selected === index && focus}
                    />
                );
            })} */}
            </FlatList>
        </View>

    )
};
export default VideoStack;
