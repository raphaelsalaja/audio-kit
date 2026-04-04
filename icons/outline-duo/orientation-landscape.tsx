import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OrientationLandscape({
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
          d="M14.25 2.75H9.25C8.14543 2.75 7.25 3.64543 7.25 4.75V13.25C7.25 14.3546 8.14543 15.25 9.25 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 2.75H9.25C8.14543 2.75 7.25 3.64543 7.25 4.75V13.25C7.25 14.3546 8.14543 15.25 9.25 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 13.25V5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 6.75L2.75 4.75L4.75 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 10.25C13.9404 10.25 14.5 9.69036 14.5 9C14.5 8.30964 13.9404 7.75 13.25 7.75C12.5596 7.75 12 8.30964 12 9C12 9.69036 12.5596 10.25 13.25 10.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 7.284V10.715C9 11.272 9.6 11.66 10.087 11.39C10.929 10.924 11.5 10.031 11.5 8.999C11.5 7.967 10.929 7.074 10.087 6.608C9.6 6.338 9 6.727 9 7.284Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default OrientationLandscape;
