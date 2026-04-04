import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function IdBadge({
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
          d="M5.75 3.5H3.75C2.233 3.5 1 4.733 1 6.25V12.75C1 14.267 2.233 15.5 3.75 15.5H14.25C15.767 15.5 17 14.267 17 12.75V6.25C17 4.733 15.767 3.5 14.25 3.5H12.25V3.6C12.25 4.64936 11.3993 5.5 10.35 5.5H7.65C6.60066 5.5 5.75 4.64934 5.75 3.6V3.5ZM10.5 12H13.25C13.664 12 14 11.664 14 11.25C14 10.836 13.664 10.5 13.25 10.5H10.5C10.086 10.5 9.75 10.836 9.75 11.25C9.75 11.664 10.086 12 10.5 12ZM13.25 9H10.5C10.086 9 9.75 8.664 9.75 8.25C9.75 7.836 10.086 7.5 10.5 7.5H13.25C13.664 7.5 14 7.836 14 8.25C14 8.664 13.664 9 13.25 9ZM4 8.25C4 7.83579 4.33579 7.5 4.75 7.5H7.75C8.16421 7.5 8.5 7.83579 8.5 8.25V11.25C8.5 11.6642 8.16421 12 7.75 12H4.75C4.33579 12 4 11.6642 4 11.25V8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default IdBadge;
