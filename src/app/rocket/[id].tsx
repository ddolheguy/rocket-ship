import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function RocketScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Rocket {id}</Text>
    </View>
  );
}