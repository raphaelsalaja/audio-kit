import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SplitVideo({
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
          d="M1 9.75C1 8.78379 1.78379 8 2.75 8H9C9.41421 8 9.75 8.33579 9.75 8.75V13.25C9.75 13.6642 9.41421 14 9 14H2.75C1.78379 14 1 13.2162 1 12.25V9.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M17 9.75C17 8.78379 16.2162 8 15.25 8H9C8.58579 8 8.25 8.33579 8.25 8.75V13.25C8.25 13.6642 8.58579 14 9 14H15.25C16.2162 14 17 13.2162 17 12.25V9.75Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
        <path
          d="M8.25 1C7.28379 1 6.5 1.78379 6.5 2.75V4.25C6.5 4.43167 6.56594 4.60716 6.68557 4.74388L8.25 6.5318V16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V6.5318L11.3144 4.74388C11.4341 4.60716 11.5 4.43167 11.5 4.25V2.75C11.5 1.78379 10.7162 1 9.75 1H8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SplitVideo;
