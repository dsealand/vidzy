import React from "react";

import { View, TouchableOpacity } from "react-native";
import style from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import Colors from "../components/colors";
import VideoStack from "../components/videoStack";

const Header = style.View`
    position: absolute;
    width: 100%
    top: 50px;
    z-index: 1;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
`;

const HeaderText = style.Text`
    fontFamily: Helvetica;
    color: ${Colors.white};
    textShadowRadius: 1px;
    textShadowColor: ${Colors.darkGrey};
    font-size: 15px;
    fontWeight: bold;
`;

const Element = style(TouchableOpacity)`
    shadowColor: ${Colors.darkGrey};
    shadowOpacity: 1;
    shadowRadius: 10px;
    width: 20%;
    alignItems: center;
`;

/* VideoStackPage
 *
 * A videoStack with header, cart button, and back button
 */
const VideoStackPage = ({ navigation, headerText, videoStack, back }) => {
    return (
        <View>
            <Header>
                <Element onPress={() => navigation.goBack()}>
                    {/* onPress should not work when Feather icon arrow-left not rendered */}
                    {back !== undefined && (
                        <Feather
                            name="arrow-left"
                            size={20}
                            color={Colors.white}
                        />
                    )}
                </Element>
                <HeaderText>{headerText}</HeaderText>
                <Element>
                    <Feather
                        name="shopping-cart"
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
