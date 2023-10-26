import { IconAlert, IconOk } from "../../iconsProvider/iconsProvider";

export const SamePasswordAlert = ({ samePasswords }) => {
  return (
    <span
      className="SamePasswordAlert"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: samePasswords ? "#5CE5B4" : "#E54545",
      }}
    >
      {samePasswords ? <IconOk /> : <IconAlert />}
      {samePasswords
        ? "Las contraseñas coinciden"
        : "Las contraseñas no coinciden"}
    </span>
  );
};