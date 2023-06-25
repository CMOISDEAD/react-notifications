import { FC, useState } from "react";
import { NotificationProvider, NotificationConsumer } from "./lib";
import { NotificationType } from "./lib/types";
import { Buttons } from "./components/Buttons";

const Custom: FC<NotificationType> = ({ title, message, onClick }) => {
  return (
    <div style={{ borderStyle: "dashed" }} onClick={onClick}>
      <p className="notification-title">{title}</p>
      <p className="notification-message">{message} with custom skeleton</p>
    </div>
  );
};

function App() {
  const [useCustom, setUseCustom] = useState(false);

  return (
    <NotificationProvider>
      <Buttons custom={{ useCustom, setUseCustom }} />
      <NotificationConsumer Custom={useCustom && Custom} />
    </NotificationProvider>
  );
}

export default App;
