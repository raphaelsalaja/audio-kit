import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AxisY({
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
          d="M16.25 10H7.99999V2C7.99999 1.586 7.66399 1.25 7.24999 1.25C6.83599 1.25 6.49999 1.586 6.49999 2V10.439L1.21999 15.72C0.926994 16.013 0.926994 16.488 1.21999 16.781C1.36599 16.927 1.55799 17.001 1.74999 17.001C1.94199 17.001 2.13399 16.928 2.27999 16.781L7.55999 11.501H16.249C16.663 11.501 16.999 11.165 16.999 10.751C16.999 10.337 16.663 10.001 16.249 10.001L16.25 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.725 4.98699C9.533 4.98699 9.341 4.91399 9.195 4.76699L7.24999 2.82299L5.30499 4.76699C5.01199 5.05999 4.537 5.05999 4.244 4.76699C3.951 4.47399 3.951 3.99899 4.244 3.70599L6.71999 1.23199C7.01299 0.938988 7.488 0.938988 7.781 1.23199L10.256 3.70699C10.549 3.99999 10.549 4.475 10.256 4.768C10.11 4.914 9.91799 4.988 9.72599 4.988L9.725 4.98699Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AxisY;
