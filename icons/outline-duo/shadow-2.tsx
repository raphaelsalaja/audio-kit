import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shadow2({
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
          d="M7 12.25C9.899 12.25 12.25 9.899 12.25 7C12.25 4.101 9.899 1.75 7 1.75C4.101 1.75 1.75 4.101 1.75 7C1.75 9.899 4.101 12.25 7 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.87701 12.123C6.39201 14.482 8.48702 16.25 11 16.25C13.9 16.25 16.25 13.899 16.25 11C16.25 8.487 14.482 6.39201 12.123 5.87701"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7056 9.33008L15.7057 13.3303"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.33069 11.7053L13.3309 15.7055"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 12.25C9.899 12.25 12.25 9.899 12.25 7C12.25 4.101 9.899 1.75 7 1.75C4.101 1.75 1.75 4.101 1.75 7C1.75 9.899 4.101 12.25 7 12.25Z"
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

export default Shadow2;
