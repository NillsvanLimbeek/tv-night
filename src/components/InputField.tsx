import { InputHTMLAttributes, ReactNode } from 'react';

import { RefReturn } from '../lib/types';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    register: ({ required }: { required?: boolean }) => RefReturn;
    children?: ReactNode;
};

export const InputField = ({ label, register, type, name, required, children }: InputProps) => (
    <div className="flex mb-3">
        {label && <label className="w-1/3 mr-2 font-light tracking-wide">{label}</label>}

        <div className="flex flex-col w-full">
            <input
                className="border border-gray-500 px-2 py-1 rounded-sm"
                ref={register({ required })}
                type={type}
                name={name}
            />

            {children}
        </div>
    </div>
);
