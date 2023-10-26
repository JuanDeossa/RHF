import { useState } from "react";
import { useForm } from "react-hook-form";
import './recoveryPasswordForm.css'
import { ClosedEyeIcon, IconAlert, IconOk, OpenEyeIcon } from "./iconsProvider/iconsProvider";

export const RecoveryPasswordForm = () => {
    const [showPassword, setShowPassword] = useState({
        new: false,
        newConfirmation: false,
    });
    const [showRequirementsAlert, setShowRequirementsAlert] = useState(false);
    const [samePasswordsAlert, setSamePasswordsAlert] = useState({
        show: false,
        value: null,
    });

    const handleOpenRequirementsAlert = () => {
        setShowRequirementsAlert(true)
    }
    const handleOpenSamePasswordsAlert = () => {
        setSamePasswordsAlert({
            ...samePasswordsAlert,
            show: true,
        })
    }
    const handleValueSamePasswordsAlert = () => {
        const samePasswords = watch("newPassword") === watch("newPasswordConfirmation")
        setSamePasswordsAlert({
            ...samePasswordsAlert,
            value: samePasswords,
        })
    }

    const handlePasswordVisibility = (key) => {
        if (key === "new") {
            setShowPassword({
                ...showPassword,
                new: !showPassword.new
            })
        } else {
            setShowPassword({
                ...showPassword,
                newConfirmation: !showPassword.newConfirmation
            })
        }
    }

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
        console.log(data);
        // reset({
        //   currentPassword: "",
        //    newPassword: "",
        //    newPasswordConfirmation: "",
        // })
        // reset();
    });

    return (
        <form onSubmit={onSubmit} className="RecoveryPasswordForm">

            <div className='form-field'>
                <label>Contraseña actual:</label>
                <input
                    type="text"
                    name="currentPassword"
                    placeholder=""
                    {...register("currentPassword", {
                        required: {
                            value: true,
                            message: "Contraseña es requerida",
                        },
                    })}
                />
                {errors.currentPassword && <span>{errors.currentPassword.message}</span>}
            </div>

            <div className='form-field'>
                <label>Contraseña nueva:</label>
                <div className="password-container">
                    <input
                        type={`${showPassword.new ? "password" : "text"}`}
                        name="newPassword"
                        placeholder="********"
                        onFocus={handleOpenRequirementsAlert}
                        {...register("newPassword", {
                            required: {
                                value: true,
                                message: "Contraseña es requerida",
                            },
                            minLength: {
                                value: 12,
                                message: "- Debe tener almenos 12 caracteres",
                            },
                            pattern: {
                                value: /\d/,
                                message: "- Debe tener un número"
                            },
                            onChange: () => handleValueSamePasswordsAlert()
                        })}
                    />
                    {showPassword.new ?
                        <OpenEyeIcon onClick={() => handlePasswordVisibility("new")} /> :
                        <ClosedEyeIcon onClick={() => handlePasswordVisibility("new")} />
                    }
                    {showRequirementsAlert && <RequirementsList />}
                </div>
                {errors.newPassword && <span>{errors.newPassword.message}</span>}
            </div>

            <div className='form-field'>
                <label>Confirma Contraseña nueva:</label>
                <div className="password-container">
                    <input
                        type={`${showPassword.newConfirmation ? "password" : "text"}`}
                        name="newPasswordConfirmation"
                        placeholder="********"
                        onFocus={handleOpenSamePasswordsAlert}
                        {...register("newPasswordConfirmation", {
                            required: {
                                value: true,
                                message: "Confirmar contraseña es requerida",
                            },
                            onChange: () => handleValueSamePasswordsAlert()
                        })}
                    />
                    {showPassword.newConfirmation ?
                        <OpenEyeIcon onClick={() => handlePasswordVisibility("newConfirmation")} /> :
                        <ClosedEyeIcon onClick={() => handlePasswordVisibility("newConfirmation")} />
                    }
                </div>
                {samePasswordsAlert.show && samePasswordsAlert.value !== null && <SamePasswordAlert samePasswords={samePasswordsAlert.value} />}
                {errors.newPasswordConfirmation && (
                    <span>{errors.newPasswordConfirmation.message}</span>
                )}
            </div>
            <button type="submit">Enviar</button>

            {/* <pre style={{ width: "400px" }}>{JSON.stringify(showAlert, null, 2)}</pre> */}
            <pre style={{ width: "400px" }}>{JSON.stringify(watch(), null, 2)}</pre>
        </form>
    )
}

const RequirementsList = () => {
    return (
        <ul className="requirements-list">
            <li>Mínimo 12 caracteres</li>
            <li>Un número (0-9)</li>
            <li>Una mayúscula (A-Z)</li>
            <li>Un caracter especial o símbolo (%-#)</li>
            <li>Una minúscula (a-z)</li>
        </ul>
    )
}

const SamePasswordAlert = ({ samePasswords }) => {
    return (
        <span
            className="SamePasswordAlert"
            style={{ display: "flex", alignItems: "center", gap: "10px", color: samePasswords ? "#5CE5B4" : "#E54545" }}
        >
            {samePasswords ? <IconOk /> : <IconAlert />}
            {samePasswords ? "Las contraseñas coinciden" : "Las contraseñas no coinciden"}
        </span>
    )
}