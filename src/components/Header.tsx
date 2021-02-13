import { auth, signInwithGoogle } from '../lib/firebase';
import { User } from '../lib/types';

type Props = {
    user: User | null | undefined;
};

export const Header = ({ user }: Props) => {
    return (
        <header className="border-b border-gray-300 py-2 px-3">
            {user ? (
                <div className="flex justify-between items-center ">
                    <p>{user.displayName}</p>

                    <button
                        className="border border-gray-500 px-2 py-3"
                        onClick={() => auth.signOut()}
                    >
                        Sign out
                    </button>
                </div>
            ) : (
                <button onClick={() => signInwithGoogle()}>Sign in</button>
            )}
        </header>
    );
};
