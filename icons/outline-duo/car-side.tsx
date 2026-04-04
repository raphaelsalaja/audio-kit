import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CarSide({
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
          d="M0.75 8.25H15.25C16.3546 8.25 17.25 9.14543 17.25 10.25V12.25C17.25 12.8023 16.8023 13.25 16.25 13.25H15.2323C15.111 12.4019 14.3816 11.75 13.5 11.75C12.6184 11.75 11.889 12.4019 11.7677 13.25H5.73228C5.61097 12.4019 4.88162 11.75 4 11.75C3.11838 11.75 2.38903 12.4019 2.26772 13.25H1.75C1.19772 13.25 0.75 12.8023 0.75 12.25V8.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.75 13.25H11.77"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 3.75V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 13.25H1.75C1.198 13.25 0.75 12.802 0.75 12.25V8.722C0.75 8.412 0.822 8.105 0.961 7.828L2.447 4.856C2.786 4.178 3.478 3.75 4.236 3.75H6.25H8H10.264C11.022 3.75 11.714 4.178 12.053 4.856L13.75 8.25H15.25C16.355 8.25 17.25 9.145 17.25 10.25V12.25C17.25 12.802 16.802 13.25 16.25 13.25H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.583 8.25H1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 15.25C4.9665 15.25 5.75 14.4665 5.75 13.5C5.75 12.5335 4.9665 11.75 4 11.75C3.0335 11.75 2.25 12.5335 2.25 13.5C2.25 14.4665 3.0335 15.25 4 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 15.25C14.4665 15.25 15.25 14.4665 15.25 13.5C15.25 12.5335 14.4665 11.75 13.5 11.75C12.5335 11.75 11.75 12.5335 11.75 13.5C11.75 14.4665 12.5335 15.25 13.5 15.25Z"
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

export default CarSide;
