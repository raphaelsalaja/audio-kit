import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sitemap2({
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
          d="M4 12.25H2.5C1.94772 12.25 1.5 12.6977 1.5 13.25V14.75C1.5 15.3023 1.94772 15.75 2.5 15.75H4C4.55228 15.75 5 15.3023 5 14.75V13.25C5 12.6977 4.55228 12.25 4 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.75 12.25H8.25C7.69772 12.25 7.25 12.6977 7.25 13.25V14.75C7.25 15.3023 7.69772 15.75 8.25 15.75H9.75C10.3023 15.75 10.75 15.3023 10.75 14.75V13.25C10.75 12.6977 10.3023 12.25 9.75 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.5 12.25H14C13.4477 12.25 13 12.6977 13 13.25V14.75C13 15.3023 13.4477 15.75 14 15.75H15.5C16.0523 15.75 16.5 15.3023 16.5 14.75V13.25C16.5 12.6977 16.0523 12.25 15.5 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 12.25V10.75C14.75 9.645 13.855 8.75 12.75 8.75H5.25C4.145 8.75 3.25 9.645 3.25 10.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.25V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 1.75H8.25C7.69772 1.75 7.25 2.19772 7.25 2.75V4.25C7.25 4.80228 7.69772 5.25 8.25 5.25H9.75C10.3023 5.25 10.75 4.80228 10.75 4.25V2.75C10.75 2.19772 10.3023 1.75 9.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 12.25H2.5C1.94772 12.25 1.5 12.6977 1.5 13.25V14.75C1.5 15.3023 1.94772 15.75 2.5 15.75H4C4.55228 15.75 5 15.3023 5 14.75V13.25C5 12.6977 4.55228 12.25 4 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 12.25H8.25C7.69772 12.25 7.25 12.6977 7.25 13.25V14.75C7.25 15.3023 7.69772 15.75 8.25 15.75H9.75C10.3023 15.75 10.75 15.3023 10.75 14.75V13.25C10.75 12.6977 10.3023 12.25 9.75 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.5 12.25H14C13.4477 12.25 13 12.6977 13 13.25V14.75C13 15.3023 13.4477 15.75 14 15.75H15.5C16.0523 15.75 16.5 15.3023 16.5 14.75V13.25C16.5 12.6977 16.0523 12.25 15.5 12.25Z"
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

export default Sitemap2;
