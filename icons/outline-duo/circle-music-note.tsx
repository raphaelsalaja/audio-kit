import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleMusicNote({
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
          d="M16.25 9C16.25 13.0041 13.0041 16.25 9 16.25C4.99594 16.25 1.75 13.0041 1.75 9C1.75 4.99594 4.99594 1.75 9 1.75C13.0041 1.75 16.25 4.99594 16.25 9ZM9.25 10.75C9.25 11.5784 8.57843 12.25 7.75 12.25C6.92157 12.25 6.25 11.5784 6.25 10.75C6.25 9.92157 6.92157 9.25 7.75 9.25C8.57843 9.25 9.25 9.92157 9.25 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 12.25C8.57843 12.25 9.25 11.5784 9.25 10.75C9.25 9.92157 8.57843 9.25 7.75 9.25C6.92157 9.25 6.25 9.92157 6.25 10.75C6.25 11.5784 6.92157 12.25 7.75 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 10.75V5C9.567 5.323 9.98 5.692 10.5 6.047C10.95 6.354 11.379 6.582 11.75 6.75"
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

export default CircleMusicNote;
