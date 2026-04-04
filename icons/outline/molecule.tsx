import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Molecule({
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
          d="M13.5 5.5C14.3284 5.5 15 4.8284 15 4C15 3.1716 14.3284 2.5 13.5 2.5C12.6716 2.5 12 3.1716 12 4C12 4.8284 12.6716 5.5 13.5 5.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M4.5 5.25C5.4665 5.25 6.25 4.4665 6.25 3.5C6.25 2.5335 5.4665 1.75 4.5 1.75C3.5335 1.75 2.75 2.5335 2.75 3.5C2.75 4.4665 3.5335 5.25 4.5 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 15.25C15.4665 15.25 16.25 14.4665 16.25 13.5C16.25 12.5335 15.4665 11.75 14.5 11.75C13.5335 11.75 12.75 12.5335 12.75 13.5C12.75 14.4665 13.5335 15.25 14.5 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 16.25C5.4665 16.25 6.25 15.4665 6.25 14.5C6.25 13.5335 5.4665 12.75 4.5 12.75C3.5335 12.75 2.75 13.5335 2.75 14.5C2.75 15.4665 3.5335 16.25 4.5 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5437 4.90201L7.2286 6.89921"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.1056 10.75L13.1232 12.4279"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.59857 13.1465L7.25068 11.132"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.4812 10.5188 6.25 9 6.25C7.4812 6.25 6.25 7.4812 6.25 9C6.25 10.5188 7.4812 11.75 9 11.75Z"
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

export default Molecule;
