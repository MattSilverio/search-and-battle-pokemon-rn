import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
    lineHeight: 32,
    marginTop: 42,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: theme.colors.gray_200,
    width: 60,
    color: theme.colors.white,
    padding: 8,
    borderRadius: theme.borderRadius.md,
  },
  errorText: {
    color: "red",
    marginBottom: 12,
  },
  text: {
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray_400,
    marginTop: 12,
    marginBottom: 38,
  },
});
