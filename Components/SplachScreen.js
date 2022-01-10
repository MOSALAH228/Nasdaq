import React, { useEffect, useRef } from "react";
import { Animated, View, Image, Text, br, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "../assets/logo.png";
import Details from "./Details";
import Home from "./Home";

const BGcolor = "#1D1E33";

export default function SplachScreen() {
  const edges = useSafeAreaInsets();
  const startAnimation = useRef(new Animated.Value(0)).current;

  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;
  const scaleTitle1 = useRef(new Animated.Value(1)).current;

  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const moveTitle1 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const contentTransition = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(startAnimation, {
          toValue: -Dimensions.get("window").height + (edges.top + 65),
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          toValue: 0.33,
          useNativeDriver: true,
        }),
        Animated.timing(scaleTitle, {
          toValue: 0.85,
          useNativeDriver: true,
        }),
        Animated.timing(scaleTitle1, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          toValue: {
            x: -(Dimensions.get("window").width / 2) + 35,
            y: Dimensions.get("window").height / 2 - 6,
          },
          useNativeDriver: true,
        }),
        Animated.timing(moveTitle, {
          toValue: {
            x: 0,
            y: Dimensions.get("window").height / 2 - 75,
          },
          useNativeDriver: true,
        }),
        Animated.timing(moveTitle1, {
          toValue: {
            x: Dimensions.get("window").width / 2 + 100,
            y: Dimensions.get("window").height / 2 - 340,
          },
          useNativeDriver: true,
        }),
        Animated.timing(contentTransition, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }, 1000);
  }, []);

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          zIndex: 1,
          backgroundColor: BGcolor,
          transform: [{ translateY: startAnimation }],
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Animated.Image
            source={Logo}
            style={{
              width: 100,
              height: 100,
              transform: [
                { translateX: moveLogo.x },
                { translateY: moveLogo.y },
                { scale: scaleLogo },
              ],
              marginTop: 270,
            }}
          ></Animated.Image>
          <Animated.Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
              transform: [{ translateY: moveTitle.y }, { scale: scaleTitle }],
              marginBottom: 180,
            }}
          >
            Nasdaq
          </Animated.Text>

          <Animated.Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "orange",
              transform: [
                { translateX: moveTitle1.x },
                { translateY: moveTitle1.y },
              ],
              marginTop: 40,
            }}
          >
            By
          </Animated.Text>
          <Animated.Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "orange",
              transform: [
                { translateX: moveTitle1.x },
                { translateY: moveTitle1.y },
              ],
              marginBottom: 50,
            }}
          >
            Mohamed Salah
          </Animated.Text>
        </Animated.View>
      </Animated.View>

      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#0A0D22",
          zIndex: 0,
          transform: [{ translateY: contentTransition }],
        }}
      >
        <Home></Home>
      </Animated.View>
    </View>
  );
}
