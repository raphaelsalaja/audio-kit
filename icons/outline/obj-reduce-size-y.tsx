import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjReduceSizeY({
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
          d="M13.25 5.75H4.75C3.645 5.75 2.75 6.645 2.75 7.75V10.25C2.75 11.355 3.645 12.25 4.75 12.25H13.25C14.355 12.25 15.25 11.355 15.25 10.25V7.75C15.25 6.645 14.355 5.75 13.25 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.94 0.924988C10.83 0.666988 10.585 0.5 10.316 0.5H7.68401C7.41501 0.5 7.17001 0.666988 7.06001 0.924988C6.95001 1.18299 6.99401 1.48697 7.17301 1.69897L8.48901 3.258C8.61901 3.412 8.80501 3.50098 9.00101 3.50098C9.19701 3.50098 9.383 3.41197 9.512 3.25897L10.828 1.70001C11.006 1.48901 11.051 1.18399 10.94 0.924988Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M10.94 17.075C10.83 17.333 10.585 17.5 10.316 17.5H7.68401C7.41501 17.5 7.17001 17.333 7.06001 17.075C6.95001 16.817 6.99401 16.513 7.17301 16.301L8.48901 14.742C8.61901 14.588 8.80501 14.499 9.00101 14.499C9.19701 14.499 9.383 14.588 9.512 14.741L10.828 16.3C11.006 16.511 11.051 16.815 10.94 17.074V17.075Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ObjReduceSizeY;
