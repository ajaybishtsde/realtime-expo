import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Splash from "./(onboarding)/Splash";
import { router } from "expo-router";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadApp() {
      try {
        await SplashScreen.preventAutoHideAsync();

        setTimeout(async () => {
          setIsReady(true);
          await SplashScreen.hideAsync();
          router.navigate("/Auth");
        }, 2000);
      } catch (error) {
        console.warn(error);
      }
    }

    loadApp();
  }, []);

  if (!isReady) {
    return <Splash />;
  }
}
