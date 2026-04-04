import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HousePin({
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
          d="M14.5 14.25C14.914 14.25 15.25 13.914 15.25 13.5C15.25 13.086 14.914 12.75 14.5 12.75C14.086 12.75 13.75 13.086 13.75 13.5C13.75 13.914 14.086 14.25 14.5 14.25Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M15.25 7.8047V6.7461C15.25 6.4341 15.104 6.13889 14.855 5.94999L9.60501 1.96C9.24701 1.688 8.75199 1.688 8.39499 1.96L3.145 5.94999C2.896 6.13899 2.75 6.4341 2.75 6.7461V14.25C2.75 15.354 3.645 16.25 4.75 16.25H9.43701"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 17.25C14.5 17.25 11.75 15.741 11.75 13.5C11.75 11.981 12.981 10.75 14.5 10.75C16.019 10.75 17.25 11.981 17.25 13.5C17.25 15.741 14.5 17.25 14.5 17.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default HousePin;
