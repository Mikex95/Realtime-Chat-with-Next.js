import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic("b3f5514b-66bf-4ab9-b7ef-fe5b0dac4b1b", props.user.username, props.user.secret);
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
