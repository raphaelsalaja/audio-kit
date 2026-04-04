import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarUser({
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
          d="M5.75 2.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 2.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 6.25H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 12.5C15.3284 12.5 16 11.8284 16 11C16 10.1716 15.3284 9.5 14.5 9.5C13.6716 9.5 13 10.1716 13 11C13 11.8284 13.6716 12.5 14.5 12.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M15.75 7.4805V4.75C15.75 3.646 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.646 2.25 4.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H9.0524"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.6011 17.5H12.399C11.9923 17.5 11.6085 17.3013 11.3717 16.9683C11.1393 16.6407 11.0787 16.2207 11.2096 15.8453C11.6979 14.443 13.0201 13.5001 14.5001 13.5001C15.9801 13.5001 17.3023 14.443 17.7911 15.8458C17.9215 16.2208 17.861 16.6407 17.6286 16.9684C17.3918 17.3014 17.0078 17.5 16.6011 17.5Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CalendarUser;
