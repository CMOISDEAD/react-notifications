import { ReactElement, createContext, useState } from "react";
import { ContextType } from "../types";

const defaultContext: ContextType = {
  notificationList: [],
  addNotification: () => {},
  Custom: null,
};

export const NotificationContext = createContext(defaultContext);

export const NotificationProvider = ({
  children,
  Custom = null,
}: {
  children: ReactElement[];
  Custom?: ReactElement | null;
}) => {
  const [notificationList, setNotificationList] = useState([]);

  const context = {
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
