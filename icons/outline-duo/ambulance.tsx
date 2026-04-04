import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ambulance({
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
          d="M1.25 5.75C1.25 4.64543 2.14543 3.75 3.25 3.75H10.25C11.3546 3.75 12.25 4.64543 12.25 5.75V11.75C12.25 11.9231 12.228 12.091 12.1867 12.2511C11.3399 12.2812 10.6463 12.913 10.5204 13.7319C10.432 13.7438 10.3417 13.75 10.25 13.75H6.73228C6.61097 12.9019 5.88162 12.25 5 12.25C4.11838 12.25 3.38903 12.9019 3.26772 13.75H3.25C2.14543 13.75 1.25 12.8546 1.25 11.75V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.25 3.75V2.5C6.25 2.086 6.586 1.75 7 1.75C7.414 1.75 7.75 2.086 7.75 2.5V3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.519 13.75H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.268 13.75H3.25C2.145 13.75 1.25 12.855 1.25 11.75V5.75C1.25 4.645 2.145 3.75 3.25 3.75H10.25C11.355 3.75 12.25 4.645 12.25 5.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 5.75H14.454C14.794 5.75 15.111 5.923 15.295 6.209L17.091 9.003C17.195 9.164 17.25 9.352 17.25 9.544V11.75C17.25 12.855 16.355 13.75 15.25 13.75H14"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 9.25H17.153"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 15.75C5.9665 15.75 6.75 14.9665 6.75 14C6.75 13.0335 5.9665 12.25 5 12.25C4.0335 12.25 3.25 13.0335 3.25 14C3.25 14.9665 4.0335 15.75 5 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 15.75C13.2165 15.75 14 14.9665 14 14C14 13.0335 13.2165 12.25 12.25 12.25C11.2835 12.25 10.5 13.0335 10.5 14C10.5 14.9665 11.2835 15.75 12.25 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 6.25V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 8.25H4.75"
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

export default Ambulance;
