import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sitemap4({
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
          d="M10.75 13.75C10.75 12.7838 11.5338 12 12.5 12H14C14.9662 12 15.75 12.7838 15.75 13.75V15.25C15.75 16.2162 14.9662 17 14 17H12.5C11.5338 17 10.75 16.2162 10.75 15.25V13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 13.75C2.25 12.7838 3.03379 12 4 12H5.5C6.46621 12 7.25 12.7838 7.25 13.75V15.25C7.25 16.2162 6.46621 17 5.5 17H4C3.03379 17 2.25 16.2162 2.25 15.25V13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Sitemap4;
