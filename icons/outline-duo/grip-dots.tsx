import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GripDots({
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
          d="M9 7.25C9.27614 7.25 9.5 7.02614 9.5 6.75C9.5 6.47386 9.27614 6.25 9 6.25C8.72386 6.25 8.5 6.47386 8.5 6.75C8.5 7.02614 8.72386 7.25 9 7.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 7.25C14.5261 7.25 14.75 7.02614 14.75 6.75C14.75 6.47386 14.5261 6.25 14.25 6.25C13.9739 6.25 13.75 6.47386 13.75 6.75C13.75 7.02614 13.9739 7.25 14.25 7.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 7.25C4.02614 7.25 4.25 7.02614 4.25 6.75C4.25 6.47386 4.02614 6.25 3.75 6.25C3.47386 6.25 3.25 6.47386 3.25 6.75C3.25 7.02614 3.47386 7.25 3.75 7.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 11.75C9.27614 11.75 9.5 11.5261 9.5 11.25C9.5 10.9739 9.27614 10.75 9 10.75C8.72386 10.75 8.5 10.9739 8.5 11.25C8.5 11.5261 8.72386 11.75 9 11.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 11.75C14.5261 11.75 14.75 11.5261 14.75 11.25C14.75 10.9739 14.5261 10.75 14.25 10.75C13.9739 10.75 13.75 10.9739 13.75 11.25C13.75 11.5261 13.9739 11.75 14.25 11.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 11.75C4.02614 11.75 4.25 11.5261 4.25 11.25C4.25 10.9739 4.02614 10.75 3.75 10.75C3.47386 10.75 3.25 10.9739 3.25 11.25C3.25 11.5261 3.47386 11.75 3.75 11.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default GripDots;
