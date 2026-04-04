import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDollar({
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
          d="M9 16.25C13.0041 16.25 16.25 13.004 16.25 9C16.25 4.996 13.0041 1.75 9 1.75C4.9959 1.75 1.75 4.996 1.75 9C1.75 13.004 4.9959 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 6.25011H8.3748C7.6155 6.25011 7 6.86561 7 7.62491C7 8.38421 7.6155 9.00011 8.3748 9.00011H9.6251C10.3844 9.00011 10.9999 9.61561 10.9999 10.3749C10.9999 11.1342 10.3844 11.7498 9.6251 11.7498H7.2499M8.9999 5.24991V6.25011M8.9999 12.7499V11.7499"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CircleDollar;
