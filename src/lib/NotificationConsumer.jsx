import { useNotification } from "../hook/useNotification";
import { Notification } from "./Notification";

export const NotificationConsumer = () => {
  const { notificationList, Custom } = useNotification();

  return (
    <div className="notification-container">
      {notificationList.map((notification, i) => (
        <Notification notification={notification} Custom={Custom} key={i} />
      ))}
    </div>
  );
};
