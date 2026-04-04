import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vault4({
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
          d="M4.25 2.75H13.75C14.8546 2.75 15.75 3.64543 15.75 4.75V13.25C15.75 14.3546 14.8546 15.25 13.75 15.25H4.25C3.14543 15.25 2.25 14.3546 2.25 13.25V4.75C2.25 3.64543 3.14543 2.75 4.25 2.75ZM8.75 5.25H13.25V7.75H8.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.25 13.5C12.6642 13.5 13 13.1642 13 12.75C13 12.3358 12.6642 12 12.25 12C11.8358 12 11.5 12.3358 11.5 12.75C11.5 13.1642 11.8358 13.5 12.25 13.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.75 13.5C10.1642 13.5 10.5 13.1642 10.5 12.75C10.5 12.3358 10.1642 12 9.75 12C9.33579 12 9 12.3358 9 12.75C9 13.1642 9.33579 13.5 9.75 13.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 11C12.6642 11 13 10.6642 13 10.25C13 9.83579 12.6642 9.5 12.25 9.5C11.8358 9.5 11.5 9.83579 11.5 10.25C11.5 10.6642 11.8358 11 12.25 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.75 11C10.1642 11 10.5 10.6642 10.5 10.25C10.5 9.83579 10.1642 9.5 9.75 9.5C9.33579 9.5 9 9.83579 9 10.25C9 10.6642 9.33579 11 9.75 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.25 9H3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 5.75H3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 12.25H3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 2.75H4.25C3.14543 2.75 2.25 3.64543 2.25 4.75V13.25C2.25 14.3546 3.14543 15.25 4.25 15.25H13.75C14.8546 15.25 15.75 14.3546 15.75 13.25V4.75C15.75 3.64543 14.8546 2.75 13.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 15.25V17"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 15.25V17"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 5.25H8.75V7.75H13.25V5.25Z"
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

export default Vault4;
