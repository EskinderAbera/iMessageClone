import { View, Text } from "react-native";
import React from "react";
import { User } from "../context/auth";

const UserListItem = ({ user }: { user: User }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        margin: 5,
        padding: 10,
        borderRadius: 5,
        marginVertical: 3,
      }}
    >
      <Text>{user.name}</Text>
    </View>
  );
};

export default UserListItem;
