import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OrientationPortrait({
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
          d="M11.75 8.5C12.4404 8.5 13 7.94036 13 7.25C13 6.55964 12.4404 6 11.75 6C11.0596 6 10.5 6.55964 10.5 7.25C10.5 7.94036 11.0596 8.5 11.75 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.135 11.5C14.03 11.5 14.411 10.901 14.141 10.413C13.675 9.571 12.782 9 11.75 9C10.718 9 9.82499 9.571 9.35899 10.413C9.08899 10.9 9.47099 11.5 10.028 11.5H13.135Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default OrientationPortrait;
