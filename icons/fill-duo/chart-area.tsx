import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartArea({
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
          d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V12.75C3.5 13.4408 4.05921 14 4.75 14H15.25C15.6642 14 16 14.3358 16 14.75C16 15.1642 15.6642 15.5 15.25 15.5H4.75C3.23079 15.5 2 14.2692 2 12.75V2.75C2 2.33579 2.33579 2 2.75 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.5701 4.32174C14.8326 4.4456 15 4.70978 15 5V11.75C15 12.1642 14.6642 12.5 14.25 12.5H5.75C5.33579 12.5 5 12.1642 5 11.75V8.5C5 8.31632 5.06741 8.13902 5.18944 8.00173L7.18944 5.75173C7.32667 5.59734 7.5215 5.50639 7.72797 5.50032C7.93444 5.49426 8.13427 5.57361 8.28033 5.71967L10.0488 7.48819L13.7732 4.42105C13.9973 4.23655 14.3076 4.19787 14.5701 4.32174Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartArea;
