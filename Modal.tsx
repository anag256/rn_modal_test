import { useState } from "react";
import { Dimensions, Platform, Text, View } from "react-native";
import ReactNativeModal from "react-native-modal";


const deviceWidth = Dimensions.get("window").width;
const deviceHeight =
  Platform.OS === "ios"
    ? Dimensions.get("window").height
    : require("react-native-extra-dimensions-android").get(
        "REAL_WINDOW_HEIGHT"
      );

export function Modal() {
  const [isModalVisible, setModalVisible] = useState(true);

  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
    >
      <View style={{ flex: 1,position:'absolute',bottom:0 ,backgroundColor:'red'}}>
        <Text>I am the modal content!</Text>
      </View>
    </ReactNativeModal>
  );
}