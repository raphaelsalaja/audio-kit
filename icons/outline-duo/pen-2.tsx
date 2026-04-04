import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pen2({
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
          d="M13.5606 7.47042L10.5306 4.44042L4.266 10.705C3.32896 11.642 2.76299 15.1756 2.75119 15.2498C2.7504 15.2499 2.75 15.25 2.75 15.25L2.751 15.251C2.751 15.251 2.75106 15.2506 2.75119 15.2498C2.82545 15.238 6.35897 14.672 7.296 13.735L13.5606 7.47042Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.547 4.422L13.578 7.453"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 15.25C2.75 15.25 6.349 14.682 7.296 13.735C8.243 12.788 14.623 6.408 14.623 6.408C15.46 5.571 15.46 4.214 14.623 3.378C13.786 2.541 12.429 2.541 11.593 3.378C11.593 3.378 5.213 9.758 4.266 10.705C3.319 11.652 2.751 15.251 2.751 15.251L2.75 15.25Z"
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

export default Pen2;
