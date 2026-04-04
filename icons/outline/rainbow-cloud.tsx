import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RainbowCloud({
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
          d="M6.75 11.25V10.25C6.75 9.145 7.645 8.25 8.75 8.25C9.0225 8.25 9.2823 8.3044 9.5191 8.4031"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 11.25V10.25C4 7.627 6.127 5.5 8.75 5.5C9.9704 5.5 11.083 5.9605 11.9246 6.7169"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 11.25V10.25C1.25 6.108 4.608 2.75 8.75 2.75C11.4494 2.75 13.8156 4.1759 15.1363 6.3153"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 9.25C12.903 9.25 11.777 10.144 11.398 11.366C11.194 11.296 10.978 11.25 10.75 11.25C9.645 11.25 8.75 12.146 8.75 13.25C8.75 14.354 9.645 15.25 10.75 15.25H14.25C15.907 15.25 17.25 13.907 17.25 12.25C17.25 10.593 15.907 9.25 14.25 9.25Z"
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

export default RainbowCloud;
