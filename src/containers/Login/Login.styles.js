import { StyleSheet } from "react-native";
import Colors from '../../globals/colors';

export default styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.tertiaryColor,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  loginLabel: {
    backgroundColor: "transparent",
    fontSize: 22,
    color: Colors.quaternaryColor,
    width: "85%",
    textAlign: "center"
  },
  formLabel: {
    textAlign:"left",
    marginRight: "auto",
    color: Colors.quinaryColor,
    fontWeight: "200",
  },
  valueContainer: {
    width: "85%",
  },
  dropDownContainer: {
    marginTop: "10%",
    width: "85%",
    alignItems: "center"
  },
  formInput: {
    width: "100%",
    color: Colors.quaternaryColor,
  },
  dropDown: {
    width: "90%",
    marginBottom: 0,
    marginTop: 0,
  },
  unlockButton: {
    height: 45,
    width: 130,
    marginBottom: 0,
    marginTop: 35,
    backgroundColor: Colors.successButtonColor,
  },
  addUserButton: {
    height: 45,
    width: 130,
    marginBottom: 100,
    marginTop: 10,
    backgroundColor: Colors.linkButtonColor,
  },
  loadingContainer: {
    width: 400,
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingBottom: 0,
    paddingTop: 0,
    marginBottom: 8,
    marginTop: 28
  },
  loadingText: {
    backgroundColor: "transparent",
    // opacity: 0.86,
    fontSize: 22,
    textAlign: "center",
    color: Colors.quaternaryColor,
  },
});
