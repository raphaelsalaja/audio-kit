import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Itinerary({
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
          d="M2 3.25C2 2.28379 2.78379 1.5 3.75 1.5H5.75C6.71621 1.5 7.5 2.28379 7.5 3.25V5.25C7.5 6.21621 6.71621 7 5.75 7H3.75C2.78379 7 2 6.21621 2 5.25V3.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.5 12.75C10.5 11.7838 11.2838 11 12.25 11H14.25C15.2162 11 16 11.7838 16 12.75V14.75C16 15.7162 15.2162 16.5 14.25 16.5H12.25C11.2838 16.5 10.5 15.7162 10.5 14.75V12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.75 4.25C8.75 3.83579 9.08579 3.5 9.5 3.5H12.875C14.6012 3.5 16 4.89879 16 6.625C16 8.35121 14.6012 9.75 12.875 9.75H5.125C4.22721 9.75 3.5 10.4772 3.5 11.375C3.5 12.2728 4.22721 13 5.125 13H8.5C8.91421 13 9.25 13.3358 9.25 13.75C9.25 14.1642 8.91421 14.5 8.5 14.5H5.125C3.39879 14.5 2 13.1012 2 11.375C2 9.64879 3.39879 8.25 5.125 8.25H12.875C13.7728 8.25 14.5 7.52279 14.5 6.625C14.5 5.72721 13.7728 5 12.875 5H9.5C9.08579 5 8.75 4.66421 8.75 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Itinerary;
