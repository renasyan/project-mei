import { router, Slot, useSegments } from "expo-router";
import { View } from "react-native";
import { AuthProvider, useAuth } from "./ctx";
import "../global.css";
import React, { useEffect } from "react";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  console.log("1");
  //check if user authenticated
  //   useEffect(() => {
  //     if (typeof isAuthenticated === "undefined") return;
  //     if (!isAuthenticated && segments[0] !== "(auth)") {
  //       console.log("2");
  //       router.replace("/(main)/(tabs)");
  //     } else if (isAuthenticated == false) {
  //       console.log("3");
  //       router.replace("/SignIn");
  //     }
  //   }, [isAuthenticated]);

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    if (typeof isAuthenticated === "undefined") return;

    if (!isAuthenticated) {
      // Jika belum autentikasi, arahkan ke SignIn
      console.log("berhasil login");
      router.replace("/(auth)/onboard");
    } else {
      // Jika sudah autentikasi, arahkan ke tab utama
      console.log("berhasil login");
      router.replace("/(main)/(tabs)");
    }
  }, [isAuthenticated]);

  return <Slot />;
};

export default function Layout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}
