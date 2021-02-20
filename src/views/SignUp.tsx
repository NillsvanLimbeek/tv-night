import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { auth, signInwithGoogle } from '../lib/firebase';
import { useUsersState } from '../lib/context';

import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { SocialMediaButtons } from '../components/SocialMediaButtons';
import { createUserDocument } from '../lib/utils';

type InputFields = {
    username: string;
    email: string;
    password: string;
};

export const SignUp = () => {
    const { register, handleSubmit } = useForm<InputFields>();
    const { user } = useUsersState();
    const history = useHistory();

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [history, user]);

    const onSubmit = async ({ email, password, username }: InputFields) => {
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            if (user) {
                await createUserDocument(user, { displayName: username });
                history.push('/');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="h-full w-full flex items-center">
            <div className="flex-grow-0 flex-shrink-0 mx-auto border border-gray-200 px-7 py-10 shadow-md">
                <h1 className="text-4xl mb-6 font-light text-gray-800">Sign Up</h1>

                <div className="border-b border-gray-300 pb-5 mb-10">
                    <h3 className="mb-5 font-light border-l-2 border-cyan-400 pl-3 text-gray-800">
                        Sign up with
                    </h3>

                    <SocialMediaButtons google={() => signInwithGoogle()} />
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        name="username"
                        label="Username"
                        type="text"
                        register={register}
                        required
                    />
                    <InputField
                        name="email"
                        label="Email"
                        type="email"
                        register={register}
                        required
                    />
                    <InputField
                        name="password"
                        label="Password"
                        type="password"
                        register={register}
                        required
                    />

                    <div className="flex items-center justify-between">
                        <p className="text-sm font-light text-gray-800">
                            Already an account?
                            <Link to="/signin" className="text-cyan-500 underline ml-1">
                                Sign in
                            </Link>
                        </p>
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
