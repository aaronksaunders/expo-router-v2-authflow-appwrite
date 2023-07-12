import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useAuth } from "../context/auth-supabase";

export default function TabTwoScreen() {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={{marginTop:32, marginBottom: 16, fontWeight: 'bold', fontSize : 18}}>User Information</Text>
      {/* <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" /> */}

      <Text>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
