import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilesContent({
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
          d="M11.25 4.25H7.25C6.145 4.25 5.25 5.145 5.25 6.25V14.25C5.25 15.355 6.145 16.25 7.25 16.25H13.25C14.355 16.25 15.25 15.355 15.25 14.25V8.25H12.25C11.698 8.25 11.25 7.802 11.25 7.25V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.25 13.25H4.25C3.145 13.25 2.25 12.355 2.25 11.25V3.25C2.25 2.145 3.145 1.25 4.25 1.25H9.25C10.355 1.25 11.25 2.145 11.25 3.25V4.302"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 14.25V6.25C5.25 5.145 6.145 4.25 7.25 4.25H11.336C11.601 4.25 11.856 4.355 12.043 4.543L14.957 7.457C15.145 7.645 15.25 7.899 15.25 8.164V14.25C15.25 15.355 14.355 16.25 13.25 16.25H7.25C6.145 16.25 5.25 15.355 5.25 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.25H12.25C11.698 8.25 11.25 7.802 11.25 7.25V4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 10.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 13.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 8.25H9"
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

export default FilesContent;
