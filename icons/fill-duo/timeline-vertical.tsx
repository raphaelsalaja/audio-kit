import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TimelineVertical({
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
          d="M11.5 3.75C11.5 2.78379 12.2838 2 13.25 2H15.25C16.2162 2 17 2.78379 17 3.75V5.75C17 6.71621 16.2162 7.5 15.25 7.5H13.25C12.2838 7.5 11.5 6.71621 11.5 5.75V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 8C1 7.03379 1.78379 6.25 2.75 6.25H4.75C5.71621 6.25 6.5 7.03379 6.5 8V10C6.5 10.9662 5.71621 11.75 4.75 11.75H2.75C1.78379 11.75 1 10.9662 1 10V8Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.5 12.25C11.5 11.2838 12.2838 10.5 13.25 10.5H15.25C16.2162 10.5 17 11.2838 17 12.25V14.25C17 15.2162 16.2162 16 15.25 16H13.25C12.2838 16 11.5 15.2162 11.5 14.25V12.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 1C9.41421 1 9.75 1.33579 9.75 1.75V4H11.5V5.5H9.75V12.5H11.5V14H9.75V16.25C9.75 16.6642 9.41421 17 9 17C8.58579 17 8.25 16.6642 8.25 16.25V9.75H6.5V8.25H8.25V1.75C8.25 1.33579 8.58579 1 9 1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TimelineVertical;
