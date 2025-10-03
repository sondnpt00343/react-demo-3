import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import * as authService from "@/services/auth";

function Register() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "Son",
            lastName: "Dang",
            email: "sondang1234@gmail.com",
            password: "12341234",
            password_confirmation: "12341234",
        },
    });

    const onSubmit = async (data) => {
        try {
            await authService.register(data);
            navigate("/login");
        } catch (error) {
            // Error handle...
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    {...register("firstName", {
                        required: "Vui lòng nhập trường này",
                    })}
                    placeholder="Enter first name..."
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
                <br />
                <input
                    type="text"
                    {...register("lastName", {
                        required: "Vui lòng nhập trường này",
                    })}
                    placeholder="Enter last name..."
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
                <br />
                <input
                    type="text"
                    {...register("email", {
                        required: "Vui lòng nhập trường này",
                    })}
                    placeholder="Enter email..."
                />
                {errors.email && <p>{errors.email.message}</p>}
                <br />
                <input
                    type="password"
                    {...register("password", {
                        required: "Vui lòng nhập trường này",
                    })}
                    placeholder="Enter password..."
                />
                {errors.password && <p>{errors.password.message}</p>}
                <br />
                <input
                    type="password"
                    {...register("password_confirmation", {
                        required: "Vui lòng nhập trường này",
                    })}
                    placeholder="Enter password..."
                />
                {errors.password_confirmation && (
                    <p>{errors.password_confirmation.message}</p>
                )}
                <br />
                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;
