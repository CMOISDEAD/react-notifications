import { FC, useState } from "react";
import { NotificationProvider, NotificationConsumer } from "./lib";
import { NotificationType } from "./lib/types";
import { Buttons } from "./components/Buttons";

const Custom: FC<NotificationType> = ({ title, message, onClick }) => {
  return (
    <div
      className="p-2 m-2 w-72 rounded border bg-neutral-950 border-neutral-700"
      onClick={onClick}
    >
      <p className="font-bold uppercase">{title}</p>
      <p className="text-xs text-neutral-500">{message} with custom skeleton</p>
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
