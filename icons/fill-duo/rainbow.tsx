import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Rainbow({
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
          d="M9 11C8.30921 11 7.75 11.5592 7.75 12.25V13.25C7.75 13.6642 7.41421 14 7 14C6.58579 14 6.25 13.6642 6.25 13.25V12.25C6.25 10.7308 7.48079 9.5 9 9.5C10.5192 9.5 11.75 10.7308 11.75 12.25V13.25C11.75 13.6642 11.4142 14 11 14C10.5858 14 10.25 13.6642 10.25 13.25V12.25C10.25 11.5592 9.69079 11 9 11Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
        <path
          d="M9 8.25C6.79121 8.25 5 10.0412 5 12.25V13.25C5 13.6642 4.66421 14 4.25 14C3.83579 14 3.5 13.6642 3.5 13.25V12.25C3.5 9.21279 5.96279 6.75 9 6.75C12.0372 6.75 14.5 9.21279 14.5 12.25V13.25C14.5 13.6642 14.1642 14 13.75 14C13.3358 14 13 13.6642 13 13.25V12.25C13 10.0412 11.2088 8.25 9 8.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 5.5C5.27221 5.5 2.25 8.52221 2.25 12.25V13.25C2.25 13.6642 1.91421 14 1.5 14C1.08579 14 0.75 13.6642 0.75 13.25V12.25C0.75 7.69379 4.44379 4 9 4C13.5562 4 17.25 7.69379 17.25 12.25V13.25C17.25 13.6642 16.9142 14 16.5 14C16.0858 14 15.75 13.6642 15.75 13.25V12.25C15.75 8.52221 12.7278 5.5 9 5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Rainbow;
