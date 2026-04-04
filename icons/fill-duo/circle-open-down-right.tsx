import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleOpenDownRight({
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
          d="M14.6569 3.3431C11.5379 0.224095 6.4622 0.224095 3.3432 3.3431C0.224202 6.4621 0.224202 11.5378 3.3432 14.6568C6.4622 17.7758 11.5379 17.7758 14.6569 14.6568C17.7759 11.5378 17.7759 6.4621 14.6569 3.3431Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.70191 10.5486C6.28751 10.5486 5.95171 10.8845 5.95171 11.2988C5.95171 11.7131 6.0351 11.6934 6.1709 11.8291C6.3067 11.9648 6.49401 12.049 6.70121 12.0483H11.2974C11.7118 12.0483 12.0476 11.7124 12.0476 11.2981V6.70189C12.0476 6.28749 11.7117 5.9517 11.2974 5.9517C10.8831 5.9517 10.5472 6.28759 10.5472 6.70189V9.4879L4.40311 3.34379C4.11041 3.05109 3.63521 3.05109 3.34241 3.34379C3.04961 3.63649 3.04971 4.11166 3.34241 4.40446L9.4865 10.5486H6.7005H6.70191Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleOpenDownRight;
