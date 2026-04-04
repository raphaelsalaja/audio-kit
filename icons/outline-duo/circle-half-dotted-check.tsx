import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHalfDottedCheck({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 1.75C13.004 1.75 16.25 4.996 16.25 9C16.25 13.004 13.004 16.25 9 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 9.25L8 11.75L12.25 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.87299 14.877C4.2872 14.877 4.62299 14.5412 4.62299 14.127C4.62299 13.7128 4.2872 13.377 3.87299 13.377C3.45877 13.377 3.12299 13.7128 3.12299 14.127C3.12299 14.5412 3.45877 14.877 3.87299 14.877Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 9.75C2.16421 9.75 2.5 9.41421 2.5 9C2.5 8.58579 2.16421 8.25 1.75 8.25C1.33579 8.25 1 8.58579 1 9C1 9.41421 1.33579 9.75 1.75 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.87299 4.62299C4.2872 4.62299 4.62299 4.2872 4.62299 3.87299C4.62299 3.45877 4.2872 3.12299 3.87299 3.12299C3.45877 3.12299 3.12299 3.45877 3.12299 3.87299C3.12299 4.2872 3.45877 4.62299 3.87299 4.62299Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.22601 16.448C6.64023 16.448 6.97601 16.1122 6.97601 15.698C6.97601 15.2838 6.64023 14.948 6.22601 14.948C5.8118 14.948 5.47601 15.2838 5.47601 15.698C5.47601 16.1122 5.8118 16.448 6.22601 16.448Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.302 12.524C2.71622 12.524 3.052 12.1882 3.052 11.774C3.052 11.3598 2.71622 11.024 2.302 11.024C1.88779 11.024 1.552 11.3598 1.552 11.774C1.552 12.1882 1.88779 12.524 2.302 12.524Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.302 6.97601C2.71622 6.97601 3.052 6.64023 3.052 6.22601C3.052 5.8118 2.71622 5.47601 2.302 5.47601C1.88779 5.47601 1.552 5.8118 1.552 6.22601C1.552 6.64023 1.88779 6.97601 2.302 6.97601Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.22601 3.052C6.64023 3.052 6.97601 2.71622 6.97601 2.302C6.97601 1.88779 6.64023 1.552 6.22601 1.552C5.8118 1.552 5.47601 1.88779 5.47601 2.302C5.47601 2.71622 5.8118 3.052 6.22601 3.052Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CircleHalfDottedCheck;
