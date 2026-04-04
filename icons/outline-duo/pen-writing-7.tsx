import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenWriting7({
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
          d="M3.75 15.25C3.75 15.25 7.349 14.682 8.296 13.735C9.243 12.788 15.623 6.408 15.623 6.408C16.46 5.571 16.46 4.214 15.623 3.378C14.786 2.541 13.429 2.541 12.593 3.378C12.593 3.378 6.213 9.758 5.266 10.705C4.319 11.652 3.751 15.251 3.751 15.251L3.75 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 15.25C3.75 15.25 7.349 14.682 8.296 13.735C9.243 12.788 15.623 6.408 15.623 6.408C16.46 5.571 16.46 4.214 15.623 3.378C14.786 2.541 13.429 2.541 12.593 3.378C12.593 3.378 6.213 9.758 5.266 10.705C4.319 11.652 3.751 15.251 3.751 15.251L3.75 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 2.75H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 6.25H1.75"
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

export default PenWriting7;
