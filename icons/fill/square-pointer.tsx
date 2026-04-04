import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquarePointer({
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
          d="M17.296 11.57L10.442 9.07C10.045 8.9201 9.61402 9.02011 9.31602 9.31011C9.01702 9.61001 8.92102 10.0401 9.06602 10.44L11.57 17.2901C11.725 17.72 12.128 18.0001 12.577 18.0001H12.599C13.058 17.9901 13.459 17.69 13.599 17.2501L14.485 14.49L17.256 13.6C17.691 13.46 17.99 13.0601 18 12.6C18.01 12.14 17.727 11.73 17.296 11.57Z"
          fill={secondaryfill}
        />
        <path
          d="M8.4268 16H4.75C3.2334 16 2 14.7666 2 13.25V4.75C2 3.2334 3.2334 2 4.75 2H13.25C14.7666 2 16 3.2334 16 4.75V8.4248C16 8.8389 15.6641 9.1748 15.25 9.1748C14.8359 9.1748 14.5 8.8389 14.5 8.4248V4.75C14.5 4.0605 13.9395 3.5 13.25 3.5H4.75C4.0605 3.5 3.5 4.0605 3.5 4.75V13.25C3.5 13.9395 4.0605 14.5 4.75 14.5H8.4268C8.8409 14.5 9.1768 14.8359 9.1768 15.25C9.1768 15.6641 8.8409 16 8.4268 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquarePointer;
