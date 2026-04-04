import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Axis({
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
          d="M16.25 10H8V1.75H6.5V10.439L1.22 15.72L2.28 16.78L7.561 11.5H16.25V10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.25 17H1.75C1.336 17 1 16.664 1 16.25V12.75C1 12.336 1.336 12 1.75 12C2.164 12 2.5 12.336 2.5 12.75V15.5H5.25C5.664 15.5 6 15.836 6 16.25C6 16.664 5.664 17 5.25 17Z"
          fill={fill}
        />
        <path
          d="M9.725 4.98699C9.533 4.98699 9.341 4.91399 9.195 4.76699L7.24999 2.82299L5.30499 4.76699C5.01199 5.05999 4.53698 5.05999 4.24398 4.76699C3.95098 4.47399 3.95098 3.99899 4.24398 3.70599L6.71999 1.23199C7.01299 0.938988 7.488 0.938988 7.781 1.23199L10.256 3.70699C10.549 3.99999 10.549 4.475 10.256 4.768C10.11 4.914 9.91801 4.988 9.72601 4.988L9.725 4.98699Z"
          fill={fill}
        />
        <path
          d="M13.763 13.975C13.571 13.975 13.379 13.902 13.233 13.755C12.94 13.462 12.94 12.987 13.233 12.694L15.177 10.749L13.233 8.80398C12.94 8.51098 12.94 8.036 13.233 7.743C13.526 7.45 14.001 7.45 14.294 7.743L16.769 10.218C17.062 10.511 17.062 10.986 16.769 11.279L14.294 13.754C14.148 13.9 13.956 13.974 13.764 13.974L13.763 13.975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Axis;
