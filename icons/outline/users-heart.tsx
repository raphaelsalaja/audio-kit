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
          d="M8.3734 9.70409C7.9328 9.58569 7.479 9.50049 7 9.50049C4.855 9.50049 3 10.7295 2.094 12.5205C1.694 13.3115 2.122 14.2773 2.96 14.5684C3.991 14.9266 5.368 15.2515 7 15.2515C7.5762 15.2515 8.1066 15.2002 8.6141 15.1314"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 15.9475C13.919 16.0185 14.08 16.0185 14.218 15.9475C14.947 15.5735 17.249 14.2175 17.249 12.0135C17.253 11.0455 16.458 10.2565 15.472 10.2505C14.879 10.2575 14.328 10.5515 13.999 11.0365C13.67 10.5525 13.118 10.2585 12.526 10.2505C11.541 10.2565 10.746 11.0445 10.749 12.0135C10.749 14.2185 13.052 15.5735 13.78 15.9475H13.781Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 7.00049C8.2426 7.00049 9.25 5.99309 9.25 4.75049C9.25 3.50789 8.2426 2.50049 7 2.50049C5.7574 2.50049 4.75 3.50789 4.75 4.75049C4.75 5.99309 5.7574 7.00049 7 7.00049Z"
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
