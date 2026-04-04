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
          d="M10.75 1.75V3.6C10.75 3.82091 10.5709 4 10.35 4H7.65C7.42909 4 7.25 3.82091 7.25 3.6V1.75C7.25 0.7835 8.0335 0 9 0C9.9665 0 10.75 0.7835 10.75 1.75Z"
          fill={secondaryfill}
        />
        <path
          d="M5.75 3.5H3.75C2.233 3.5 1 4.733 1 6.25V12.75C1 14.267 2.233 15.5 3.75 15.5H14.25C15.767 15.5 17 14.267 17 12.75V6.25C17 4.733 15.767 3.5 14.25 3.5H12.25V3.6C12.25 4.64936 11.3993 5.5 10.35 5.5H7.65C6.60066 5.5 5.75 4.64934 5.75 3.6V3.5ZM8.68339 11.8746C8.76709 12.1895 8.51729 12.5 8.19149 12.5H4.34649C4.02069 12.5 3.77089 12.1895 3.85459 11.8746C4.13849 10.8061 5.11129 10.019 6.26899 10.019C7.42669 10.019 8.39949 10.8061 8.68339 11.8746ZM6.269 6.75C6.97 6.75 7.538 7.31801 7.538 8.01901C7.538 8.72001 6.97 9.28799 6.269 9.28799C5.568 9.28799 5 8.72001 5 8.01901C5 7.31801 5.568 6.75 6.269 6.75ZM13.25 12H10.5C10.086 12 9.75 11.664 9.75 11.25C9.75 10.836 10.086 10.5 10.5 10.5H13.25C13.664 10.5 14 10.836 14 11.25C14 11.664 13.664 12 13.25 12ZM10.5 9H13.25C13.664 9 14 8.664 14 8.25C14 7.836 13.664 7.5 13.25 7.5H10.5C10.086 7.5 9.75 7.836 9.75 8.25C9.75 8.664 10.086 9 10.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default IdBadge2;
