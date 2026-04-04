import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartPen({
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
          d="M11.6162 9.16409C11.4189 9.22069 11.2104 9.25 11 9.25C10.3989 9.25 9.83398 9.01611 9.40918 8.59081C8.83208 8.01371 8.61228 7.1675 8.83638 6.3828L9.63177 3.58791C9.66517 3.46971 9.48858 3.3611 9.54108 3.25H3.74988C2.64528 3.25 1.74988 4.145 1.74988 5.25V13.75C1.74988 14.855 2.64528 15.75 3.74988 15.75H12.2499C13.3545 15.75 14.2499 14.855 14.2499 13.75V8.5961L14.0727 8.46449L11.6162 9.16409Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 8.5V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 10.75V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 6.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 9.19389V13.75C14.25 14.855 13.355 15.75 12.25 15.75H3.75C2.645 15.75 1.75 14.855 1.75 13.75V5.25C1.75 4.145 2.645 3.25 3.75 3.25H8.9515"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 6.20419L16.9571 3.043C17.3476 2.6525 17.3476 2.0193 16.9571 1.6288L16.3713 1.043C15.9808 0.652497 15.3476 0.652497 14.9571 1.043L11.7959 4.20419L11.0001 7.0001L13.7959 6.20419Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.7959 6.20419L16.9571 3.043C17.3476 2.6525 17.3476 2.0193 16.9571 1.6288L16.3713 1.043C15.9808 0.652497 15.3476 0.652497 14.9571 1.043L11.7959 4.20419L11.0001 7.0001L13.7959 6.20419Z"
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

export default SquareChartPen;
