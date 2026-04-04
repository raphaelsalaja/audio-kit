import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Movie({
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
          d="M1 4.75C1 3.23079 2.23079 2 3.75 2H14.25C15.7692 2 17 3.23079 17 4.75V13.25C17 14.7692 15.7692 16 14.25 16H3.75C2.23079 16 1 14.7692 1 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.75 4.25C7.75 3.83579 8.08579 3.5 8.5 3.5H9.5C9.91421 3.5 10.25 3.83579 10.25 4.25C10.25 4.66421 9.91421 5 9.5 5H8.5C8.08579 5 7.75 4.66421 7.75 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 4.25C4 3.83579 4.33579 3.5 4.75 3.5H5.75C6.16421 3.5 6.5 3.83579 6.5 4.25C6.5 4.66421 6.16421 5 5.75 5H4.75C4.33579 5 4 4.66421 4 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 4.25C11.5 3.83579 11.8358 3.5 12.25 3.5H13.25C13.6642 3.5 14 3.83579 14 4.25C14 4.66421 13.6642 5 13.25 5H12.25C11.8358 5 11.5 4.66421 11.5 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.75 13.75C7.75 13.3358 8.08579 13 8.5 13H9.5C9.91421 13 10.25 13.3358 10.25 13.75C10.25 14.1642 9.91421 14.5 9.5 14.5H8.5C8.08579 14.5 7.75 14.1642 7.75 13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 13.75C4 13.3358 4.33579 13 4.75 13H5.75C6.16421 13 6.5 13.3358 6.5 13.75C6.5 14.1642 6.16421 14.5 5.75 14.5H4.75C4.33579 14.5 4 14.1642 4 13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 13.75C11.5 13.3358 11.8358 13 12.25 13H13.25C13.6642 13 14 13.3358 14 13.75C14 14.1642 13.6642 14.5 13.25 14.5H12.25C11.8358 14.5 11.5 14.1642 11.5 13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.1634 8.34886L8.18293 6.60958C7.6625 6.30567 7 6.66986 7 7.26008V9V10.7399C7 11.3301 7.6625 11.6943 8.18293 11.3904L11.1634 9.65113C11.6684 9.35601 11.6684 8.64397 11.1634 8.34886Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Movie;
