import { ActivityIndicator, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Channel as ChannelType } from "stream-chat";
import {
  ChannelList,
  Channel,
  MessageInput,
  MessageList,
  useChatContext,
} from "stream-chat-expo";

export default function ChannelScreen() {
  const [channel, setChannel] = useState<ChannelType | null>(null);
  const { client } = useChatContext();

  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchChannel = async () => {
      const _id = typeof id === "string" ? id : id[0];
      const channels = await client.queryChannels({ id: { $eq: _id } });
      //   await channel.watch();
      setChannel(channels[0]);
    };
    fetchChannel();
  }, [id]);
  if (!channel) return <ActivityIndicator />;
  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
}
