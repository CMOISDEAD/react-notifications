import "./styles.css";
import { useState, useEffect } from "react";

const NotificationBox = ({ id, type, title, message, onClick }) => {
  return (
    <div className={`notification notification-${type}`} onClick={onClick}>
      <p className="notification-title">
        {title} <span style={{ fontSize: "11px" }}>id: {id}</span>
      </p>
      <p className="notification-message">{message}</p>
    </div>
  );
};

export const Notification = ({ notification, Custom }) => {
  const [isVisible, setIsVisible] = useState(true);
  let Box = NotificationBox;

  if (Custom) Box = Custom;

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

  return isVisible && <Box {...notification} onClick={handleClick} />;
};
