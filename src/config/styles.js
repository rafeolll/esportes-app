
import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  innerContainer: {
    paddingHorizontal: 20,
    alignSelf: "stretch",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 30,
  },
  titulo:{
    fontWeight: "bold",
    fontSize: 18,
  },
  newsItem: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
},
  button: { marginTop: 12 },
  error: { color: "red" },
});