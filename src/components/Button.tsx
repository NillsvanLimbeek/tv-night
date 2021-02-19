import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export const Button = (props: Props) => {
    return (
        <button
            {...props}
            className={
                !props.disabled
                    ? `bg-cyan-500 px-5 py-2 rounded-sm text-white shadow font-light hover:bg-cyan-600 transition-colors duration-200`
                    : `bg-gray-300 px-5 py-2 rounded-sm text-white shadow font-light cursor-not-allowed`
            }
        >
            {props.children}
        </button>
    );
};
