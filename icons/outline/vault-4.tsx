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
          d="M11.75 13C12.1642 13 12.5 12.664 12.5 12.25C12.5 11.836 12.1642 11.5 11.75 11.5C11.3358 11.5 11 11.836 11 12.25C11 12.664 11.3358 13 11.75 13Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M9.25 13C9.6642 13 10 12.664 10 12.25C10 11.836 9.6642 11.5 9.25 11.5C8.8358 11.5 8.5 11.836 8.5 12.25C8.5 12.664 8.8358 13 9.25 13Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M11.75 10.5C12.1642 10.5 12.5 10.164 12.5 9.75C12.5 9.336 12.1642 9 11.75 9C11.3358 9 11 9.336 11 9.75C11 10.164 11.3358 10.5 11.75 10.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M9.25 10.5C9.6642 10.5 10 10.164 10 9.75C10 9.336 9.6642 9 9.25 9C8.8358 9 8.5 9.336 8.5 9.75C8.5 10.164 8.8358 10.5 9.25 10.5Z"
          fill={secondaryfill}
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
          d="M13.75 2.75H4.25C3.1454 2.75 2.25 3.645 2.25 4.75V13.25C2.25 14.355 3.1454 15.25 4.25 15.25H13.75C14.8546 15.25 15.75 14.355 15.75 13.25V4.75C15.75 3.645 14.8546 2.75 13.75 2.75Z"
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
          d="M12.75 5.75H8.25V7.25H12.75V5.75Z"
          fill={secondaryfill}
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Vault4;
