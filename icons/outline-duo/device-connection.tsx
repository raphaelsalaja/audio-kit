import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeviceConnection({
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
          d="M4.75 3.75C3.64543 3.75 2.75 4.64543 2.75 5.75V6.59125C5.9274 7.05948 8.53246 9.28566 9.54535 12.25H14.25C15.3546 12.25 16.25 11.3546 16.25 10.25V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 6V5.75C2.75 4.645 3.645 3.75 4.75 3.75H14.25C15.355 3.75 16.25 4.645 16.25 5.75V10.25C16.25 11.355 15.355 12.25 14.25 12.25H10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.5 16C0.949 16 0.5 15.551 0.5 15C0.5 14.449 0.949 14 1.5 14C2.051 14 2.5 14.449 2.5 15C2.5 15.551 2.051 16 1.5 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.25 11.75H1.5C3.295 11.75 4.75 13.205 4.75 15V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 8.75H1.5C4.952 8.75 7.75 11.548 7.75 15V15.25"
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

export default DeviceConnection;
