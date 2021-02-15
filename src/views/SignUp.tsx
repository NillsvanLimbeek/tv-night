import React from 'react';
import { useForm } from 'react-hook-form';

import { InputField } from '../components/InputField';

type InputFields = {
    username: string;
    email: string;
    password: string;
};

export const SignUp = () => {
    const { register, handleSubmit, errors } = useForm<InputFields>();

    const onSubmit = (data: InputFields) => {
        console.log(data);
    };

    return (
        <form className="w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <InputField name="username" label="Username" type="text" register={register} required>
                {errors.username && <span className="text-red-500">Error!</span>}
            </InputField>

            <InputField name="email" label="Email" type="email" register={register} />
            <InputField name="password" label="Password" type="password" register={register} />

            <button className="bg-green-500 px-3 py-2 rounded-sm" type="submit">
                Submit
            </button>
        </form>
    );
};
