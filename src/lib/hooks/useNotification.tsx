import { useContext } from "react";
import { NotificationContext } from "../core/";
import { NotificationType } from "../types";

export const useNotification = () => {
  const {
    notificationList, // list of notifications
    addNotification, // method to add a new notification to the list
  } = useContext(NotificationContext);

  // create a new notification, and add to notification list
  const showNotification = (newNotification: NotificationType) => {
    newNotification.id = notificationList.length;
    addNotification([...notificationList, newNotification]);
  };

  // clean the notification list
  const wipeNotifications = () => {
    addNotification([]);
  };

  return {
    showNotification,
    notificationList,
    wipeNotifications,
  };
};
