import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageWriting({
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
          d="M14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L9.5 13.25H14.25C15.355 13.25 16.25 12.354 16.25 11.25V4.25C16.25 3.146 15.355 2.25 14.25 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L9.5 13.25H14.25C15.355 13.25 16.25 12.354 16.25 11.25V4.25C16.25 3.146 15.355 2.25 14.25 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.75C8.448 8.75 8 8.301 8 7.75C8 7.199 8.448 6.75 9 6.75C9.552 6.75 10 7.199 10 7.75C10 8.301 9.552 8.75 9 8.75Z"
          fill={fill}
          opacity="0.75"
          stroke="none"
        />
        <path
          d="M5.5 8.75C4.948 8.75 4.5 8.301 4.5 7.75C4.5 7.199 4.948 6.75 5.5 6.75C6.052 6.75 6.5 7.199 6.5 7.75C6.5 8.301 6.052 8.75 5.5 8.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.5 8.75C11.948 8.75 11.5 8.301 11.5 7.75C11.5 7.199 11.948 6.75 12.5 6.75C13.052 6.75 13.5 7.199 13.5 7.75C13.5 8.301 13.052 8.75 12.5 8.75Z"
          fill={fill}
          opacity="0.5"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MessageWriting;
