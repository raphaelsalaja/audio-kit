import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Binary({
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
          d="M6.75 14.75C7.57843 14.75 8.25 13.7426 8.25 12.5C8.25 11.2574 7.57843 10.25 6.75 10.25C5.92157 10.25 5.25 11.2574 5.25 12.5C5.25 13.7426 5.92157 14.75 6.75 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 7.75C12.0784 7.75 12.75 6.74264 12.75 5.5C12.75 4.25736 12.0784 3.25 11.25 3.25C10.4216 3.25 9.75 4.25736 9.75 5.5C9.75 6.74264 10.4216 7.75 11.25 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 14.75C7.57843 14.75 8.25 13.7426 8.25 12.5C8.25 11.2574 7.57843 10.25 6.75 10.25C5.92157 10.25 5.25 11.2574 5.25 12.5C5.25 13.7426 5.92157 14.75 6.75 14.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.74999 7.75V3.25C6.74999 3.25 6.23399 4.157 5.14099 4.366"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 7.75C12.0784 7.75 12.75 6.74264 12.75 5.5C12.75 4.25736 12.0784 3.25 11.25 3.25C10.4216 3.25 9.75 4.25736 9.75 5.5C9.75 6.74264 10.4216 7.75 11.25 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 14.75V10.25C11.75 10.25 11.234 11.157 10.141 11.366"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 15.75C2.698 15.75 2.25 15.302 2.25 14.75V10C2.25 9.448 1.802 9 1.25 9C1.802 9 2.25 8.552 2.25 8V3.25C2.25 2.698 2.698 2.25 3.25 2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 15.75C15.302 15.75 15.75 15.302 15.75 14.75V10C15.75 9.448 16.198 9 16.75 9C16.198 9 15.75 8.552 15.75 8V3.25C15.75 2.698 15.302 2.25 14.75 2.25"
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

export default Binary;
