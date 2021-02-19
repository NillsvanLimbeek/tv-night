import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { auth, signInwithGoogle } from '../lib/firebase';
import { useUsersState } from '../lib/context';

import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { SocialMediaButtons } from '../components/SocialMediaButtons';

type InputFields = {
    email: string;
    password: string;
};

export const SignIn = () => {
    const { register, handleSubmit } = useForm<InputFields>();
    const { user } = useUsersState();
    const history = useHistory();

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [user, history]);

    const onSubmit = async ({ email, password }: InputFields) => {
        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);

            if (user) {
                history.push('/');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="h-full w-full flex items-center">
            <div className="flex-grow-0 flex-shrink-0 mx-auto border border-gray-200 px-7 py-10 shadow-md">
                <h1 className="text-4xl mb-6 font-light text-gray-800">Sign In</h1>

                <div className="border-b border-gray-300 pb-5 mb-10">
                    <h3 className="mb-5 font-light border-l-2 border-cyan-400 pl-3 text-gray-800">
                        Sign in with
                    </h3>

                    <SocialMediaButtons google={() => signInwithGoogle()} />
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
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
                            No account?
                            <Link to="/signup" className="text-cyan-500 underline ml-1">
                                Sign up
                            </Link>
                        </p>
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
