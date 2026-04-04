import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function House5({
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
          d="M9.44642 1.14733C9.18122 0.950889 8.81878 0.950889 8.55358 1.14733L2.20858 5.84733C1.76278 6.17775 1.5 6.69936 1.5 7.254V13.75C1.5 15.2692 2.73079 16.5 4.25 16.5H13.75C15.2692 16.5 16.5 15.2692 16.5 13.75V7.254C16.5 6.69936 16.2374 6.17787 15.7916 5.84746L9.44642 1.14733Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.5 4.89072L13 3.77961V2.75C13 2.33579 13.3358 2 13.75 2C14.1642 2 14.5 2.33579 14.5 2.75V4.89072Z"
          fill={fill}
        />
        <path
          d="M9 16.5V12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12V16.5H9Z"
          fill={fill}
        />
        <path
          d="M10 9.75C10 9.33579 10.3358 9 10.75 9H12.25C12.6642 9 13 9.33579 13 9.75C13 10.1642 12.6642 10.5 12.25 10.5H10.75C10.3358 10.5 10 10.1642 10 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default House5;
