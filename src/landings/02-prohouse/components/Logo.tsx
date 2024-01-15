import { ComponentProps, HTMLAttributes } from 'react'

export default function Logo(props: HTMLAttributes<SVGElement>) {
    return (
        <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M5.00128 8.25V18C5.00128 18.5523 5 28 5 28H11.5C11.5 28 11.4299 18.5523 11.4299 18V14H16.5727V18C16.5727 18.5523 17.0204 19 17.5727 19H22.0013C22.5536 19 23.0013 18.5523 23.0013 18V8.25C23.0013 7.93524 22.8531 7.63885 22.6013 7.45L14.0013 1L5.40128 7.45C5.14947 7.63885 5.00128 7.93524 5.00128 8.25Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
