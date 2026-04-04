import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AxisZ({
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
          d="M16.25 10H7.99999V1.75C7.99999 1.336 7.66399 1 7.24999 1C6.83599 1 6.49999 1.336 6.49999 1.75V10.439L1.46999 15.47C1.17699 15.763 1.17699 16.238 1.46999 16.531C1.61599 16.677 1.80799 16.751 1.99999 16.751C2.19199 16.751 2.38399 16.678 2.52999 16.531L7.55999 11.501H16.249C16.663 11.501 16.999 11.165 16.999 10.751C16.999 10.337 16.663 10.001 16.249 10.001L16.25 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.25 17H1.75C1.336 17 1 16.664 1 16.25V12.75C1 12.336 1.336 12 1.75 12C2.164 12 2.5 12.336 2.5 12.75V15.5H5.25C5.664 15.5 6 15.836 6 16.25C6 16.664 5.664 17 5.25 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AxisZ;
