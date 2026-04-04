import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoonFog({
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
          d="M11.3396 11.281C11.8295 11.4043 12.3423 11.4698 12.8705 11.4698C14.0665 11.4698 15.1795 11.1288 16.1295 10.5458C15.7806 11.8871 15.0589 13.0782 14.0811 14H12.372C12.4549 13.7654 12.5 13.513 12.5 13.25C12.5 12.4027 12.0316 11.6647 11.3396 11.281ZM10.5314 11.0174C8.23838 10.0915 6.62051 7.84472 6.62051 5.21979C6.62051 3.86779 7.05351 2.62079 7.78251 1.59779C4.41851 2.22579 1.87051 5.17279 1.87051 8.71979C1.87051 9.5164 1.999 10.283 2.23637 11H10.25C10.3453 11 10.4392 11.0059 10.5314 11.0174Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.75 16.25H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 16.25H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.571 13.416C15.366 12.553 15.954 11.497 16.259 10.326C15.309 10.909 14.196 11.25 13 11.25C9.548 11.25 6.75 8.45201 6.75 5.00001C6.75 3.64801 7.183 2.40101 7.912 1.37801C4.548 2.00601 2 4.95301 2 8.50001C2 9.15901 2.088 9.79701 2.253 10.404"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 13.25H9.25"
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

export default MoonFog;
