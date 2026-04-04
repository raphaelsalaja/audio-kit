import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DividerY({
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
          d="M1.25012 9C1.25012 8.5859 1.58602 8.25 2.00012 8.25H16.0001C16.4142 8.25 16.7501 8.5859 16.7501 9C16.7501 9.4141 16.4142 9.75 16.0001 9.75H2.00012C1.58602 9.75 1.25012 9.4141 1.25012 9Z"
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

export default DividerY;
