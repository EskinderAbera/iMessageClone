import { useRouter } from "expo-router";
import { ChannelList } from "stream-chat-expo";

export default function ChatScreen() {
  const router = useRouter();
  return (
    <ChannelList
      onSelect={(channel) => router.push(`/chat/channel/${channel.id}`)}
    />
  );
}
