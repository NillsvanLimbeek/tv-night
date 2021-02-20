import { auth } from '../lib/firebase';
import { User } from '../lib/types';

import { Button } from './Button';

type Props = {
    user: User | null | undefined;
};

export const Header = ({ user }: Props) => {
    return (
        <header className="border-b border-gray-200 shadow p-3 mb-5">
            {user && (
                <div className="flex justify-between items-center">
                    <p className="font-light">{user.displayName}</p>

                    <Button onClick={() => auth.signOut()}>Sign out</Button>
                </div>
            )}
        </header>
    );
};
