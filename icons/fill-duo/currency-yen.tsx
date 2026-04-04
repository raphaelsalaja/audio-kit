import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CurrencyYen({
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
          d="M5 12.25C5 11.8358 5.33579 11.5 5.75 11.5H12.25C12.6642 11.5 13 11.8358 13 12.25C13 12.6642 12.6642 13 12.25 13H5.75C5.33579 13 5 12.6642 5 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 9.75C5 9.33579 5.33579 9 5.75 9H12.25C12.6642 9 13 9.33579 13 9.75C13 10.1642 12.6642 10.5 12.25 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.15439 2.38354C5.95201 2.02214 5.49496 1.89323 5.13356 2.09562C4.77216 2.298 4.64325 2.75505 4.84563 3.11645L8.25001 9.1957V15C8.25001 15.4142 8.5858 15.75 9.00001 15.75C9.41423 15.75 9.75001 15.4142 9.75001 15V9.1957L13.1544 3.11645C13.3568 2.75505 13.2279 2.298 12.8665 2.09562C12.5051 1.89323 12.048 2.02214 11.8456 2.38354L9.00001 7.46501L6.15439 2.38354Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CurrencyYen;
