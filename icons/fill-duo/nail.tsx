import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nail({
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
          d="M10.6579 2.823C10.8082 2.80365 10.9658 2.82955 11.1094 2.90707C12.8726 3.86226 14 5.74309 14 7.75V15.75C14 16.1642 13.6642 16.5 13.25 16.5H4.75C4.33579 16.5 4 16.1642 4 15.75V7.75C4 5.6601 5.16521 3.84495 6.87783 2.91405C6.98775 2.8543 7.11088 2.823 7.236 2.823H10.6579Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 14.25C6.5 13.8358 6.83579 13.5 7.25 13.5H10.75C11.1642 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.1642 15 10.75 15H7.25C6.83579 15 6.5 14.6642 6.5 14.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.912 1.0161C7.3939 0.764445 8.10902 0.50101 9 0.50101C9.71514 0.50101 10.4319 0.677283 11.0673 1.00473C11.658 1.31001 12 1.92427 12 2.556V8C12 9.51921 10.7692 10.75 9.25 10.75H8.75C7.23079 10.75 6 9.51921 6 8V2.552C6 1.9392 6.32096 1.32466 6.912 1.0161Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Nail;
