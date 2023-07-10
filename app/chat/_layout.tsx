import { Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat } from "stream-chat-expo";

const API_KEY = "t77txc29cy35";
const client = StreamChat.getInstance("t77txc29cy35");

export default function ChatLayout() {
  useEffect(() => {
    // connect authenticated user
    const connectUser = async () => {
      await client.connectUser(
        {
          id: "boo",
          name: "John Doe",
          image: "https://getstream.io/random_svg/?name=John",
        },
        client.devToken("boo")
      );

      const channel = client.channel("livestream", "public", {
        name: "public",
      });
      await channel.create();
    };
    connectUser();
    return () => {
      client.disconnectUser();
    };
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Messages" }} />
        </Stack>
      </Chat>
    </OverlayProvider>
  );
}
