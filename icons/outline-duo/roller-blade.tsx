import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RollerBlade({
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
          d="M7.55 8.122L13.086 2.586C13.729 1.943 14.771 1.943 15.414 2.586C16.057 3.229 16.057 4.271 15.414 4.914L9.862 10.466"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.696 13.543C7.444 14.802 6.332 15.75 5 15.75C3.481 15.75 2.25 14.519 2.25 13C2.25 11.481 3.481 10.25 5 10.25C5.759 10.25 6.447 10.558 6.945 11.055"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 13L8.889 9.111"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 7.5C8.038 7.5 10.5 9.962 10.5 13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.55 8.122L13.086 2.586C13.729 1.943 14.771 1.943 15.414 2.586C16.057 3.229 16.057 4.271 15.414 4.914L9.862 10.466"
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

export default RollerBlade;
