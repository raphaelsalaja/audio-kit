import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DividerYDotted({
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
          d="M2.75012 9.75C3.16434 9.75 3.50012 9.41421 3.50012 9C3.50012 8.58579 3.16434 8.25 2.75012 8.25C2.33591 8.25 2.00012 8.58579 2.00012 9C2.00012 9.41421 2.33591 9.75 2.75012 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.87512 9.75C6.28934 9.75 6.62512 9.41421 6.62512 9C6.62512 8.58579 6.28934 8.25 5.87512 8.25C5.46091 8.25 5.12512 8.58579 5.12512 9C5.12512 9.41421 5.46091 9.75 5.87512 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00012 9.75C9.41434 9.75 9.75012 9.41421 9.75012 9C9.75012 8.58579 9.41434 8.25 9.00012 8.25C8.58591 8.25 8.25012 8.58579 8.25012 9C8.25012 9.41421 8.58591 9.75 9.00012 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.1251 9.75C12.5393 9.75 12.8751 9.41421 12.8751 9C12.8751 8.58579 12.5393 8.25 12.1251 8.25C11.7109 8.25 11.3751 8.58579 11.3751 9C11.3751 9.41421 11.7109 9.75 12.1251 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 9.75C15.6643 9.75 16.0001 9.41421 16.0001 9C16.0001 8.58579 15.6643 8.25 15.2501 8.25C14.8359 8.25 14.5001 8.58579 14.5001 9C14.5001 9.41421 14.8359 9.75 15.2501 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.0001 3.75V2.75C16.0001 2.3359 15.6642 2 15.2501 2H2.75012C2.33602 2 2.00012 2.3359 2.00012 2.75V3.75C2.00012 5.2666 3.23352 6.5 4.75012 6.5H13.2501C14.7667 6.5 16.0001 5.2666 16.0001 3.75Z"
          fill={fill}
        />
        <path
          d="M16.0001 14.25V15.25C16.0001 15.6641 15.6642 16 15.2501 16H2.75012C2.33602 16 2.00012 15.6641 2.00012 15.25V14.25C2.00012 12.7334 3.23352 11.5 4.75012 11.5H13.2501C14.7667 11.5 16.0001 12.7334 16.0001 14.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DividerYDotted;
