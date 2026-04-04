import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareMoveObjDownLeft({
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
          d="M10.75 9H16V4.75C16 3.2334 14.7666 2 13.25 2H9V7.25C9 8.2148 9.7852 9 10.75 9Z"
          fill={fill}
        />
        <path
          d="M8.25 12H7.06049L8.53021 10.5303C8.82321 10.2373 8.82321 9.76275 8.53021 9.46985C8.23721 9.17695 7.7626 9.17685 7.4697 9.46985L6 10.9395V9.75C6 9.3359 5.6641 9 5.25 9C4.8359 9 4.5 9.3359 4.5 9.75V12.75C4.5 13.1641 4.8359 13.5 5.25 13.5H8.25C8.6641 13.5 9 13.1641 9 12.75C9 12.3359 8.6641 12 8.25 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareMoveObjDownLeft;
