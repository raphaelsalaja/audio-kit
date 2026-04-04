import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StorageUnit({
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
          d="M11.25 6.75H6.75C5.645 6.75 4.75 7.645 4.75 8.75V13.25C4.75 14.355 5.645 15.25 6.75 15.25H11.25C12.355 15.25 13.25 14.355 13.25 13.25V8.75C13.25 7.645 12.355 6.75 11.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 6.75H6.75C5.645 6.75 4.75 7.645 4.75 8.75V13.25C4.75 14.355 5.645 15.25 6.75 15.25H11.25C12.355 15.25 13.25 14.355 13.25 13.25V8.75C13.25 7.645 12.355 6.75 11.25 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 15.25H3.25C2.422 15.25 1.75 14.578 1.75 13.75V10.25C1.75 9.422 2.422 8.75 3.25 8.75H4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 15.25H14.75C15.578 15.25 16.25 14.578 16.25 13.75V10.25C16.25 9.422 15.578 8.75 14.75 8.75H13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.75V9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 5.25L9 1.75L16.25 5.25"
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

export default StorageUnit;
