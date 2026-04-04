import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudBolt({
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
          d="M9.25 9.75L6.5 13.25H8.905L7.75 16.25L10.5 12.75H8.095L9.25 9.75Z"
          fill={secondaryfill}
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.70502 7C10.392 6.233 11.389 5.75 12.5 5.75C12.833 5.75 13.157 5.809 13.464 5.891"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.476 13.1086C15.0717 12.6779 16.25 11.2321 16.25 9.5C16.25 7.7639 15.065 6.3179 13.464 5.8911C13.278 3.5769 11.362 1.75 9 1.75C6.515 1.75 4.5 3.7651 4.5 6.25C4.5 6.6001 4.549 6.936 4.624 7.2629C3.027 7.33 1.75 8.6369 1.75 10.25C1.75 11.4666 2.4745 12.5122 3.5151 12.9829"
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

export default CloudBolt;
