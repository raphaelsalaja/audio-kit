import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareMoveObjUpLeft({
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
          d="M9 10.75V16H13.25C14.7666 16 16 14.7666 16 13.25V9H10.75C9.7852 9 9 9.7852 9 10.75Z"
          fill={fill}
        />
        <path
          d="M6 8.25V7.06055L7.4697 8.53015C7.7627 8.82315 8.2373 8.82315 8.5302 8.53015C8.8231 8.23715 8.8232 7.76263 8.5302 7.46973L7.0605 6H8.25C8.6641 6 9 5.6641 9 5.25C9 4.8359 8.6641 4.5 8.25 4.5H5.25C4.8359 4.5 4.5 4.8359 4.5 5.25V8.25C4.5 8.6641 4.8359 9 5.25 9C5.6641 9 6 8.6641 6 8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareMoveObjUpLeft;
