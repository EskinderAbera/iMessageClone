import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { User } from "../../src/context/auth";
import { getUsers } from "../../src/services/userService";
import UserListItem from "../../src/components/UserListItem";

export default function newChannel() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserListItem user={item} />}
    />
  );
}
