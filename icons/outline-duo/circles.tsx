import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circles({
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
          d="M12.25 7C12.25 9.8995 9.8995 12.25 7 12.25C6.61263 12.25 6.23505 12.208 5.87157 12.1284C5.79196 11.765 5.75 11.3874 5.75 11C5.75 8.10051 8.10051 5.75 11 5.75C11.3874 5.75 11.765 5.79196 12.1284 5.87157C12.208 6.23505 12.25 6.61263 12.25 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7 12.25C9.8995 12.25 12.25 9.8995 12.25 7C12.25 4.10051 9.8995 1.75 7 1.75C4.10051 1.75 1.75 4.10051 1.75 7C1.75 9.8995 4.10051 12.25 7 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 16.25C13.8995 16.25 16.25 13.8995 16.25 11C16.25 8.10051 13.8995 5.75 11 5.75C8.10051 5.75 5.75 8.10051 5.75 11C5.75 13.8995 8.10051 16.25 11 16.25Z"
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

export default Circles;
