import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pen({
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
          d="M2.75 15.25C2.75 15.25 6.349 14.682 7.296 13.735C8.243 12.788 14.623 6.408 14.623 6.408C15.46 5.571 15.46 4.214 14.623 3.378C13.786 2.541 12.429 2.541 11.593 3.378C11.593 3.378 5.213 9.758 4.266 10.705C3.319 11.652 2.751 15.251 2.751 15.251L2.75 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
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

export default Pen;
