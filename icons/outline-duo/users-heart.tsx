import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersHeart({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M12 7C13.2426 7 14.25 5.99264 14.25 4.75C14.25 3.50736 13.2426 2.5 12 2.5C11.8942 2.5 10.9401 2.55217 11.0728 2.83374C11.3468 3.41512 11.5 4.06467 11.5 4.75C11.5 5.43664 11.3462 6.08737 11.0712 6.66961C10.9149 7.00044 11.8869 7 12 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.781 15.947C13.919 16.018 14.08 16.018 14.218 15.947C14.947 15.573 17.249 14.217 17.249 12.013C17.253 11.045 16.458 10.256 15.472 10.25C14.879 10.257 14.328 10.551 13.999 11.036C13.67 10.552 13.118 10.258 12.526 10.25C11.541 10.256 10.746 11.044 10.749 12.013C10.749 14.218 13.052 15.573 13.78 15.947H13.781Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7 7C8.24264 7 9.25 5.99264 9.25 4.75C9.25 3.50736 8.24264 2.5 7 2.5C5.75736 2.5 4.75 3.50736 4.75 4.75C4.75 5.99264 5.75736 7 7 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7 7C8.24264 7 9.25 5.99264 9.25 4.75C9.25 3.50736 8.24264 2.5 7 2.5C5.75736 2.5 4.75 3.50736 4.75 4.75C4.75 5.99264 5.75736 7 7 7Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 15.947C13.919 16.018 14.08 16.018 14.218 15.947C14.947 15.573 17.249 14.217 17.249 12.013C17.253 11.045 16.458 10.256 15.472 10.25C14.879 10.257 14.328 10.551 13.999 11.036C13.67 10.552 13.118 10.258 12.526 10.25C11.541 10.256 10.746 11.044 10.749 12.013C10.749 14.218 13.052 15.573 13.78 15.947H13.781Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.3734 9.70409C7.9328 9.58569 7.479 9.50049 7 9.50049C4.855 9.50049 3 10.7295 2.094 12.5205C1.694 13.3115 2.122 14.2773 2.96 14.5684C3.991 14.9266 5.368 15.2515 7 15.2515C7.5762 15.2515 8.1066 15.2002 8.6141 15.1314"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7371 6.97559C11.824 6.98659 11.9101 7.00049 12 7.00049C13.243 7.00049 14.25 5.99339 14.25 4.75049C14.25 3.50759 13.243 2.50049 12 2.50049C11.91 2.50049 11.8239 2.51419 11.7369 2.52519"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default UsersHeart;
