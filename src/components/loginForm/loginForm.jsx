import { useState } from "react";
import { useForm } from "react-hook-form";
import { ClosedEyeIcon, OpenEyeIcon } from "../iconsProvider/iconsProvider";
import { RequirementsList } from "./requirementsList/requirementsList";
import { SamePasswordAlert } from "./samePasswordAlert/samePasswordAlert";
import "./loginForm.css";

const FORM_TYPES = Object.freeze({
  email: "email",
  password: "password",
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      [FORM_TYPES.email]: "",
      [FORM_TYPES.password]:"",
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (true) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        console.log(data);
      }, 2000);
    }
    // reset({
    //   currentPassword: "",
    //    newPassword: "",
    //    newPasswordConfirmation: "",
    // })
    // reset();
  });

  return (
    <form onSubmit={onSubmit} className="RecoveryPasswordForm">
      <div className="form-field">
        <label>email:</label>
        <input
          type="email"
          name={FORM_TYPES.email}
          placeholder=""
          {...register(FORM_TYPES.email, {
            required: {
              value: true,
              message: "Email requerido",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        {/* <span>{"Esa no es la contraseña actual"}</span> */}
      </div>

      <div className="form-field">
        <label>Contraseña:</label>
        <div className="password-container">
          <input
            type={`${showPassword ? "text" : "password"}`}
            name={FORM_TYPES.password}
            placeholder={`${showPassword ? "" : "********"}`}
            autoComplete="off"
            {...register(FORM_TYPES.password, {
              required: {
                value: true,
                message: "Contraseña requerida",
              },
            })}
          />
          {showPassword ? (
            <ClosedEyeIcon onClick={togglePasswordVisibility} />
          ) : (
            <OpenEyeIcon onClick={togglePasswordVisibility} />
          )}
        </div>
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Ingresando..." : "Ingresar"}
      </button>
      {/* <pre style={{ width: "400px" }}>{JSON.stringify(watch(), null, 2)}</pre> */}
    </form>
  );
};
