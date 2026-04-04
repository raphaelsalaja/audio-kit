import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineMinimizeDiagonal({
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
          d="M7.00001 10H3.104C2.698 10 2.33501 10.2419 2.18001 10.6169C2.12801 10.7419 2.10301 10.872 2.10301 11.0009C2.10301 11.2609 2.20501 11.5151 2.39601 11.707L3.81431 13.1252L2.21981 14.7197C1.92681 15.0127 1.92681 15.4873 2.21981 15.7802C2.51281 16.0731 2.9874 16.0732 3.2803 15.7802L4.87481 14.1857L6.29301 15.6039C6.58001 15.891 7.00801 15.976 7.38301 15.8209C7.75801 15.6658 8.00001 15.3028 8.00001 14.8968V10.9998C8.00001 10.4488 7.55101 10 7.00001 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.7803 2.2197C15.6338 2.0732 15.4424 2 15.25 2C15.0576 2 14.8662 2.0732 14.7197 2.2197L13.1252 3.81421L11.707 2.396C11.42 2.1089 10.992 2.02389 10.617 2.17899C10.242 2.33409 10 2.69709 10 3.10309V7.00009C10 7.55109 10.449 8.00009 11 8.00009H14.896C15.302 8.00009 15.665 7.75821 15.82 7.38321C15.872 7.25821 15.897 7.12811 15.897 6.99921C15.897 6.73921 15.795 6.48499 15.604 6.29309L14.1858 4.87491L15.7803 3.2804C16.0733 2.9874 16.0733 2.5126 15.7803 2.2197Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineMinimizeDiagonal;
