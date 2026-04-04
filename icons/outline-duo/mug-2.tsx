import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mug2({
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
          d="M13.159 4.75H4.84098C4.25498 4.75 3.79398 5.253 3.84498 5.837L4.59198 14.424C4.68098 15.458 5.54698 16.251 6.58398 16.251H11.416C12.453 16.251 13.318 15.458 13.408 14.424L14.155 5.837C14.206 5.252 13.745 4.75 13.159 4.75ZM11 10.5C11 11.6046 10.1046 12.5 9 12.5C7.89543 12.5 7 11.6046 7 10.5C7 9.39543 7.89543 8.5 9 8.5C10.1046 8.5 11 9.39543 11 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.033 7.25H15.75C16.302 7.25 16.75 7.698 16.75 8.25V9.75C16.75 10.855 15.855 11.75 14.75 11.75H13.641"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.84098 4.75H13.159C13.745 4.75 14.206 5.252 14.155 5.837L13.408 14.424C13.318 15.458 12.453 16.251 11.416 16.251H6.58398C5.54698 16.251 4.68098 15.458 4.59198 14.424L3.84498 5.837C3.79398 5.253 4.25498 4.75 4.84098 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 2C7.127 1.96 7.406 1.854 7.646 1.583C7.941 1.25 7.989 0.877 8 0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 2C10.377 1.96 10.656 1.854 10.896 1.583C11.191 1.25 11.239 0.877 11.25 0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.5C10.1046 12.5 11 11.6046 11 10.5C11 9.39543 10.1046 8.5 9 8.5C7.89543 8.5 7 9.39543 7 10.5C7 11.6046 7.89543 12.5 9 12.5Z"
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

export default Mug2;
