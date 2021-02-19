import React from 'react';

import { Button } from './Button';
import { Google } from './Icons/Google';
import { Facebook } from './Icons/Facebook';
import { Twitter } from './Icons/Twitter';

type Props = {
    google: () => void;
};

export const SocialMediaButtons = ({ google }: Props) => {
    return (
        <div className="grid grid-cols-3 gap-2">
            <Button onClick={google}>
                <div className="flex items-center">
                    <Google fill="#fff" /> <span className="ml-3">Google</span>
                </div>
            </Button>

            <Button disabled>
                <div className="flex items-center">
                    <Facebook fill="#fff" /> <span className="ml-3">Facebook</span>
                </div>
            </Button>

            <Button disabled>
                <div className="flex items-center">
                    <Twitter fill="#fff" /> <span className="ml-3">Twitter</span>
                </div>
            </Button>
        </div>
    );
};
