import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Itinerary2({
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
          d="M8.75 4.25C8.75 3.83579 9.08579 3.5 9.5 3.5H12.875C14.6012 3.5 16 4.89879 16 6.625C16 8.35121 14.6012 9.75 12.875 9.75H5.125C4.22721 9.75 3.5 10.4772 3.5 11.375C3.5 12.2728 4.22721 13 5.125 13H8.5C8.91421 13 9.25 13.3358 9.25 13.75C9.25 14.1642 8.91421 14.5 8.5 14.5H5.125C3.39879 14.5 2 13.1012 2 11.375C2 9.64879 3.39879 8.25 5.125 8.25H12.875C13.7728 8.25 14.5 7.52279 14.5 6.625C14.5 5.72721 13.7728 5 12.875 5H9.5C9.08579 5 8.75 4.66421 8.75 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 4.25C2 2.73079 3.23079 1.5 4.75 1.5C6.26921 1.5 7.5 2.73079 7.5 4.25C7.5 5.76921 6.26921 7 4.75 7C3.23079 7 2 5.76921 2 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.5 13.75C10.5 12.2308 11.7308 11 13.25 11C14.7692 11 16 12.2308 16 13.75C16 15.2692 14.7692 16.5 13.25 16.5C11.7308 16.5 10.5 15.2692 10.5 13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Itinerary2;
