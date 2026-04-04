import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowBan({
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
          d="M4.25 6C4.664 6 5 5.66 5 5.25C5 4.84 4.664 4.5 4.25 4.5C3.836 4.5 3.5 4.84 3.5 5.25C3.5 5.66 3.836 6 4.25 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 6C7.164 6 7.5 5.66 7.5 5.25C7.5 4.84 7.164 4.5 6.75 4.5C6.336 4.5 6 4.84 6 5.25C6 5.66 6.336 6 6.75 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 7.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.75V4.75C16.25 3.65 15.355 2.75 14.25 2.75H3.75C2.645 2.75 1.75 3.65 1.75 4.75V13.25C1.75 14.35 2.645 15.25 3.75 15.25H7.8766"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 17.25C15.795 17.25 17.25 15.79 17.25 14C17.25 12.21 15.795 10.75 14 10.75C12.205 10.75 10.75 12.21 10.75 14C10.75 15.79 12.205 17.25 14 17.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.702 16.3L16.292 11.71"
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

export default WindowBan;
