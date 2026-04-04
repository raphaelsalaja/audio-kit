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
          d="M10 9.54501L5.07001 14.475"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.86329 13.6331C1.06149 12.8389 0.825792 12.1376 0.776992 11.604C0.602992 9.68 2.75199 8.65301 2.73799 6.50601C2.72899 5.12901 1.83399 4.01499 1.10399 3.30399"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.241 8.05701L13.649 12.553C13.532 12.883 13.252 13.128 12.909 13.198L5.75203 14.679C5.22403 14.788 4.75603 14.321 4.86603 13.793L6.34703 6.63599C6.41803 6.29299 6.66303 6.013 6.99203 5.896L11.488 4.30399"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.496 2.29599L11.195 2.59698C10.804 2.98798 10.804 3.62099 11.195 4.01099L13.364 6.17999L15.533 8.349C15.924 8.74 16.557 8.74 16.947 8.349L17.248 8.048"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 10.295C10.4142 10.295 10.75 9.95901 10.75 9.54501C10.75 9.13101 10.4142 8.79501 10 8.79501C9.5858 8.79501 9.25 9.13101 9.25 9.54501C9.25 9.95901 9.5858 10.295 10 10.295Z"
          fill={secondaryfill}
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PenNib3;
