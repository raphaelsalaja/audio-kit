import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder2Open({
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
          d="M16.148 13.27L16.991 10.14C17.248 9.187 16.53 8.25 15.543 8.25H6.15001C5.47201 8.25 4.87801 8.705 4.70201 9.36L3.76001 12.86C3.50301 13.813 4.22101 14.75 5.20801 14.75H14.217C15.121 14.75 15.913 14.143 16.148 13.27Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5 14.75H4.25C3.145 14.75 2.25 13.855 2.25 12.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.075C6.662 2.75 7.219 3.008 7.599 3.455L9.123 5.25H13.749C14.854 5.25 15.749 6.145 15.749 7.25V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.148 13.27L16.991 10.14C17.248 9.187 16.53 8.25 15.543 8.25H6.15001C5.47201 8.25 4.87801 8.705 4.70201 9.36L3.76001 12.86C3.50301 13.813 4.22101 14.75 5.20801 14.75H14.217C15.121 14.75 15.913 14.143 16.148 13.27Z"
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

export default Folder2Open;
