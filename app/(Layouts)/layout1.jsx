import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Layout1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <Image
            source={require("../../assets/images/image.png")}
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.thin_row}>
        <View
          style={[
            styles.item,
            { backgroundColor: "#4fc3f7", overflow: "hidden" },
          ]}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
            }}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
          />
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 16,
              zIndex: 1,
            }}
          >
            Travel
          </Text>
        </View>
        <View
          style={[
            styles.item,
            { backgroundColor: "#81c784", overflow: "hidden" },
          ]}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            }}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
          />
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 16,
              zIndex: 1,
            }}
          >
            Stay
          </Text>
        </View>
        <View
          style={[
            styles.item,
            { backgroundColor: "#ffb74d", overflow: "hidden" },
          ]}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
            }}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
          />
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 16,
              zIndex: 1,
            }}
          >
            Food
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            }}
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.item}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            }}
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            }}
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.item}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            }}
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

export default Layout1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bdeffaff",
  },
  row: {
    flexDirection: "row",
    margin: 10,
    flex: 3,
    width: "100%",
  },
  thin_row: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  item: {
    flex: 1,
    margin: 10,
    backgroundColor: "#77bed0ff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
