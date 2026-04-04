import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pointer({
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
          d="M3.47399 2.78401L14.897 6.95801C15.378 7.13401 15.364 7.81901 14.876 7.97601L9.64799 9.64901L7.97499 14.877C7.81899 15.365 7.13299 15.379 6.95699 14.898L2.78399 3.47401C2.62699 3.04401 3.04399 2.62701 3.47399 2.78401Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.47399 2.78401L14.897 6.95801C15.378 7.13401 15.364 7.81901 14.876 7.97601L9.64799 9.64901L7.97499 14.877C7.81899 15.365 7.13299 15.379 6.95699 14.898L2.78399 3.47401C2.62699 3.04401 3.04399 2.62701 3.47399 2.78401Z"
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

export default Pointer;
