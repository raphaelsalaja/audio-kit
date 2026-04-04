import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineMinimizeDiagonal2({
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
          d="M15.7803 14.7197L14.1858 13.1252L15.604 11.707C15.795 11.5151 15.897 11.261 15.897 11.0009C15.897 10.872 15.872 10.7419 15.82 10.6169C15.665 10.2419 15.302 10 14.896 10H11C10.449 10 10 10.449 10 11V14.897C10 15.303 10.242 15.666 10.617 15.8211C10.992 15.9762 11.42 15.8912 11.707 15.6041L13.1252 14.1859L14.7197 15.7804C14.8662 15.9269 15.0576 16.0001 15.25 16.0001C15.4424 16.0001 15.6338 15.9269 15.7803 15.7804C16.0733 15.4874 16.0733 15.0126 15.7803 14.7197Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.38301 2.17898C7.00801 2.02398 6.58001 2.10889 6.29301 2.39599L4.87471 3.8142L3.28021 2.21969C2.98721 1.92669 2.51261 1.92669 2.21971 2.21969C1.92681 2.51269 1.92671 2.98731 2.21971 3.28021L3.81421 4.87469L2.39601 6.2929C2.20501 6.4848 2.10301 6.73889 2.10301 6.99899C2.10301 7.12789 2.12801 7.25799 2.18001 7.38299C2.33501 7.75799 2.69801 7.9999 3.10401 7.9999H7.00001C7.55101 7.9999 8.00001 7.5509 8.00001 6.9999V3.1029C8.00001 2.6969 7.75801 2.33408 7.38301 2.17898Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineMinimizeDiagonal2;
