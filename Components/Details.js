import { Appbar } from "react-native-paper";
import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../assets/logo.png";

export default function Details() {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#0A0D22",
        zIndex: 0,
      }}
    >
      <StatusBar bgprimary />

      <View
        style={{
          width: 380,
          height: 90,
          paddingLeft: 20,
          paddingTop: 42,
          backgroundColor: "#1D1E33",
        }}
      >
        <Animated.Image
          source={Logo}
          style={{
            width: 33,
            height: 55,
          }}
        ></Animated.Image>
        <Animated.Text
          style={{
            position: "absolute",
            paddingTop: 53,
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
            paddingLeft: 140,
          }}
        >
          Nasdaq
        </Animated.Text>
      </View>

      <View
        style={{
          paddingLeft: 20,
          paddingTop: 30,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
          AAPL
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "700",
            color: "#626371",
          }}
        >
          Apple Inc
        </Text>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "white",
            paddingLeft: 10,
            paddingBottom: 30,
          }}
        >
          145.11
        </Text>
      </View>

      <View
        style={{
          paddingLeft: 15,
          backgroundColor: "#1D1E33",
          width: 380,
          height: 188,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            paddingTop: 15,
            paddingBottom: 20,
          }}
        >
          Statistics
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "700",
            color: "#626371",
          }}
        >
          Close
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          142.01
        </Text>
        <Text
          style={{
            position: "absolute",
            paddingLeft: 150,
            paddingTop: 62,
            fontSize: 12,
            fontWeight: "700",
            color: "#626371",
          }}
        >
          Close
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingTop: 78,

            color: "white",
            position: "absolute",
            paddingLeft: 150,
          }}
        >
          142.01
        </Text>

        <Text
          style={{
            position: "absolute",
            paddingLeft: 285,
            paddingTop: 62,
            fontSize: 12,
            fontWeight: "700",
            color: "#626371",
          }}
        >
          Volumn
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingTop: 78,

            color: "white",
            position: "absolute",
            paddingLeft: 285,
          }}
        >
          11.3b
        </Text>

        <Text
          style={{
            paddingTop: 20,
            fontSize: 12,
            fontWeight: "700",
            color: "#626371",
          }}
        >
          High
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          147.21
        </Text>

        <Text
          style={{
            position: "absolute",
            paddingLeft: 150,
            paddingTop: 124,
            fontSize: 12,
            fontWeight: "700",
            color: "#626371",
          }}
        >
          Low
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingTop: 139,

            color: "white",
            position: "absolute",
            paddingLeft: 150,
          }}
        >
          142.01
        </Text>
      </View>

      <View
        style={{
          height: 20,
        }}
      ></View>

      <View
        style={{
          paddingLeft: 15,
          backgroundColor: "#1D1E33",
          width: 380,
          height: 230,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          About
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: "700",
            color: "#626371",
          }}
        >
          Industry
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "white",
            paddingBottom: 15,
          }}
        >
          Computer Hardware
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: "700",
            color: "#626371",
          }}
        >
          Company
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
          Apple Inc is designs, and matches mobile communication and media
          devices and personal computers, and seils a valerity of related
          software services, accessories, and third-party digital.
        </Text>
      </View>
    </View>
  );
}
