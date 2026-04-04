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
          d="M6.269 9.28799C6.9698 9.28799 7.538 8.72001 7.538 8.01901C7.538 7.31801 6.9698 6.75 6.269 6.75C5.5682 6.75 5 7.31801 5 8.01901C5 8.72001 5.5682 9.28799 6.269 9.28799Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M10.75 4.25H14.25C15.355 4.25 16.25 5.145 16.25 6.25V12.75C16.25 13.855 15.355 14.75 14.25 14.75H3.75C2.645 14.75 1.75 13.855 1.75 12.75V6.25C1.75 5.145 2.645 4.25 3.75 4.25H7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 2.5V5.25H7.25V2.5C7.25 1.5335 8.0335 0.75 9 0.75C9.9665 0.75 10.75 1.5335 10.75 2.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 8.25H13.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 11.25H13.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.19149 12.5C8.51729 12.5 8.76709 12.1895 8.68339 11.8746C8.39949 10.8061 7.42669 10.019 6.26899 10.019C5.11129 10.019 4.13849 10.8061 3.85459 11.8746C3.77089 12.1895 4.02069 12.5 4.34649 12.5H8.19149Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default IdBadge2;
