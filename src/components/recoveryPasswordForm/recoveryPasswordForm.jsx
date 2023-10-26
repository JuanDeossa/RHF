import { useState } from "react";
import { useForm } from "react-hook-form";
import { ClosedEyeIcon, OpenEyeIcon } from "../iconsProvider/iconsProvider";
import { RequirementsList } from "./requirementsList/requirementsList";
import { SamePasswordAlert } from "./samePasswordAlert/samePasswordAlert";
import "./recoveryPasswordForm.css";

const FORM_TYPES = Object.freeze({
  currentPassword: "currentPassword",
  newPassword: "newPassword",
  newPasswordConfirmation: "newPasswordConfirmation",
});

export const RecoveryPasswordForm = () => {
  const [requirements, setRequirements] = useState([
    {
      key: "length",
      regex: /^.{12,}$/,
      message: "Mínimo 12 caracteres",
      ok: false,
    },
    {
      key: "number",
      regex: /[0-9]/,
      message: "Un número (0-9)",
      ok: false,
    },
    {
      key: "upper",
      regex: /[A-Z]/,
      message: "Una mayúscula (A-Z)",
      ok: false,
    },
    {
      key: "specialChar",
      regex: /[!@#\$%\^&\*_]/,
      message: "Un caracter especial o símbolo (%-#)",
      ok: false,
    },
    {
      key: "lower",
      regex: /[a-z]/,
      message: "Una minúscula (a-z)",
      ok: false,
    },
  ]);
  const [showPassword, setShowPassword] = useState({
    [FORM_TYPES.newPassword]: false,
    [FORM_TYPES.newPasswordConfirmation]: false,
  });
  const [samePasswordsAlert, setSamePasswordsAlert] = useState({
    show: false,
    value: null,
  });
  const [showRequirementsAlert, setShowRequirementsAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpenRequirementsAlert = () => {
    setShowRequirementsAlert(true);
  };
  const handleOpenSamePasswordsAlert = () => {
    setSamePasswordsAlert({
      ...samePasswordsAlert,
      show: true,
    });
  };
  const handleValueSamePasswordsAlert = () => {
    const samePasswords =
      watch(FORM_TYPES.newPassword) ===
      watch(FORM_TYPES.newPasswordConfirmation);
    setSamePasswordsAlert({
      ...samePasswordsAlert,
      value: samePasswords,
    });
  };
  const handlePasswordVisibility = (key) => {
    if (key === FORM_TYPES.newPassword) {
      setShowPassword({
        ...showPassword,
        new: !showPassword.new,
      });
    } else {
      setShowPassword({
        ...showPassword,
        newConfirmation: !showPassword.newConfirmation,
      });
    }
  };
  const handleRequirements = () => {
    const value = watch(FORM_TYPES.newPassword);
    const newArr = requirements.map((requirement) => ({
      ...requirement,
      ok: requirement.regex.test(value),
    }));
    setRequirements(newArr);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    const allRequirementsOK = requirements.every(
      (requirement) => requirement.ok
    );
    const samePasswordsOK =
      watch(FORM_TYPES.newPassword) ===
      watch(FORM_TYPES.newPasswordConfirmation);

    if (allRequirementsOK && samePasswordsOK) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
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
        <label>Contraseña actual:</label>
        <input
          type="text"
          name={FORM_TYPES.currentPassword}
          placeholder=""
          {...register(FORM_TYPES.currentPassword, {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
          })}
        />
        {errors.currentPassword && (
          <span>{errors.currentPassword.message}</span>
        )}
        {/* <span>{"Esa no es la contraseña actual"}</span> */}
      </div>

      <div className="form-field">
        <label>Contraseña nueva:</label>
        <div className="password-container">
          <input
            type={`${showPassword.new ? "text" : "password"}`}
            name={FORM_TYPES.newPassword}
            placeholder={`${showPassword.new ? "" : "********"}`}
            onFocus={handleOpenRequirementsAlert}
            {...register(FORM_TYPES.newPassword, {
              required: {
                value: true,
                message: "Contraseña es requerida",
              },
              onChange: () => {
                handleValueSamePasswordsAlert();
                handleRequirements();
              },
            })}
          />
          {showPassword.new ? (
            <ClosedEyeIcon
              onClick={() => handlePasswordVisibility(FORM_TYPES.newPassword)}
            />
          ) : (
            <OpenEyeIcon
              onClick={() => handlePasswordVisibility(FORM_TYPES.newPassword)}
            />
          )}
          <div className="animation">
            {showRequirementsAlert && (
              <RequirementsList requirements={requirements} />
            )}
          </div>
        </div>
        {errors.newPassword && <span>{errors.newPassword.message}</span>}
      </div>

      <div className="form-field">
        <label>Confirma Contraseña nueva:</label>
        <div className="password-container">
          <input
            type={`${showPassword.newConfirmation ? "text" : "password"}`}
            name={FORM_TYPES.newPasswordConfirmation}
            placeholder={`${showPassword.newConfirmation ? "" : "********"}`}
            onFocus={handleOpenSamePasswordsAlert}
            {...register(FORM_TYPES.newPasswordConfirmation, {
              required: {
                value: true,
                message: "Confirmar contraseña es requerida",
              },
              onChange: () => handleValueSamePasswordsAlert(),
            })}
          />
          {showPassword.newConfirmation ? (
            <ClosedEyeIcon
              onClick={() =>
                handlePasswordVisibility(FORM_TYPES.newPasswordConfirmation)
              }
            />
          ) : (
            <OpenEyeIcon
              onClick={() =>
                handlePasswordVisibility(FORM_TYPES.newPasswordConfirmation)
              }
            />
          )}
        </div>
        {samePasswordsAlert.show && samePasswordsAlert.value !== null && (
          <SamePasswordAlert samePasswords={samePasswordsAlert.value} />
        )}
        {errors.newPasswordConfirmation && (
          <span>{errors.newPasswordConfirmation.message}</span>
        )}
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
      {/* <pre style={{ width: "400px" }}>{JSON.stringify(watch(), null, 2)}</pre> */}
    </form>
  );
};
