import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Egg({
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
          d="M3.20001 10.977C3.20001 5.705 5.778 1.75 9 1.75C12.195 1.75 14.8 5.705 14.8 10.977C14.8 14.272 11.847 16.25 9 16.25C6.153 16.25 3.20001 14.273 3.20001 10.977Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.20001 10.977C3.20001 5.705 5.778 1.75 9 1.75C12.195 1.75 14.8 5.705 14.8 10.977C14.8 14.272 11.847 16.25 9 16.25C6.153 16.25 3.20001 14.273 3.20001 10.977Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.23767 10C6.41477 7.72841 7.19216 6.05831 7.99976 5.26511"
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

export default Egg;
