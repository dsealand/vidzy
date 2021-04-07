import React from "react";

import { View, TouchableOpacity } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import Colors from "./colors";
import VideoStack from "./videoStack";

const Header = style.View`
    position: absolute;
    width: 100%
    top: 60px;
    z-index: 1;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
`;

const HeaderText = style.Text`
    fontFamily: Circular-Std;
    color: ${Colors.white};
    textShadowRadius: 1px;
    textShadowColor: ${Colors.darkGrey};
    font-size: 17px;
    fontWeight: bold;
`;

const Element = style(TouchableOpacity)`
    shadowColor: ${Colors.darkGrey};
    shadowOpacity: 0.5;
    shadowRadius: 7px;
    width: 20%;
    alignItems: center;
`;

/* VideoStackPage
 *
 * A videoStack with header, cart button, and back button
 */
const VideoStackPage = ({
    navigation,
    headerText,
    videoStack,
    back,
    filter,
}) => {
    return (
        <View>
            <Header>
                {filter !== undefined && (
                    <Element>
                        <Feather
                            name="sliders"
                            size={20}
                            color={Colors.white}
                        />
                    </Element>
                )}
                {/* onPress should not work when Feather icon arrow-left not rendered */}
                {back !== undefined && (
                    <Element onPress={() => navigation.goBack()}>
                        <Feather
                            name="arrow-left"
                            size={20}
                            color={Colors.white}
                        />
                    </Element>
                )}
                {filter == undefined && back == undefined && <Element />}
                <HeaderText>{headerText}</HeaderText>
                <Element onPress={() => navigation.navigate("Cart")}>
                    <Feather
                        name="user"
                        size={20}
                        color={Colors.white}
                    />
                </Element>
            </Header>
            <VideoStack navigation={navigation} stack={videoStack} />
        </View>
    );
};

export default VideoStackPage;
