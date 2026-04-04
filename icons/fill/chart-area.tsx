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
          d="M15.25 14H4.75C4.061 14 3.5 13.439 3.5 12.75V2.75C3.5 2.336 3.164 2 2.75 2C2.336 2 2 2.336 2 2.75V12.75C2 14.267 3.233 15.5 4.75 15.5H15.25C15.664 15.5 16 15.164 16 14.75C16 14.336 15.664 14 15.25 14Z"
          fill={fill}
        />
        <path
          d="M14.5701 4.32173C14.8326 4.44559 15 4.70977 15 4.99999V11.75C15 12.1642 14.6642 12.5 14.25 12.5H5.75C5.33579 12.5 5 12.1642 5 11.75V8.49999C5 8.31631 5.06741 8.13901 5.18944 8.00172L7.18944 5.75172C7.32667 5.59734 7.5215 5.50638 7.72797 5.50032C7.93444 5.49425 8.13427 5.5736 8.28033 5.71966L10.0488 7.48818L13.7732 4.42105C13.9973 4.23655 14.3076 4.19786 14.5701 4.32173Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartArea;
