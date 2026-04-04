import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineExpandDiagonal({
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
          d="M7.7803 10.2197C7.4873 9.92669 7.01269 9.92669 6.71979 10.2197L5.12531 11.8142L3.707 10.396C3.42 10.1089 2.992 10.0239 2.617 10.179C2.242 10.3341 2 10.6971 2 11.1031V15.0001C2 15.5511 2.449 16.0001 3 16.0001H6.896C7.302 16.0001 7.66501 15.7582 7.82001 15.3832C7.87201 15.2582 7.897 15.1281 7.897 14.9992C7.897 14.7392 7.795 14.485 7.604 14.2931L6.18579 12.8749L7.7803 11.2804C8.0733 10.9874 8.0733 10.5126 7.7803 10.2197Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15 2H11.104C10.698 2 10.335 2.2419 10.18 2.6169C10.128 2.7419 10.103 2.872 10.103 3.0009C10.103 3.2609 10.205 3.5151 10.396 3.707L11.8143 5.12521L10.2198 6.7197C9.92678 7.0127 9.92678 7.48731 10.2198 7.78021C10.3663 7.92671 10.5577 7.99991 10.7501 7.99991C10.9425 7.99991 11.1339 7.92671 11.2804 7.78021L12.8749 6.1857L14.2931 7.60391C14.5801 7.89101 15.0081 7.97599 15.3831 7.82089C15.7581 7.66579 16.0001 7.30279 16.0001 6.89679V2.9998C16.0001 2.4488 15.551 2 15 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineExpandDiagonal;
