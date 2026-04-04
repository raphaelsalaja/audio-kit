import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareMoveObjDownRight({
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
          d="M13.25 2H4.75C3.23122 2 2 3.23122 2 4.75V13.25C2 14.7688 3.23122 16 4.75 16H13.25C14.7688 16 16 14.7688 16 13.25V4.75C16 3.23122 14.7688 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.25 9H2V4.75C2 3.2334 3.2334 2 4.75 2H9V7.25C9 8.2148 8.2148 9 7.25 9Z"
          fill={fill}
        />
        <path
          d="M9.75 12H10.9395L9.46979 10.5303C9.17679 10.2373 9.17679 9.76275 9.46979 9.46985C9.76279 9.17695 10.2374 9.17685 10.5303 9.46985L12 10.9395V9.75C12 9.3359 12.3359 9 12.75 9C13.1641 9 13.5 9.3359 13.5 9.75V12.75C13.5 13.1641 13.1641 13.5 12.75 13.5H9.75C9.3359 13.5 9 13.1641 9 12.75C9 12.3359 9.3359 12 9.75 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareMoveObjDownRight;
