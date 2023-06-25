import { FC } from "react";
import { useNotification } from "../lib";

interface Props {
  custom: {
    useCustom: boolean;
    setUseCustom: Function;
  };
}

export const Buttons: FC<Props> = ({ custom }) => {
  const { showNotification, wipeNotifications } = useNotification();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    const newNotification = {
      id: 0,
      type: name,
      title: `${name} type notification`,
      message: `notification of type ${name}`,
    };

    showNotification(newNotification);
  };

  const types = ["success", "error", "warning", "info", "soon"];

  return (
    <div className="button-group">
      {types.map((type, i) => (
        <button onClick={handleClick} name={type} key={i}>
          {type.toUpperCase()}
        </button>
      ))}
      <button onClick={wipeNotifications} style={{ background: "red" }}>
        Wipe History
      </button>
      <button
        onClick={() => custom.setUseCustom(!custom.useCustom)}
        style={{
          border: "1px solid",
          borderColor: custom.useCustom ? "green" : "black",
        }}
      >
        Toggle custom component
      </button>
    </div>
  );
};
