import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cylinder({
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
          d="M14.25 4.25C14.25 5.35457 11.8995 6.25 9 6.25C6.10051 6.25 3.75 5.35457 3.75 4.25V13.75C3.75 14.8546 6.10051 15.75 9 15.75C11.8995 15.75 14.25 14.8546 14.25 13.75V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 15.75C11.8995 15.75 14.25 14.8546 14.25 13.75C14.25 12.6454 11.8995 11.75 9 11.75C6.10051 11.75 3.75 12.6454 3.75 13.75C3.75 14.8546 6.10051 15.75 9 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 13.75V4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 4.25V13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.25C11.8995 6.25 14.25 5.35457 14.25 4.25C14.25 3.14543 11.8995 2.25 9 2.25C6.10051 2.25 3.75 3.14543 3.75 4.25C3.75 5.35457 6.10051 6.25 9 6.25Z"
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

export default Cylinder;
