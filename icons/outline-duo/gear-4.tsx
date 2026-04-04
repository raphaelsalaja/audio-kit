import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gear4({
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
          d="M9 15.25C12.4518 15.25 15.25 12.4518 15.25 9C15.25 5.54822 12.4518 2.75 9 2.75C5.54822 2.75 2.75 5.54822 2.75 9C2.75 12.4518 5.54822 15.25 9 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.25 1.75H9.75L10.25 2.75H7.75L8.25 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.596 3.343L14.657 4.404L14.303 5.464L12.536 3.697L13.596 3.343Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.25V9.75L15.25 10.25V7.75L16.25 8.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.657 13.596L13.596 14.657L12.536 14.303L14.303 12.536L14.657 13.596Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 16.25H8.25L7.75 15.25H10.25L9.75 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.40399 14.657L3.34299 13.596L3.69699 12.536L5.46399 14.303L4.40399 14.657Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9.75V8.25L2.75 7.75V10.25L1.75 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.34299 4.404L4.40399 3.343L5.46399 3.697L3.69699 5.464L3.34299 4.404Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15.25C12.4518 15.25 15.25 12.4518 15.25 9C15.25 5.54822 12.4518 2.75 9 2.75C5.54822 2.75 2.75 5.54822 2.75 9C2.75 12.4518 5.54822 15.25 9 15.25Z"
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

export default Gear4;
