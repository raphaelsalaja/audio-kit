import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Page2({
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
          d="M4.75 1C3.23079 1 2 2.23079 2 3.75V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V3.75C16 2.23079 14.7692 1 13.25 1H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 11.25C5 10.8358 5.33579 10.5 5.75 10.5H9C9.41421 10.5 9.75 10.8358 9.75 11.25C9.75 11.6642 9.41421 12 9 12H5.75C5.33579 12 5 11.6642 5 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 8.25C5 7.83579 5.33579 7.5 5.75 7.5H12.25C12.6642 7.5 13 7.83579 13 8.25C13 8.66421 12.6642 9 12.25 9H5.75C5.33579 9 5 8.66421 5 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 5.25C5 4.83579 5.33579 4.5 5.75 4.5H12.25C12.6642 4.5 13 4.83579 13 5.25C13 5.66421 12.6642 6 12.25 6H5.75C5.33579 6 5 5.66421 5 5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Page2;
