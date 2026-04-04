import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodeEditor({
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
          d="M3.75 2C2.23128 2 1 3.23069 1 4.75V13.25C1 14.7693 2.23128 16 3.75 16H14.25C15.7687 16 17 14.7693 17 13.25V4.75C17 3.23069 15.7687 2 14.25 2H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 2V16H3.75C2.23128 16 1 14.7693 1 13.25V4.75C1 3.23069 2.23128 2 3.75 2H5Z"
          fill={fill}
        />
        <path
          d="M10 10.25C10 9.83579 10.3358 9.5 10.75 9.5H13.75C14.1642 9.5 14.5 9.83579 14.5 10.25C14.5 10.6642 14.1642 11 13.75 11H10.75C10.3358 11 10 10.6642 10 10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.5 7.75C8.5 7.33579 8.83579 7 9.25 7H12C12.4142 7 12.75 7.33579 12.75 7.75C12.75 8.16421 12.4142 8.5 12 8.5H9.25C8.83579 8.5 8.5 8.16421 8.5 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.5 12.75C8.5 12.3358 8.83579 12 9.25 12H11.25C11.6642 12 12 12.3358 12 12.75C12 13.1642 11.6642 13.5 11.25 13.5H9.25C8.83579 13.5 8.5 13.1642 8.5 12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 5.25C7 4.83579 7.33579 4.5 7.75 4.5H9.25C9.66421 4.5 10 4.83579 10 5.25C10 5.66421 9.66421 6 9.25 6H7.75C7.33579 6 7 5.66421 7 5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CodeEditor;
