import { ScrollView, Text } from "react-native";

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        padding: 16,
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 32 }}>Hello krystof</Text>
    </ScrollView>
  );
}
