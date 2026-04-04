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
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9.6 12H8.4C8.1791 12 8 12.179 8 12.4V13.6C8 13.821 8.1791 14 8.4 14H9.6C9.8209 14 10 13.821 10 13.6V12.4C10 12.179 9.8209 12 9.6 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.6 12H5.4C5.1791 12 5 12.179 5 12.4V13.6C5 13.821 5.1791 14 5.4 14H6.6C6.8209 14 7 13.821 7 13.6V12.4C7 12.179 6.8209 12 6.6 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.6 12H11.4C11.1791 12 11 12.179 11 12.4V13.6C11 13.821 11.1791 14 11.4 14H12.6C12.8209 14 13 13.821 13 13.6V12.4C13 12.179 12.8209 12 12.6 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.6 9H8.4C8.1791 9 8 9.17902 8 9.40002V10.6C8 10.821 8.1791 11 8.4 11H9.6C9.8209 11 10 10.821 10 10.6V9.40002C10 9.17902 9.8209 9 9.6 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.6 9H5.4C5.1791 9 5 9.17902 5 9.40002V10.6C5 10.821 5.1791 11 5.4 11H6.6C6.8209 11 7 10.821 7 10.6V9.40002C7 9.17902 6.8209 9 6.6 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.6 9H11.4C11.1791 9 11 9.17902 11 9.40002V10.6C11 10.821 11.1791 11 11.4 11H12.6C12.8209 11 13 10.821 13 10.6V9.40002C13 9.17902 12.8209 9 12.6 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.145 5.95003L8.395 1.96004C8.753 1.68804 9.248 1.68804 9.605 1.96004L14.855 5.95003C15.104 6.13903 15.25 6.43399 15.25 6.74599V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.74599C2.75 6.43299 2.896 6.13903 3.145 5.95003Z"
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

export default HouseDashboard;
