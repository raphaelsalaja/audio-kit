import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Users4({
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
          d="M12.75 14.25C14.038 14.25 15.128 14.024 15.949 13.776C16.439 13.628 16.767 13.14 16.658 12.641C16.265 10.844 14.665 9.49902 12.75 9.49902C11.9318 9.49902 11.1711 9.74454 10.5375 10.1659C10.9183 10.7689 11.1989 11.4415 11.3561 12.1603C11.4978 12.8095 11.4332 13.4248 11.2234 13.9666C11.1114 14.2557 12.6085 14.25 12.75 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.75 7C13.8546 7 14.75 6.10457 14.75 5C14.75 3.89543 13.8546 3 12.75 3C11.6454 3 10.75 3.89543 10.75 5C10.75 6.10457 11.6454 7 12.75 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 7C6.35457 7 7.25 6.10457 7.25 5C7.25 3.89543 6.35457 3 5.25 3C4.14543 3 3.25 3.89543 3.25 5C3.25 6.10457 4.14543 7 5.25 7Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.051 13.776C1.562 13.628 1.23299 13.141 1.34199 12.641C1.73499 10.844 3.335 9.49902 5.25 9.49902C7.16499 9.49902 8.76499 10.844 9.15799 12.641C9.26699 13.14 8.939 13.628 8.449 13.776C7.628 14.024 6.53799 14.25 5.25 14.25C3.962 14.25 2.87199 14.025 2.051 13.776Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 7C13.8546 7 14.75 6.10457 14.75 5C14.75 3.89543 13.8546 3 12.75 3C11.6454 3 10.75 3.89543 10.75 5C10.75 6.10457 11.6454 7 12.75 7Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.9243 14.2039C12.1946 14.2247 12.4587 14.2515 12.75 14.2515C14.038 14.2515 15.128 14.0254 15.949 13.7774C16.439 13.6295 16.767 13.1417 16.658 12.6426C16.265 10.8455 14.665 9.50049 12.75 9.50049C12.1982 9.50049 11.6823 9.63041 11.2042 9.83231"
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

export default Users4;
