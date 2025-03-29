// import { Button } from "@/components/Button";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { Typo } from "@/components/Typo";
// import { auth } from "@/config/firebase";
// import { colors } from "@/constants/theme";
// import { signOut } from "firebase/auth";
import React from "react";
import { StyleSheet } from "react-native";

export default function Home() {
  // const handleLogout = async () => {
  //   await signOut(auth);
  // };

  return (
    <ScreenWrapper>
      <Typo>Home</Typo>
      {/* <Button onPress={handleLogout}>
        <Typo color={colors.black}>Log Out</Typo>
      </Button> */}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
