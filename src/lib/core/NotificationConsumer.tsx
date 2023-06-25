import { useNotification } from "../hooks/";
import { Notification } from "../components/";
import { FC } from "react";
import { NotificationType } from "../types";

interface Props {
  Custom: FC<NotificationType> | false;
}

export const NotificationConsumer: FC<Props> = ({ Custom }) => {
  const { notificationList } = useNotification();

  return (
    <div className="notification-container">
      {notificationList.map((notification, i) => (
        <Notification notification={notification} Custom={Custom} key={i} />
      ))}
    </div>
  );
};
