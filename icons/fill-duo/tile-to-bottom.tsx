import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TileToBottom({
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
          d="M14.2501 15.5H3.75012C2.23352 15.5 1.00012 14.2666 1.00012 12.75V5.25C1.00012 3.7334 2.23352 2.5 3.75012 2.5H14.2501C15.7667 2.5 17.0001 3.7334 17.0001 5.25V12.75C17.0001 14.2666 15.7667 15.5 14.2501 15.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.46974 8.28027C8.61624 8.42677 8.80765 8.5 9.00005 8.5C9.19245 8.5 9.38385 8.42677 9.53035 8.28027L11.5304 6.28027C11.8234 5.98727 11.8234 5.51275 11.5304 5.21985C11.2374 4.92695 10.7628 4.92685 10.4699 5.21985L9.75017 5.93945V3.25C9.75017 2.8359 9.41427 2.5 9.00017 2.5C8.58607 2.5 8.25017 2.8359 8.25017 3.25V5.93945L7.53044 5.21985C7.23744 4.92685 6.76286 4.92685 6.46996 5.21985C6.17706 5.51285 6.17696 5.98737 6.46996 6.28027L8.46974 8.28027Z"
          fill={fill}
        />
        <path
          d="M13.2501 10H4.75012C4.33591 10 4.00012 10.3358 4.00012 10.75V12.25C4.00012 12.6642 4.33591 13 4.75012 13H13.2501C13.6643 13 14.0001 12.6642 14.0001 12.25V10.75C14.0001 10.3358 13.6643 10 13.2501 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TileToBottom;
