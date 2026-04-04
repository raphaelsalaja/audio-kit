import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Forklift({
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
          d="M0.75 10.75C0.75 9.64543 1.64543 8.75 2.75 8.75H11.25V13.25H11.2323C11.111 12.4019 10.3816 11.75 9.5 11.75C8.61838 11.75 7.88903 12.4019 7.76772 13.25H4.23228C4.11097 12.4019 3.38162 11.75 2.5 11.75C1.61838 11.75 0.88903 12.4019 0.767722 13.25H0.75V10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.25 13.5V9.036C11.25 8.846 11.223 8.658 11.17 8.476L9.71 3.47C9.586 3.043 9.194 2.75 8.75 2.75H5.75C5.198 2.75 4.75 3.198 4.75 3.75V8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.23099 13.25H7.74999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.176 8.75H2.75C1.645 8.75 0.75 9.645 0.75 10.75V13.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 15.25H14.75C14.198 15.25 13.75 14.802 13.75 14.25V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.5 15.25C3.4665 15.25 4.25 14.4665 4.25 13.5C4.25 12.5335 3.4665 11.75 2.5 11.75C1.5335 11.75 0.75 12.5335 0.75 13.5C0.75 14.4665 1.5335 15.25 2.5 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5 15.25C10.4665 15.25 11.25 14.4665 11.25 13.5C11.25 12.5335 10.4665 11.75 9.5 11.75C8.5335 11.75 7.75 12.5335 7.75 13.5C7.75 14.4665 8.5335 15.25 9.5 15.25Z"
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

export default Forklift;
