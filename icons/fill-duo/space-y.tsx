import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SpaceY({
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
          d="M9.00012 6.625C9.41434 6.625 9.75012 6.28921 9.75012 5.875C9.75012 5.46079 9.41434 5.125 9.00012 5.125C8.58591 5.125 8.25012 5.46079 8.25012 5.875C8.25012 6.28921 8.58591 6.625 9.00012 6.625Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00012 12.875C9.41434 12.875 9.75012 12.5392 9.75012 12.125C9.75012 11.7108 9.41434 11.375 9.00012 11.375C8.58591 11.375 8.25012 11.7108 8.25012 12.125C8.25012 12.5392 8.58591 12.875 9.00012 12.875Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00012 9.75C9.41434 9.75 9.75012 9.41421 9.75012 9C9.75012 8.58579 9.41434 8.25 9.00012 8.25C8.58591 8.25 8.25012 8.58579 8.25012 9C8.25012 9.41421 8.58591 9.75 9.00012 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75012 3.5H15.2501C15.6642 3.5 16.0001 3.1641 16.0001 2.75C16.0001 2.3359 15.6642 2 15.2501 2H2.75012C2.33602 2 2.00012 2.3359 2.00012 2.75C2.00012 3.1641 2.33602 3.5 2.75012 3.5Z"
          fill={fill}
        />
        <path
          d="M15.2501 14.5H2.75012C2.33602 14.5 2.00012 14.8359 2.00012 15.25C2.00012 15.6641 2.33602 16 2.75012 16H15.2501C15.6642 16 16.0001 15.6641 16.0001 15.25C16.0001 14.8359 15.6642 14.5 15.2501 14.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SpaceY;
