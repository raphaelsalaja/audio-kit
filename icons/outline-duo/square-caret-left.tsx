import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareCaretLeft({
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
          d="M2.75 4.75L2.75 13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 4.75L2.75 13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.84301 9.62101L9.83001 11.643C10.328 11.98 11 11.623 11 11.022V6.97801C11 6.37701 10.328 6.02001 9.83001 6.35701L6.84301 8.37901C6.40401 8.67601 6.40401 9.32401 6.84301 9.62101Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SquareCaretLeft;
