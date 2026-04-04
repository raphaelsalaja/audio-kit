import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitClubs({
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
          d="M9 9C9 10.795 10.455 12.25 12.25 12.25C14.045 12.25 15.5 10.795 15.5 9C15.5 7.205 14.045 5.75 12.25 5.75C12.216 5.75 12.185 5.759 12.151 5.76C12.21 5.515 12.25 5.263 12.25 5C12.25 3.205 10.795 1.75 9 1.75C7.205 1.75 5.75 3.205 5.75 5C5.75 5.263 5.79 5.515 5.849 5.76C5.815 5.759 5.784 5.75 5.75 5.75C3.955 5.75 2.5 7.205 2.5 9C2.5 10.795 3.955 12.25 5.75 12.25C7.545 12.25 9 10.795 9 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 10.75C9 13.928 11.584 15.792 13.75 16.25H9H4.25C6.416 15.792 9 13.928 9 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9C9 10.795 10.455 12.25 12.25 12.25C14.045 12.25 15.5 10.795 15.5 9C15.5 7.205 14.045 5.75 12.25 5.75C12.216 5.75 12.185 5.759 12.151 5.76C12.21 5.515 12.25 5.263 12.25 5C12.25 3.205 10.795 1.75 9 1.75C7.205 1.75 5.75 3.205 5.75 5C5.75 5.263 5.79 5.515 5.849 5.76C5.815 5.759 5.784 5.75 5.75 5.75C3.955 5.75 2.5 7.205 2.5 9C2.5 10.795 3.955 12.25 5.75 12.25C7.545 12.25 9 10.795 9 9Z"
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

export default SuitClubs;
