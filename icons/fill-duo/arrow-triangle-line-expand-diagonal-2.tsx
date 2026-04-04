import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineExpandDiagonal2({
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
          d="M15.383 10.179C15.008 10.024 14.58 10.1089 14.293 10.396L12.8747 11.8142L11.2802 10.2197C10.9872 9.92669 10.5126 9.92669 10.2197 10.2197C9.92678 10.5127 9.92668 10.9873 10.2197 11.2802L11.8142 12.8747L10.396 14.2929C10.205 14.4848 10.103 14.7389 10.103 14.999C10.103 15.1279 10.128 15.258 10.18 15.383C10.335 15.758 10.698 15.9999 11.104 15.9999H15C15.551 15.9999 16 15.5509 16 14.9999V11.1029C16 10.6969 15.758 10.3341 15.383 10.179Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.7803 6.7197L6.18579 5.12521L7.604 3.707C7.795 3.5151 7.897 3.261 7.897 3.0009C7.897 2.872 7.87201 2.7419 7.82001 2.6169C7.66501 2.2419 7.302 2 6.896 2H3C2.449 2 2 2.449 2 3V6.897C2 7.303 2.242 7.66601 2.617 7.82111C2.992 7.97621 3.42 7.8912 3.707 7.6041L5.12531 6.18591L6.71979 7.7804C6.86629 7.9269 7.05769 8.00009 7.25009 8.00009C7.44249 8.00009 7.6339 7.9269 7.7804 7.7804C8.0734 7.4874 8.0733 7.0126 7.7803 6.7197Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineExpandDiagonal2;
