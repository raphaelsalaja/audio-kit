import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersPin({
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
          d="M12 7C13.2427 7 14.25 5.99264 14.25 4.75C14.25 3.50736 13.2427 2.5 12 2.5C11.9187 2.5 10.9495 2.57311 11.0702 2.8282C11.3458 3.41099 11.5 4.06249 11.5 4.75C11.5 5.43744 11.3458 6.08888 11.0702 6.67163C10.9767 6.86944 11.9175 7 12 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7 7C8.24264 7 9.25 5.99264 9.25 4.75C9.25 3.50736 8.24264 2.5 7 2.5C5.75736 2.5 4.75 3.50736 4.75 4.75C4.75 5.99264 5.75736 7 7 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14 16.5C14 16.5 11.25 14.991 11.25 12.75C11.25 11.231 12.481 10 14 10C15.519 10 16.75 11.231 16.75 12.75C16.75 14.991 14 16.5 14 16.5Z"
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
          d="M14 13.5C14.4142 13.5 14.75 13.1642 14.75 12.75C14.75 12.3358 14.4142 12 14 12C13.5858 12 13.25 12.3358 13.25 12.75C13.25 13.1642 13.5858 13.5 14 13.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14 16.5C14 16.5 11.25 14.991 11.25 12.75C11.25 11.231 12.481 10 14 10C15.519 10 16.75 11.231 16.75 12.75C16.75 14.991 14 16.5 14 16.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7371 6.97559C11.824 6.98659 11.9101 7.00049 12 7.00049C13.243 7.00049 14.25 5.99339 14.25 4.75049C14.25 3.50759 13.243 2.50049 12 2.50049C11.91 2.50049 11.8239 2.5142 11.7369 2.5252"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.0143 9.89793C8.39 9.64723 7.7146 9.50043 7 9.50043C4.855 9.50043 3 10.7294 2.094 12.5204C1.694 13.3114 2.12201 14.2772 2.96001 14.5683C3.99101 14.9265 5.368 15.2514 7 15.2514C7.6298 15.2514 8.20731 15.1928 8.75571 15.1125"
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

export default UsersPin;
