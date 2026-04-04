import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RotateImageClockwise({
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
          d="M7.75 7.75H14.25C15.3546 7.75 16.25 8.64543 16.25 9.75V14.25C16.25 14.3529 16.2422 14.454 16.2272 14.5528L13.707 12.043C13.317 11.652 12.684 11.652 12.293 12.043L8.06688 16.25H7.75C6.64543 16.25 5.75 15.3546 5.75 14.25V9.75C5.75 8.64543 6.64543 7.75 7.75 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.25 7.75H7.75C6.64543 7.75 5.75 8.64543 5.75 9.75V14.25C5.75 15.3546 6.64543 16.25 7.75 16.25H14.25C15.3546 16.25 16.25 15.3546 16.25 14.25V9.75C16.25 8.64543 15.3546 7.75 14.25 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12C8.449 12 8 11.551 8 11C8 10.449 8.449 10 9 10C9.551 10 10 10.449 10 11C10 11.551 9.551 12 9 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.086 16.25L12.293 12.043C12.684 11.652 13.317 11.652 13.707 12.043L16.226 14.562"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 3.25H5.25C3.041 3.25 1.25 5.041 1.25 7.25V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 1.25L8.25 3.25L6 5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default RotateImageClockwise;
