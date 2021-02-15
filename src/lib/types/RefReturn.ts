import { RefObject } from 'react';

export type RefReturn =
    | string
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | null
    | undefined;
