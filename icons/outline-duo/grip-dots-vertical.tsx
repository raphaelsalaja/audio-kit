import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GripDotsVertical({
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
          d="M6.75 9.5C7.02614 9.5 7.25 9.27614 7.25 9C7.25 8.72386 7.02614 8.5 6.75 8.5C6.47386 8.5 6.25 8.72386 6.25 9C6.25 9.27614 6.47386 9.5 6.75 9.5Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 4.25C7.02614 4.25 7.25 4.02614 7.25 3.75C7.25 3.47386 7.02614 3.25 6.75 3.25C6.47386 3.25 6.25 3.47386 6.25 3.75C6.25 4.02614 6.47386 4.25 6.75 4.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 14.75C7.02614 14.75 7.25 14.5261 7.25 14.25C7.25 13.9739 7.02614 13.75 6.75 13.75C6.47386 13.75 6.25 13.9739 6.25 14.25C6.25 14.5261 6.47386 14.75 6.75 14.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 9.5C11.5261 9.5 11.75 9.27614 11.75 9C11.75 8.72386 11.5261 8.5 11.25 8.5C10.9739 8.5 10.75 8.72386 10.75 9C10.75 9.27614 10.9739 9.5 11.25 9.5Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 4.25C11.5261 4.25 11.75 4.02614 11.75 3.75C11.75 3.47386 11.5261 3.25 11.25 3.25C10.9739 3.25 10.75 3.47386 10.75 3.75C10.75 4.02614 10.9739 4.25 11.25 4.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 14.75C11.5261 14.75 11.75 14.5261 11.75 14.25C11.75 13.9739 11.5261 13.75 11.25 13.75C10.9739 13.75 10.75 13.9739 10.75 14.25C10.75 14.5261 10.9739 14.75 11.25 14.75Z"
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

export default GripDotsVertical;
