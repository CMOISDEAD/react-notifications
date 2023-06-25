import { MouseEventHandler, ReactElement } from "react";

export interface NotificationType {
  id: number;
  type: string;
  title: string;
  message: string;
  onClick?: MouseEventHandler;
}

export interface ContextType {
  notificationList: NotificationType[];
  addNotification: Function;
  Custom: ReactElement | null;
}
