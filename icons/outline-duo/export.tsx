import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Export({
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
          d="M3.25 9C3.25 7.89543 4.14543 7 5.25 7H12.75C13.8546 7 14.75 7.89543 14.75 9V14.25C14.75 15.3546 13.8546 16.25 12.75 16.25H5.25C4.14543 16.25 3.25 15.3546 3.25 14.25V9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.75 7.25H12.75C13.855 7.25 14.75 8.145 14.75 9.25V14.25C14.75 15.355 13.855 16.25 12.75 16.25H5.25C4.145 16.25 3.25 15.355 3.25 14.25V9.25C3.25 8.145 4.145 7.25 5.25 7.25H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 4.25L9 1.25L12 4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 1.25V12"
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

export default Export;
