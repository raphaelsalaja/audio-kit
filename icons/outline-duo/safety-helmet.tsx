import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SafetyHelmet({
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
          d="M8.2558 2.25C7.70351 2.25 7.2558 2.69772 7.2558 3.25V4.24462C4.65281 4.99958 2.75 7.40158 2.75 10.248V12.25H15.25V10.248C15.25 7.40369 13.35 5.00315 10.75 4.24631V3.25C10.75 2.69772 10.3023 2.25 9.75 2.25H8.2558Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.75 3.998C13.35 4.755 15.25 7.155 15.25 10V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 12.25V10C2.75 7.156 4.65 4.755 7.25 3.998"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 7.75V3.25C7.25 2.698 7.698 2.25 8.25 2.25H9.75C10.302 2.25 10.75 2.698 10.75 3.25V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 12.25H3.25C2.42157 12.25 1.75 12.9216 1.75 13.75C1.75 14.5784 2.42157 15.25 3.25 15.25H14.75C15.5784 15.25 16.25 14.5784 16.25 13.75C16.25 12.9216 15.5784 12.25 14.75 12.25Z"
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

export default SafetyHelmet;
