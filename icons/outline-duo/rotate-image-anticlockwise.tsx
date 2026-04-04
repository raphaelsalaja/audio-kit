import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RotateImageAnticlockwise({
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
          d="M3.75 7.75H10.25C11.3546 7.75 12.25 8.64543 12.25 9.75V14.25C12.25 14.3529 12.2422 14.454 12.2272 14.5528L9.70698 12.043C9.31698 11.652 8.68398 11.652 8.29298 12.043L4.06688 16.25H3.75C2.64543 16.25 1.75 15.3546 1.75 14.25V9.75C1.75 8.64543 2.64543 7.75 3.75 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.25 7.75H3.75C2.64543 7.75 1.75 8.64543 1.75 9.75V14.25C1.75 15.3546 2.64543 16.25 3.75 16.25H10.25C11.3546 16.25 12.25 15.3546 12.25 14.25V9.75C12.25 8.64543 11.3546 7.75 10.25 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 12C4.449 12 4 11.551 4 11C4 10.449 4.449 10 5 10C5.551 10 6 10.449 6 11C6 11.551 5.551 12 5 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.086 16.25L8.293 12.043C8.684 11.652 9.317 11.652 9.707 12.043L12.226 14.562"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 3.25H12.75C14.959 3.25 16.75 5.041 16.75 7.25V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 1.25L9.75 3.25L12 5.25"
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

export default RotateImageAnticlockwise;
