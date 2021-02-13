import { useState } from 'react';

import { auth } from '../lib/firebase';
import { createUserDocument } from '../lib/utils/createUserDocument';

export const Signup = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            if (user) {
                const userDoc = await createUserDocument(user, { displayName });
                console.log(userDoc);
            }
        } catch (error) {
            console.error(error);
        }

        setDisplayName('');
        setEmail('');
        setPassword('');
    };

    const handleReset = () => {
        setDisplayName('');
        setEmail('');
    };

    return (
        <form className="w-1/2 p-3" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex mb-3">
                <label htmlFor="display-name" className="w-1/4">
                    Display Name
                </label>
                <input
                    name="display-name"
                    type="text"
                    onChange={(e) => setDisplayName(e.currentTarget.value)}
                    value={displayName}
                    className="border border-gray-400 rounded px-2 py-1 w-3/4"
                    required
                />
            </div>

            <div className="flex mb-3">
                <label htmlFor="email" className="w-1/4">
                    Email
                </label>
                <input
                    name="email"
                    type="text"
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    value={email}
                    className="border border-gray-400 rounded px-2 py-1 w-3/4"
                    required
                />
            </div>

            <div className="flex">
                <label htmlFor="password" className="w-1/4">
                    Password
                </label>
                <input
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    value={password}
                    className="border border-gray-400 rounded px-2 py-1 w-3/4"
                    required
                />
            </div>

            <div className="flex mt-3 mb-3">
                <button
                    type="submit"
                    className="bg-blue-400 hover:bg-green-400 px-1 py-2 w-full mr-3"
                >
                    Submit
                </button>
                <button
                    type="button"
                    onClick={handleReset}
                    className="bg-red-400 hover:bg-red-600 px-1 py-2 w-full"
                >
                    Clear
                </button>
            </div>
        </form>
    );
};
