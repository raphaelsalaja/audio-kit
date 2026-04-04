import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenNib3({
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
          d="M15.241 8.05702L13.649 12.553C13.532 12.883 13.252 13.128 12.909 13.198L5.75197 14.679C5.22397 14.788 4.75597 14.321 4.86597 13.793L6.34697 6.63602C6.41797 6.29302 6.66297 6.01302 6.99197 5.89602L11.488 4.30402"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10 9.54498L5.07001 14.475"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.241 8.05702L13.649 12.553C13.532 12.883 13.252 13.128 12.909 13.198L5.75197 14.679C5.22397 14.788 4.75597 14.321 4.86597 13.793L6.34697 6.63602C6.41797 6.29302 6.66297 6.01302 6.99197 5.89602L11.488 4.30402"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.496 2.29602L11.195 2.59702C10.804 2.98802 10.804 3.62102 11.195 4.01102L13.364 6.18002L15.533 8.34902C15.924 8.74002 16.557 8.74002 16.947 8.34902L17.248 8.04802"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 10.295C10.4142 10.295 10.75 9.95919 10.75 9.54498C10.75 9.13077 10.4142 8.79498 10 8.79498C9.58579 8.79498 9.25 9.13077 9.25 9.54498C9.25 9.95919 9.58579 10.295 10 10.295Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.86329 13.6331C1.06149 12.8389 0.825792 12.1376 0.776992 11.604C0.602992 9.68003 2.75199 8.65304 2.73799 6.50604C2.72899 5.12904 1.83399 4.01502 1.10399 3.30402"
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

export default PenNib3;
