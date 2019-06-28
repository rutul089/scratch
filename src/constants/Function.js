import { PermissionsAndroid } from "react-native";
export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location Permission",
        message: "Allow Scratch to access this device's location ? "
      }
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      alert("You can use the location");
    } else {
      alert("Location permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}
