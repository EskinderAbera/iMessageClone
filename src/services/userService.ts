import { Alert } from "react-native";
import { API_URL } from "../config";
import { User } from "../context/auth";

export const login = async (username: string): Promise<User | null> => {
  const res = await fetch(`${API_URL}login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  });
  if (res.status !== 200) {
    Alert.alert("Error", "Something went wrong");
    return null;
  } else {
    return await res.json();
  }
};
