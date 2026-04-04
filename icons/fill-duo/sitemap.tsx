import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sitemap({
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
          d="M9.75 5.25C9.75 4.83579 9.41421 4.5 9 4.5C8.58579 4.5 8.25 4.83579 8.25 5.25V8H5.25C3.73079 8 2.5 9.23079 2.5 10.75V12.25C2.5 12.6642 2.83579 13 3.25 13C3.66421 13 4 12.6642 4 12.25V10.75C4 10.0592 4.55921 9.5 5.25 9.5H8.25V12.25C8.25 12.6642 8.58579 13 9 13C9.41421 13 9.75 12.6642 9.75 12.25V9.5H12.75C13.4408 9.5 14 10.0592 14 10.75V12.25C14 12.6642 14.3358 13 14.75 13C15.1642 13 15.5 12.6642 15.5 12.25V10.75C15.5 9.23079 14.2692 8 12.75 8H9.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 3.5C6.5 2.11979 7.61979 1 9 1C10.3802 1 11.5 2.11979 11.5 3.5C11.5 4.88021 10.3802 6 9 6C7.61979 6 6.5 4.88021 6.5 3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.5 14C6.5 12.6198 7.61979 11.5 9 11.5C10.3802 11.5 11.5 12.6198 11.5 14C11.5 15.3802 10.3802 16.5 9 16.5C7.61979 16.5 6.5 15.3802 6.5 14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.75 14C0.75 12.6198 1.86979 11.5 3.25 11.5C4.63021 11.5 5.75 12.6198 5.75 14C5.75 15.3802 4.63021 16.5 3.25 16.5C1.86979 16.5 0.75 15.3802 0.75 14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.25 14C12.25 12.6198 13.3698 11.5 14.75 11.5C16.1302 11.5 17.25 12.6198 17.25 14C17.25 15.3802 16.1302 16.5 14.75 16.5C13.3698 16.5 12.25 15.3802 12.25 14Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Sitemap;
