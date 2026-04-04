import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlowerLotus({
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
          d="M4.806 11.781C2.842 11.994 1.75 13.25 1.75 13.25C1.75 13.25 3.055 14.75 5.375 14.75C7.695 14.75 9 13.25 9 13.25"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.194 11.781C15.158 11.994 16.25 13.25 16.25 13.25C16.25 13.25 14.945 14.75 12.625 14.75C10.305 14.75 9 13.25 9 13.25"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 13.25C9 13.25 11.25 11.36 11.25 8C11.25 4.64 9 2.75 9 2.75C9 2.75 6.75 4.64 6.75 8C6.75 11.36 9 13.25 9 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.806 11.781C2.842 11.994 1.75 13.25 1.75 13.25C1.75 13.25 3.055 14.75 5.375 14.75C7.695 14.75 9 13.25 9 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.757 8.327C4.874 6.831 2.785 7.035 2.785 7.035C2.785 7.035 2.536 9.527 4.529 11.521C6.523 13.515 9 13.25 9 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.194 11.781C15.158 11.994 16.25 13.25 16.25 13.25C16.25 13.25 14.945 14.75 12.625 14.75C10.305 14.75 9 13.25 9 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.243 8.327C13.126 6.831 15.215 7.035 15.215 7.035C15.215 7.035 15.464 9.527 13.471 11.521C11.477 13.515 9 13.25 9 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.25C9 13.25 11.25 11.36 11.25 8C11.25 4.64 9 2.75 9 2.75C9 2.75 6.75 4.64 6.75 8C6.75 11.36 9 13.25 9 13.25Z"
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

export default FlowerLotus;
