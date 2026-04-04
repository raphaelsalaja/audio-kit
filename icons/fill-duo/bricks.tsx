import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bricks({
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
          d="M3.5 14.75C3.5 13.7833 4.28393 13 5.25 13L8.25 13C9.21607 13 10 13.7833 10 14.75V15.25C10 16.2167 9.21607 17 8.25 17H5.25C4.28393 17 3.5 16.2167 3.5 15.25L3.5 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 10.75C1 9.78334 1.78393 9 2.75 9L5.75 9C6.71607 9 7.5 9.78334 7.5 10.75V11.25C7.5 12.2167 6.71607 13 5.75 13H2.75C1.78393 13 1 12.2167 1 11.25L1 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
        <path
          d="M3.5 6.75C3.5 5.78334 4.28393 5 5.25 5L8.25 5C9.21607 5 10 5.78334 10 6.75V7.25C10 8.21666 9.21607 9 8.25 9H5.25C4.28393 9 3.5 8.21666 3.5 7.25L3.5 6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 2.75C1 1.78334 1.78393 1 2.75 1L5.75 1C6.71607 1 7.5 1.78334 7.5 2.75V3.25C7.5 4.21666 6.71607 5 5.75 5H2.75C1.78393 5 1 4.21666 1 3.25L1 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10 14.75C10 13.7833 10.7839 13 11.75 13H15.25C16.2161 13 17 13.7833 17 14.75V15.25C17 16.2167 16.2161 17 15.25 17H11.75C10.7839 17 10 16.2167 10 15.25L10 14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.5 10.75C7.5 9.78334 8.28393 9 9.25 9H12.75C13.7161 9 14.5 9.78334 14.5 10.75V11.25C14.5 12.2167 13.7161 13 12.75 13H9.25C8.28393 13 7.5 12.2167 7.5 11.25L7.5 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10 6.75C10 5.78334 10.7839 5 11.75 5H15.25C16.2161 5 17 5.78334 17 6.75V7.25C17 8.21666 16.2161 9 15.25 9H11.75C10.7839 9 10 8.21666 10 7.25L10 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
        <path
          d="M7.5 2.75C7.5 1.78334 8.28393 1 9.25 1H12.75C13.7161 1 14.5 1.78334 14.5 2.75V3.25C14.5 4.21666 13.7161 5 12.75 5H9.25C8.28393 5 7.5 4.21666 7.5 3.25L7.5 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Bricks;
