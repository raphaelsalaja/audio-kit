import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sitemap5({
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
          d="M9.75 5.25C9.75 4.83579 9.41421 4.5 9 4.5C8.58579 4.5 8.25 4.83579 8.25 5.25V8H6.75C5.23079 8 4 9.23079 4 10.75V12.75C4 13.1642 4.33579 13.5 4.75 13.5C5.16421 13.5 5.5 13.1642 5.5 12.75V10.75C5.5 10.0592 6.05921 9.5 6.75 9.5H9H11.25C11.9408 9.5 12.5 10.0592 12.5 10.75V12.75C12.5 13.1642 12.8358 13.5 13.25 13.5C13.6642 13.5 14 13.1642 14 12.75V10.75C14 9.23079 12.7692 8 11.25 8H9.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 2.75C6.5 1.78379 7.28379 1 8.25 1H9.75C10.7162 1 11.5 1.78379 11.5 2.75V4.25C11.5 5.21621 10.7162 6 9.75 6H8.25C7.28379 6 6.5 5.21621 6.5 4.25V2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.75 14.5C10.75 13.1198 11.8698 12 13.25 12C14.6302 12 15.75 13.1198 15.75 14.5C15.75 15.8802 14.6302 17 13.25 17C11.8698 17 10.75 15.8802 10.75 14.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 14.5C2.25 13.1198 3.36979 12 4.75 12C6.13021 12 7.25 13.1198 7.25 14.5C7.25 15.8802 6.13021 17 4.75 17C3.36979 17 2.25 15.8802 2.25 14.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Sitemap5;
