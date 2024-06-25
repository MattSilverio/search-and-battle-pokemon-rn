import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: theme.colors.gray_200,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.yellow_500,
  },
  titleContainer: {
    marginRight: 10,
  },
  name: {
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.bold,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.colors.white,
  },
  subcontainer: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
  },
});
