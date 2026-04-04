import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClockCoins({
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
          d="M14.25 10.25H9.75C9.1977 10.25 8.75 10.698 8.75 11.25V12.25C8.75 12.802 9.1977 13.25 9.75 13.25H14.25C14.8023 13.25 15.25 12.802 15.25 12.25V11.25C15.25 10.698 14.8023 10.25 14.25 10.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 7.25H10.75C10.1977 7.25 9.75 7.698 9.75 8.25V9.25C9.75 9.802 10.1977 10.25 10.75 10.25H15.25C15.8023 10.25 16.25 9.802 16.25 9.25V8.25C16.25 7.698 15.8023 7.25 15.25 7.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 13.25H10.75C10.1977 13.25 9.75 13.698 9.75 14.25V15.25C9.75 15.802 10.1977 16.25 10.75 16.25H15.25C15.8023 16.25 16.25 15.802 16.25 15.25V14.25C16.25 13.698 15.8023 13.25 15.25 13.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 4V7L4.5 8.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.4677 4.25C10.5435 2.7515 8.8896 1.75 7 1.75C4.101 1.75 1.75 4.1011 1.75 7C1.75 9.4668 3.4574 11.5205 5.75 12.0835"
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

export default ClockCoins;
