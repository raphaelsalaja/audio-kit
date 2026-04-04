import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShieldSlash({
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
          d="M14.4921 3.50787L9.305 1.848C9.106 1.785 8.893 1.785 8.695 1.848L3.445 3.528C3.031 3.66 2.75 4.045 2.75 4.48V11C2.75 12.1011 3.36854 13.0289 4.21645 13.7835L14.4921 3.50787Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.28239 14.8996L14.71 6.47195L15.25 11C15.25 14.03 10.566 15.748 9.308 16.155C9.105 16.221 8.895 16.221 8.692 16.155C8.19767 15.9951 7.34266 15.4644 6.28239 14.8996Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.216 13.784C3.368 13.029 2.75 12.101 2.75 11V4.48C2.75 4.045 3.031 3.66 3.445 3.528L8.695 1.848C8.893 1.785 9.106 1.785 9.305 1.848L14.493 3.508"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.82529 15.417C7.60999 15.781 8.31101 16.0317 8.69211 16.155C8.89511 16.2209 9.10511 16.2209 9.30811 16.155C10.5661 15.748 15.2501 14.03 15.2501 11V6.9922"
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

export default ShieldSlash;
