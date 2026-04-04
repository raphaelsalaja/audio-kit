import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDotRotateClockwise({
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
          d="M14.25 15.75C15.3546 15.75 16.25 14.8546 16.25 13.75C16.25 12.6454 15.3546 11.75 14.25 11.75C13.1454 11.75 12.25 12.6454 12.25 13.75C12.25 14.8546 13.1454 15.75 14.25 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 15.75C15.3546 15.75 16.25 14.8546 16.25 13.75C16.25 12.6454 15.3546 11.75 14.25 11.75C13.1454 11.75 12.25 12.6454 12.25 13.75C12.25 14.8546 13.1454 15.75 14.25 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 16.182C9.673 16.227 9.339 16.25 9 16.25C4.996 16.25 1.75 13.004 1.75 9C1.75 4.996 4.996 1.75 9 1.75C12.031 1.75 14.627 3.61 15.71 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.12 3.30499L15.712 6.24999L12.768 5.84299"
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

export default ArrowDotRotateClockwise;
