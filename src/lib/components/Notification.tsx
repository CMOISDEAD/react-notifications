import { useState, useEffect, FC } from "react";
import { NotificationType } from "../types";
import { checkIcon } from "../utils";

const NotificationBox: FC<NotificationType> = ({
  id,
  type,
  title,
  onClick,
}: NotificationType) => {
  const Icon = checkIcon(type);
  return (
    <div
      className={`notification animated notification-${type}`}
      onClick={onClick}
      id={`${id}`}
    >
      {Icon ? <Icon /> : ""}
      <p className="notification-title">{title}</p>
    </div>
  );
};

interface Props {
  notification: NotificationType;
  Custom: FC<NotificationType> | false;
}

export const Notification: FC<Props> = ({ notification, Custom }) => {
  const [isVisible, setIsVisible] = useState(true);
  const Box = Custom ? Custom : NotificationBox;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleClick = () => {
    setIsVisible(false);
  };

  return isVisible ? <Box {...notification} onClick={handleClick} /> : null;
};
