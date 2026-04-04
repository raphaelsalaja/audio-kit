import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SoapDispenser({
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
          d="M7.25 5.75C7.25 5.75 4.75 6.021 4.75 9.25V14.25C4.75 15.355 5.645 16.25 6.75 16.25H11.25C12.355 16.25 13.25 15.355 13.25 14.25V12.75V9.25C13.25 6 10.75 5.75 10.75 5.75H7.25ZM13.25 12.75L13 9.25H8.75V12.75H13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.75 1.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 5.75V2.75C7.25 2.198 7.698 1.75 8.25 1.75H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 12.75H8.75V9.25H13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 9.25C4.75 6.021 7.25 5.75 7.25 5.75H10.75C10.75 5.75 13.25 6 13.25 9.25V14.25C13.25 15.355 12.355 16.25 11.25 16.25H6.75C5.645 16.25 4.75 15.355 4.75 14.25V9.25Z"
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

export default SoapDispenser;
