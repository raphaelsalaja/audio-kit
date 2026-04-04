import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartLine2({
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
          d="M2 12.8936V13.25C2 14.7692 3.23079 16 4.75 16H13.25C14.7692 16 16 14.7692 16 13.25V7.22763L11.9673 11.2603C11.4794 11.7482 10.6876 11.7482 10.1997 11.2603L6.91649 7.97714L2 12.8936Z"
          fill={fill}
        />
        <path
          d="M2 4.75C2 3.23079 3.23079 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V5.10632L11.0835 10.0228L7.80032 6.73966C7.31243 6.25177 6.52055 6.25177 6.03266 6.73966L2 10.7723V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SquareChartLine2;
