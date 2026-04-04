import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallotCircle({
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
          d="M10.5001 6H15.2501C15.6642 6 16.0001 5.6641 16.0001 5.25C16.0001 4.8359 15.6642 4.5 15.2501 4.5H10.5001C10.086 4.5 9.75012 4.8359 9.75012 5.25C9.75012 5.6641 10.086 6 10.5001 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 12H10.5001C10.086 12 9.75012 12.3359 9.75012 12.75C9.75012 13.1641 10.086 13.5 10.5001 13.5H15.2501C15.6642 13.5 16.0001 13.1641 16.0001 12.75C16.0001 12.3359 15.6642 12 15.2501 12Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.00012 8C6.65698 8 8.00012 6.65685 8.00012 5C8.00012 3.34315 6.65698 2 5.00012 2C3.34327 2 2.00012 3.34315 2.00012 5C2.00012 6.65685 3.34327 8 5.00012 8Z"
          fill={fill}
        />
        <path
          d="M5.00012 16C6.65698 16 8.00012 14.6569 8.00012 13C8.00012 11.3431 6.65698 10 5.00012 10C3.34327 10 2.00012 11.3431 2.00012 13C2.00012 14.6569 3.34327 16 5.00012 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BallotCircle;
