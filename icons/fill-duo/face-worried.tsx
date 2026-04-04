import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceWorried({
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
          d="M9 17.0007C4.5889 17.0007 1 13.4118 1 9.0007C1 4.5896 4.5889 1.0007 9 1.0007C13.4111 1.0007 17 4.5896 17 9.0007C17 13.4118 13.4111 17.0007 9 17.0007Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.10301 12.8017C6.25701 12.9557 6.46901 13.0227 6.68601 12.9907C8.21801 12.7517 9.79801 12.7527 11.324 12.9917C11.538 13.0237 11.745 12.9567 11.896 12.8067C12.05 12.6537 12.123 12.4307 12.089 12.2087C11.859 10.6977 10.531 9.55769 9.00001 9.55769C7.46901 9.55769 6.14001 10.6987 5.91101 12.2117C5.87801 12.4277 5.95001 12.6487 6.10301 12.8017Z"
          fill={fill}
        />
        <path
          d="M6 9.0007C6.5523 9.0007 7 8.5527 7 8.0007C7 7.4487 6.5523 7.0007 6 7.0007C5.4477 7.0007 5 7.4487 5 8.0007C5 8.5527 5.4477 9.0007 6 9.0007Z"
          fill={fill}
        />
        <path
          d="M12 9.0007C12.5523 9.0007 13 8.5527 13 8.0007C13 7.4487 12.5523 7.0007 12 7.0007C11.4477 7.0007 11 7.4487 11 8.0007C11 8.5527 11.4477 9.0007 12 9.0007Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceWorried;
