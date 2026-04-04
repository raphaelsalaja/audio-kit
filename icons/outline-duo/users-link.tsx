import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersLink({
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
          d="M12 7C13.2426 7 14.25 5.99264 14.25 4.75C14.25 3.50736 13.2426 2.5 12 2.5C11.9218 2.5 10.9783 2.63614 11.0612 2.80937C11.3425 3.39695 11.5 4.05508 11.5 4.75C11.5 5.44048 11.3445 6.09465 11.0666 6.67937C10.9959 6.82819 11.9204 7 12 7Z"
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
          d="M7 7C8.24264 7 9.25 5.99264 9.25 4.75C9.25 3.50736 8.24264 2.5 7 2.5C5.75736 2.5 4.75 3.50736 4.75 4.75C4.75 5.99264 5.75736 7 7 7Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 7.00049C8.243 7.00049 9.25 5.99309 9.25 4.75049C9.25 3.50789 8.243 2.50049 7 2.50049C5.757 2.50049 4.75 3.50789 4.75 4.75049C4.75 5.99309 5.757 7.00049 7 7.00049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 15.75H11.5C10.5335 15.75 9.75 14.9665 9.75 14V13C9.75 12.0335 10.5335 11.25 11.5 11.25H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 15.75H15.5C16.4665 15.75 17.25 14.9665 17.25 14V13C17.25 12.0335 16.4665 11.25 15.5 11.25H15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.1599 9.62868C7.786 9.54688 7.3989 9.50049 7 9.50049C4.855 9.50049 3 10.7295 2.094 12.5205C1.694 13.3115 2.122 14.2773 2.96 14.5684C3.9773 14.9217 5.334 15.24 6.9377 15.2486"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 13.5H14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7371 6.97559C11.824 6.98659 11.9101 7.00049 12 7.00049C13.243 7.00049 14.25 5.99339 14.25 4.75049C14.25 3.50759 13.243 2.50049 12 2.50049C11.91 2.50049 11.8239 2.51418 11.7369 2.52518"
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

export default UsersLink;
