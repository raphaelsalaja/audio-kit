import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudDroplet({
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
          d="M9 16.25C10.036 16.25 10.875 15.398 10.875 14.347C10.875 12.902 9.824 12.284 9 11.25C8.176 12.284 7.125 12.902 7.125 14.347C7.125 15.398 7.964 16.25 9 16.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.70502 8C10.392 7.233 11.389 6.75 12.5 6.75C12.833 6.75 13.157 6.809 13.464 6.891"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.8499 13.9878C15.2514 13.4448 16.25 12.0935 16.25 10.5C16.25 8.762 15.065 7.3179 13.464 6.8911C13.278 4.5769 11.362 2.75 9 2.75C6.515 2.75 4.5 4.7651 4.5 7.25C4.5 7.6001 4.549 7.936 4.624 8.2629C3.027 8.33 1.75 9.6369 1.75 11.25C1.75 12.6951 2.7761 13.8896 4.1371 14.1746"
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

export default CloudDroplet;
