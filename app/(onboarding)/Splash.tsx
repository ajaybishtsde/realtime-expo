import { Colors } from "@/constants/colors";
import { View } from "react-native";
import { Images } from "@/assets/images/images";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Splash() {
  return (
    <SafeAreaView className="flex-1" style={{ flex: 1 }}>
      <View
        className="h-screen w-full justify-center items-center"
        style={{
          backgroundColor: Colors.PRIMARY,
        }}
      >
        <Images.logoWhite height={160} width={160} style={{}} />
        <Images.buildingsSplash
          style={{
            width: "100%",
            height: 143,
            position: "absolute",
            bottom: 0,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
