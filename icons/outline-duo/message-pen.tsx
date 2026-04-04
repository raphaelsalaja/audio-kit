import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessagePen({
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
          d="M13.7959 14.9542L16.9571 11.793C17.3476 11.4025 17.3476 10.7693 16.9571 10.3788L16.3713 9.793C15.9808 9.4025 15.3476 9.4025 14.9571 9.793L11.7959 12.9542L11.0001 15.7501L13.7959 14.9542Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L9.04368 14.4047L9.63187 12.3382C9.73676 11.9697 9.934 11.6341 10.2049 11.3632L13.3661 8.20201C14.125 7.44311 15.1659 7.13799 16.1515 7.28665C16.1844 7.29161 16.2172 7.2284 16.25 7.23438V4.25C16.25 3.146 15.355 2.25 14.25 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 6.5571V4.25C16.25 3.146 15.355 2.25 14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L8.325 14.1899"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 14.9542L16.9571 11.793C17.3476 11.4025 17.3476 10.7693 16.9571 10.3788L16.3713 9.793C15.9808 9.4025 15.3476 9.4025 14.9571 9.793L11.7959 12.9542L11.0001 15.7501L13.7959 14.9542Z"
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

export default MessagePen;
