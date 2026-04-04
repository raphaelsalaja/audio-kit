import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gem({
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
          d="M2.269 6.12299L4.673 3.56699C4.864 3.36399 5.131 3.24899 5.411 3.24899H12.589C12.869 3.24899 13.136 3.36399 13.327 3.56699L15.731 6.12299C16.061 6.47399 16.091 7.00799 15.801 7.39299L9.808 15.349C9.405 15.884 8.594 15.884 8.192 15.349L2.199 7.39299C1.909 7.00799 1.939 6.47499 2.269 6.12299Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.05299 6.75H15.951"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.88001 3.25L6.05701 6.75L8.76501 15.723"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.12 3.25L11.943 6.75L9.235 15.723"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.269 6.12299L4.673 3.56699C4.864 3.36399 5.131 3.24899 5.411 3.24899H12.589C12.869 3.24899 13.136 3.36399 13.327 3.56699L15.731 6.12299C16.061 6.47399 16.091 7.00799 15.801 7.39299L9.808 15.349C9.405 15.884 8.594 15.884 8.192 15.349L2.199 7.39299C1.909 7.00799 1.939 6.47499 2.269 6.12299Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Gem;
