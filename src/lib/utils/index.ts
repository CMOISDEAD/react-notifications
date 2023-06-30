import { SuccesSvg } from "../components/icons/SuccesSvg";
import { InfoSvg } from "../components/icons/InfoSvg";
import { ErrorSvg } from "../components/icons/ErrorSvg";
import { WarningSvg } from "../components/icons/WarningSvg";

export const checkIcon = (type: string) => {
  if (type === "success") {
    return SuccesSvg;
  } else if (type === "info") {
    return InfoSvg;
  } else if (type === "error") {
    return ErrorSvg;
  } else if (type === "warning") {
    return WarningSvg;
  }
  return null;
};
