import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bitcoin2({
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
          d="M6.25 1C6.66421 1 7 1.33579 7 1.75V4.25C7 4.66421 6.66421 5 6.25 5C5.83579 5 5.5 4.66421 5.5 4.25V1.75C5.5 1.33579 5.83579 1 6.25 1ZM10 1.75C10 1.33579 9.66421 1 9.25 1C8.83579 1 8.5 1.33579 8.5 1.75V4.25C8.5 4.66421 8.83579 5 9.25 5C9.66421 5 10 4.66421 10 4.25V1.75ZM10 13.75C10 13.3358 9.66421 13 9.25 13C8.83579 13 8.5 13.3358 8.5 13.75V16.25C8.5 16.6642 8.83579 17 9.25 17C9.66421 17 10 16.6642 10 16.25V13.75ZM7 13.75C7 13.3358 6.66421 13 6.25 13C5.83579 13 5.5 13.3358 5.5 13.75V16.25C5.5 16.6642 5.83579 17 6.25 17C6.66421 17 7 16.6642 7 16.25V13.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3 4.25C3 3.83579 3.33579 3.5 3.75 3.5H10.5C12.1572 3.5 13.5 4.84279 13.5 6.5C13.5 7.2226 13.2447 7.88542 12.8194 8.40321C13.8215 8.95672 14.5 10.024 14.5 11.25C14.5 13.0452 13.0452 14.5 11.25 14.5H3.75C3.33579 14.5 3 14.1642 3 13.75C3 13.3358 3.33579 13 3.75 13H5.5V8.75V5H3.75C3.33579 5 3 4.66421 3 4.25ZM7 5V8H10.5C11.3288 8 12 7.32879 12 6.5C12 5.67121 11.3288 5 10.5 5H7ZM7 9.5V13H11.25C12.2168 13 13 12.2168 13 11.25C13 10.2832 12.2168 9.5 11.25 9.5H10.5H7Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Bitcoin2;
