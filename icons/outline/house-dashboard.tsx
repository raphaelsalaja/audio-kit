import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseDashboard({
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
          d="M3.145 5.95003L8.395 1.96004C8.753 1.68804 9.248 1.68804 9.605 1.96004L14.855 5.95003C15.104 6.13903 15.25 6.43399 15.25 6.74599V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.74599C2.75 6.43299 2.896 6.13903 3.145 5.95003Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5 12H8.5C8.2239 12 8 12.224 8 12.5V13.5C8 13.776 8.2239 14 8.5 14H9.5C9.7761 14 10 13.776 10 13.5V12.5C10 12.224 9.7761 12 9.5 12Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M6.5 12H5.5C5.2239 12 5 12.224 5 12.5V13.5C5 13.776 5.2239 14 5.5 14H6.5C6.7761 14 7 13.776 7 13.5V12.5C7 12.224 6.7761 12 6.5 12Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.5 12H11.5C11.2239 12 11 12.224 11 12.5V13.5C11 13.776 11.2239 14 11.5 14H12.5C12.7761 14 13 13.776 13 13.5V12.5C13 12.224 12.7761 12 12.5 12Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M9.5 9H8.5C8.2239 9 8 9.224 8 9.5V10.5C8 10.776 8.2239 11 8.5 11H9.5C9.7761 11 10 10.776 10 10.5V9.5C10 9.224 9.7761 9 9.5 9Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M6.5 9H5.5C5.2239 9 5 9.224 5 9.5V10.5C5 10.776 5.2239 11 5.5 11H6.5C6.7761 11 7 10.776 7 10.5V9.5C7 9.224 6.7761 9 6.5 9Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.5 9H11.5C11.2239 9 11 9.224 11 9.5V10.5C11 10.776 11.2239 11 11.5 11H12.5C12.7761 11 13 10.776 13 10.5V9.5C13 9.224 12.7761 9 12.5 9Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default HouseDashboard;
