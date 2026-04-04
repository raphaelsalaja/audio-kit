import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ethereum({
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
          d="M9 0.5C9.24528 0.5 9.47506 0.619932 9.6153 0.821156L15.3653 9.07116C15.6021 9.41098 15.5187 9.87845 15.1788 10.1153C14.839 10.3521 14.3716 10.2687 14.1347 9.92884L9 2.56166L3.8653 9.92884C3.62846 10.2687 3.16098 10.3521 2.82116 10.1153C2.48134 9.87845 2.39786 9.41098 2.63471 9.07116L8.38471 0.821156C8.52495 0.619932 8.75473 0.5 9 0.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.65531 9.04301C2.86499 8.77015 3.23346 8.67499 3.54904 8.8122L9 11.1822L14.451 8.8122C14.7665 8.67499 15.135 8.77015 15.3447 9.04301C15.5544 9.31588 15.5515 9.69643 15.3376 9.96605L9.58762 17.216C9.44536 17.3954 9.22895 17.5 9 17.5C8.77105 17.5 8.55464 17.3954 8.41238 17.216L2.66238 9.96605C2.44854 9.69643 2.44562 9.31588 2.65531 9.04301Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Ethereum;
