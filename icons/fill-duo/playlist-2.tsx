import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Playlist2({
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
          d="M4.5 4.75C4.5 3.23079 5.73079 2 7.25 2H10.75C12.2692 2 13.5 3.23079 13.5 4.75V13.25C13.5 14.7692 12.2692 16 10.75 16H7.25C5.73079 16 4.5 14.7692 4.5 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.1611 8.34886L8.18055 6.60958C7.66012 6.30567 6.99762 6.66986 6.99762 7.26008V9V10.7399C6.99762 11.3301 7.66012 11.6943 8.18055 11.3904L11.1611 9.65113C11.666 9.35601 11.666 8.64397 11.1611 8.34886Z"
          fill={fill}
        />
        <path
          d="M13.2003 14.5H14.75C15.9922 14.5 17 13.4922 17 12.25V5.75C17 4.50779 15.9922 3.5 14.75 3.5L13.2003 3.5C13.3919 3.875 13.5 4.29984 13.5 4.75V13.25C13.5 13.7002 13.3919 14.125 13.2003 14.5Z"
          fill={fill}
        />
        <path
          d="M4.79968 3.5C4.60807 3.875 4.5 4.29984 4.5 4.75V13.25C4.5 13.7002 4.60807 14.125 4.79968 14.5H3.25C2.00779 14.5 1 13.4922 1 12.25V5.75C1 4.50779 2.00779 3.5 3.25 3.5H4.79968Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Playlist2;
