import { View, Text } from "react-native";

export function ExpensesSummary({ expenses, periodName }) {
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}
