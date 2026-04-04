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
          d="M2 7.75C2 6.23079 3.23079 5 4.75 5H13.25C14.7692 5 16 6.23079 16 7.75V10.25C16 11.7692 14.7692 13 13.25 13H4.75C3.23079 13 2 11.7692 2 10.25V7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.94 0.924988C10.83 0.666988 10.585 0.5 10.316 0.5H7.68401C7.41501 0.5 7.17001 0.666988 7.06001 0.924988C6.95001 1.18299 6.99401 1.48697 7.17301 1.69897L8.48901 3.258C8.61901 3.412 8.80501 3.50098 9.00101 3.50098C9.19701 3.50098 9.383 3.41197 9.512 3.25897L10.828 1.70001C11.006 1.48901 11.051 1.18399 10.94 0.924988Z"
          fill={fill}
        />
        <path
          d="M10.94 17.075C10.83 17.333 10.585 17.5 10.316 17.5H7.68401C7.41501 17.5 7.17001 17.333 7.06001 17.075C6.95001 16.817 6.99401 16.513 7.17301 16.301L8.48901 14.742C8.61901 14.588 8.80501 14.499 9.00101 14.499C9.19701 14.499 9.383 14.588 9.512 14.741L10.828 16.3C11.006 16.511 11.051 16.815 10.94 17.074V17.075Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ObjReduceSizeY;
