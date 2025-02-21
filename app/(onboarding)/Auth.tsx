import { useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import { Images } from "@/assets/images/images";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Login from "./Login";
import Register from "./Register";
import { Colors } from "@/constants/colors";

const renderScene = SceneMap({
  login: Login,
  signup: Register,
});

const routes = [
  { key: "login", title: "Login" },
  { key: "signup", title: "Sign up" },
];

const renderTabBar = (props: any) => {
  return (
    <TabBar
      {...props}
      style={{ height: 36 }}
      indicatorStyle={{ backgroundColor: "white" }}
      indicatorContainerStyle={{
        backgroundColor: Colors.PRIMARY,
      }}
      activeColor="white"
      inactiveColor="black"
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

const Auth = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState<number>(0);

  return (
    <View className="flex-1 bg-slate-200 px-4 pt-12 items-center">
      <Images.logoPurple
        height={120}
        width={120}
        style={{ marginBottom: 40 }}
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

export default Auth;
