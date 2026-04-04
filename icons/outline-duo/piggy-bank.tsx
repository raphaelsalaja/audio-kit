import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PiggyBank({
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
          d="M12.75 7.25C14.407 7.25 15.75 5.907 15.75 4.25C15.75 2.593 14.407 1.25 12.75 1.25C11.093 1.25 9.75 2.593 9.75 4.25C9.75 5.907 11.093 7.25 12.75 7.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 8C5.836 8 5.5 7.664 5.5 7.25C5.5 6.836 5.836 6.5 6.25 6.5C6.664 6.5 7 6.836 7 7.25C7 7.664 6.664 8 6.25 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.75 7.25C14.407 7.25 15.75 5.907 15.75 4.25C15.75 2.593 14.407 1.25 12.75 1.25C11.093 1.25 9.75 2.593 9.75 4.25C9.75 5.907 11.093 7.25 12.75 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 3.5V5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.00877 3.42276C6.75797 3.13356 6.43487 2.85167 6.02087 2.62497C4.88387 2.00197 3.78588 2.19297 3.48688 2.25497L4.86488 4.642C4.16788 5.229 3.61088 5.94595 3.24488 6.75095L1.24988 7.00095V11.0009L3.24488 11.2509C3.66688 12.1769 4.33888 12.99 5.18988 13.618L5.49988 16.2509H7.74988L7.83488 14.809C8.36888 14.93 8.92388 15.0009 9.49988 15.0009C10.0759 15.0009 10.6319 14.93 11.1649 14.809L11.2499 16.2509H13.4999L13.8099 13.618C15.2589 12.548 16.1969 10.949 16.2479 9.15396"
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

export default PiggyBank;
