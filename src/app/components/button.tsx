import { ButtonHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

type buttonColors = 'primary' | 'error' | 'success' | 'warn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    color?: buttonColors;
}

const button = tv({
    base: 'p-2 rounded-md',
    variants: {
        color: {
            primary: 'bg-sky-500 hover:bg-sky-600 disabled:bg-sky-200 disabled:text-sky-400', 
            error: 'bg-red-500 hover:bg-red-600 disabled:bg-red-200 disabled:text-red-400',
            success: 'bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-200 disabled:text-emerald-400',
            warn: 'bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-200 disabled:text-yellow-400',
        },
    },
    defaultVariants: {
        color: 'primary'
    }
})

export default function Button({ text, color, ...rest }: ButtonProps) {
    return (
        <button {...rest} className={button({ color })}>
            { text }
        </button>
    )
}