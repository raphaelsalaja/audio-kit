import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FindReplace({
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
          d="M11.75 1.75H12.25C13.6307 1.75 14.75 2.8693 14.75 4.25V5.75L16.5 4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 16.25H5.75C4.3693 16.25 3.25 15.1307 3.25 13.75V12.25L1.5 14"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 8.25H9.75C8.9216 8.25 8.25 8.922 8.25 9.75V14.25C8.25 15.078 8.9216 15.75 9.75 15.75H14.25C15.0784 15.75 15.75 15.078 15.75 14.25V9.75C15.75 8.922 15.0784 8.25 14.25 8.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 8.25H9.75C8.9216 8.25 8.25 8.922 8.25 9.75V14.25C8.25 15.078 8.9216 15.75 9.75 15.75H14.25C15.0784 15.75 15.75 15.078 15.75 14.25V9.75C15.75 8.922 15.0784 8.25 14.25 8.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.1085 5.25C9.66239 3.5278 8.1116 2.25 6.25 2.25C4.041 2.25 2.25 4.041 2.25 6.25C2.25 8.1116 3.5279 9.6624 5.25 10.1084"
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

export default FindReplace;
