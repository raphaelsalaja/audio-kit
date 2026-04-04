import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Itinerary3({
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
          d="M2 12.75C2 11.7838 2.78379 11 3.75 11H5.75C6.71621 11 7.5 11.7838 7.5 12.75V14.75C7.5 15.7162 6.71621 16.5 5.75 16.5H3.75C2.78379 16.5 2 15.7162 2 14.75V12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 4.25C2 2.73079 3.23079 1.5 4.75 1.5C6.26921 1.5 7.5 2.73079 7.5 4.25C7.5 5.76921 6.26921 7 4.75 7C3.23079 7 2 5.76921 2 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.5 4.25C8.5 3.83579 8.83579 3.5 9.25 3.5H13.25C14.7692 3.5 16 4.73079 16 6.25V11.75C16 13.2692 14.7692 14.5 13.25 14.5H9.25C8.83579 14.5 8.5 14.1642 8.5 13.75C8.5 13.3358 8.83579 13 9.25 13H13.25C13.9408 13 14.5 12.4408 14.5 11.75V6.25C14.5 5.55921 13.9408 5 13.25 5H9.25C8.83579 5 8.5 4.66421 8.5 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Itinerary3;
