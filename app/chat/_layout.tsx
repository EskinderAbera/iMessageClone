import { Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat } from "stream-chat-expo";
import { useAuth } from "../../src/context/auth";

const API_KEY = "t77txc29cy35";
const client = StreamChat.getInstance("t77txc29cy35");

export default function ChatLayout() {
  const { user } = useAuth();

  useEffect(() => {
    // connect authenticated user
    const connectUser = async () => {
      await client.connectUser(
        {
          id: user.id.toString(),
          name: user.name,
          image: "https://getstream.io/random_svg/?name=John",
        },
        user.streamToken
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
