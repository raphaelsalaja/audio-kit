import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function IdBadge2({
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
          d="M3.75 3.5C2.23079 3.5 1 4.73079 1 6.25V12.75C1 14.2692 2.23079 15.5 3.75 15.5H14.25C15.7692 15.5 17 14.2692 17 12.75V6.25C17 4.73079 15.7692 3.5 14.25 3.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.269 9.28799C6.9698 9.28799 7.538 8.72001 7.538 8.01901C7.538 7.31801 6.9698 6.75 6.269 6.75C5.5682 6.75 5 7.31801 5 8.01901C5 8.72001 5.5682 9.28799 6.269 9.28799Z"
          fill={fill}
        />
        <path
          d="M10.75 2.5V4.6C10.75 4.82091 10.5709 5 10.35 5H7.65C7.42909 5 7.25 4.82091 7.25 4.6V2.5C7.25 1.5335 8.0335 0.75 9 0.75C9.9665 0.75 10.75 1.5335 10.75 2.5Z"
          fill={fill}
        />
        <path
          d="M9.75 8.25C9.75 7.83579 10.0858 7.5 10.5 7.5H13.25C13.6642 7.5 14 7.83579 14 8.25C14 8.66421 13.6642 9 13.25 9H10.5C10.0858 9 9.75 8.66421 9.75 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 11.25C9.75 10.8358 10.0858 10.5 10.5 10.5H13.25C13.6642 10.5 14 10.8358 14 11.25C14 11.6642 13.6642 12 13.25 12H10.5C10.0858 12 9.75 11.6642 9.75 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.19146 12.5C8.51726 12.5 8.76706 12.1895 8.68336 11.8746C8.39946 10.8061 7.42666 10.019 6.26896 10.019C5.11126 10.019 4.13846 10.8061 3.85456 11.8746C3.77086 12.1895 4.02066 12.5 4.34646 12.5H8.19146Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default IdBadge2;
