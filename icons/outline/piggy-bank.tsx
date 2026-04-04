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
          d="M6.25 8C5.836 8 5.5 7.664 5.5 7.25C5.5 6.836 5.836 6.5 6.25 6.5C6.664 6.5 7 6.836 7 7.25C7 7.664 6.664 8 6.25 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.75 7.25C14.407 7.25 15.75 5.907 15.75 4.25C15.75 2.593 14.407 1.25 12.75 1.25C11.093 1.25 9.75 2.593 9.75 4.25C9.75 5.907 11.093 7.25 12.75 7.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 3.5V5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.00879 3.42279C6.75799 3.13359 6.4349 2.8517 6.0209 2.625C4.8839 2.002 3.78591 2.193 3.48691 2.255L4.8649 4.642C4.1679 5.229 3.6109 5.94601 3.2449 6.75101L1.24991 7.00101V11.001L3.2449 11.251C3.6669 12.177 4.33891 12.99 5.18991 13.618L5.49991 16.251H7.74991L7.8349 14.809C8.3689 14.93 8.92391 15.001 9.49991 15.001C10.0759 15.001 10.6319 14.93 11.1649 14.809L11.2499 16.251H13.4999L13.8099 13.618C15.2589 12.548 16.1969 10.949 16.2479 9.15399"
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
