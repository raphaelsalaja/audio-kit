import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhotoPlus({
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
          d="M4 14.75L9.836 8.914C10.617 8.133 11.883 8.133 12.664 8.914L16.25 12.5V12.75C16.25 13.855 15.355 14.75 14.25 14.75H4Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4 14.75L9.836 8.914C10.617 8.133 11.883 8.133 12.664 8.914L16.25 12.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 8.5C6.44 8.5 7 7.94 7 7.25C7 6.56 6.44 6 5.75 6C5.06 6 4.5 6.56 4.5 7.25C4.5 7.94 5.06 8.5 5.75 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 1.25V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 3.75H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.79289 3.25H3.75C2.645 3.25 1.75 4.145 1.75 5.25V12.75C1.75 13.855 2.645 14.75 3.75 14.75H14.25C15.355 14.75 16.25 13.855 16.25 12.75V8.47638"
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

export default PhotoPlus;
