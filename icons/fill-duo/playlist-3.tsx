import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Playlist3({
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
          d="M4 4.75C4 3.23079 5.23079 2 6.75 2H11.25C12.7692 2 14 3.23079 14 4.75V13.25C14 14.7692 12.7692 16 11.25 16H6.75C5.23079 16 4 14.7692 4 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.25 3.5C16.6642 3.5 17 3.83579 17 4.25V13.75C17 14.1642 16.6642 14.5 16.25 14.5C15.8358 14.5 15.5 14.1642 15.5 13.75V4.25C15.5 3.83579 15.8358 3.5 16.25 3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.75 3.5C2.16421 3.5 2.5 3.83579 2.5 4.25V13.75C2.5 14.1642 2.16421 14.5 1.75 14.5C1.33579 14.5 1 14.1642 1 13.75V4.25C1 3.83579 1.33579 3.5 1.75 3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.2004 8.34886L8.21991 6.60958C7.69948 6.30567 7.03699 6.66986 7.03699 7.26008V9V10.7399C7.03699 11.3301 7.69948 11.6943 8.21991 11.3904L11.2004 9.65113C11.7054 9.35601 11.7054 8.64397 11.2004 8.34886Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Playlist3;
