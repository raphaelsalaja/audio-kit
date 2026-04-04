import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDotRotateAnticlockwise({
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
          d="M3.75 15.75C4.85457 15.75 5.75 14.8546 5.75 13.75C5.75 12.6454 4.85457 11.75 3.75 11.75C2.64543 11.75 1.75 12.6454 1.75 13.75C1.75 14.8546 2.64543 15.75 3.75 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 15.75C4.85457 15.75 5.75 14.8546 5.75 13.75C5.75 12.6454 4.85457 11.75 3.75 11.75C2.64543 11.75 1.75 12.6454 1.75 13.75C1.75 14.8546 2.64543 15.75 3.75 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.99998 16.182C8.32698 16.227 8.66098 16.25 8.99998 16.25C13.004 16.25 16.25 13.004 16.25 9C16.25 4.996 13.004 1.75 8.99998 1.75C5.96898 1.75 3.37298 3.61 2.28998 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.88 3.30499L2.288 6.24999L5.232 5.84299"
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

export default ArrowDotRotateAnticlockwise;
