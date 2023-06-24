import { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children, Custom }) => {
  const [notification, setNotification] = useState({
    type: "success",
    title: "title of the notification",
    message: "this is the body of the notification",
  });
  const [notificationList, setNotificationList] = useState([]);

  const context = {
    notification,
    createNotification: setNotification,
    notificationList,
    addNotification: setNotificationList,
    Custom,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};
