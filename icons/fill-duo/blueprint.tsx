import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Blueprint({
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
          d="M1 4.25C1 3.28379 1.78379 2.5 2.75 2.5H7H13.25C14.2162 2.5 15 3.28379 15 4.25V8H15.25C16.2162 8 17 8.78379 17 9.75V13.75C17 14.7162 16.2162 15.5 15.25 15.5H7H2.75C1.78379 15.5 1 14.7162 1 13.75V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.75 6.5H8.25C8.66421 6.5 9 6.83579 9 7.25C9 7.66421 8.66421 8 8.25 8H6.75V6.5Z"
          fill={fill}
        />
        <path
          d="M7 2.5V9.75C7 10.1642 6.66421 10.5 6.25 10.5C5.83579 10.5 5.5 10.1642 5.5 9.75V2.5H7Z"
          fill={fill}
        />
        <path
          d="M6.25 12.25C6.66421 12.25 7 12.5858 7 13V15.5H5.5V13C5.5 12.5858 5.83579 12.25 6.25 12.25Z"
          fill={fill}
        />
        <path
          d="M15 8V6.5H11.5C11.0858 6.5 10.75 6.83579 10.75 7.25C10.75 7.66421 11.0858 8 11.5 8H15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Blueprint;
