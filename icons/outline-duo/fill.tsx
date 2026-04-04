import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Fill({
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
          d="M1.75037 8.75C1.75292 9.19135 1.90094 9.63476 2.20202 10.003L5.16902 13.598C5.87502 14.461 7.15002 14.58 8.00402 13.863L13.89 8.91702L13.7496 8.75H1.75037Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.375 16.75C15.411 16.75 16.25 15.898 16.25 14.847C16.25 13.402 15.199 12.784 14.375 11.75C13.551 12.784 12.5 13.402 12.5 14.847C12.5 15.898 13.339 16.75 14.375 16.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.375 16.75C15.411 16.75 16.25 15.898 16.25 14.847C16.25 13.402 15.199 12.784 14.375 11.75C13.551 12.784 12.5 13.402 12.5 14.847C12.5 15.898 13.339 16.75 14.375 16.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.82001 8.75H13.671"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.02299 0.749023L13.89 8.91702L8.00399 13.863C7.14999 14.58 5.87499 14.461 5.16899 13.598L2.20199 10.003C1.50299 9.14802 1.62899 7.88802 2.48499 7.18902L8.37499 2.37502"
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

export default Fill;
