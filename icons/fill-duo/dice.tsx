import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dice({
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
          d="M1 6.75C1 5.23128 2.23069 4 3.75 4H10.75C12.2693 4 13.5 5.23128 13.5 6.75V13.75C13.5 15.2687 12.2693 16.5 10.75 16.5H3.75C2.23069 16.5 1 15.2687 1 13.75V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 13.5C5.552 13.5 6 13.0523 6 12.5C6 11.9477 5.552 11.5 5 11.5C4.448 11.5 4 11.9477 4 12.5C4 13.0523 4.448 13.5 5 13.5Z"
          fill={fill}
        />
        <path
          d="M9.5 9C10.052 9 10.5 8.5523 10.5 8C10.5 7.4477 10.052 7 9.5 7C8.948 7 8.5 7.4477 8.5 8C8.5 8.5523 8.948 9 9.5 9Z"
          fill={fill}
        />
        <path
          d="M7.25 11.25C7.802 11.25 8.25 10.8023 8.25 10.25C8.25 9.6977 7.802 9.25 7.25 9.25C6.698 9.25 6.25 9.6977 6.25 10.25C6.25 10.8023 6.698 11.25 7.25 11.25Z"
          fill={fill}
        />
        <path
          d="M7.74161 0.529866C6.23942 0.302451 4.83829 1.33565 4.61096 2.83726L4.43494 4H10.75C12.2693 4 13.5 5.23128 13.5 6.75V13.75C13.5 13.8184 13.4975 13.8861 13.4926 13.9533C14.7077 13.8257 15.731 12.8936 15.9224 11.6294L16.9701 4.7083C17.1975 3.20669 16.1649 1.80507 14.6627 1.57765L7.74161 0.529866Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Dice;
