import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowLeft({
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
          d="M6.25012 4.5H3.75012C3.33591 4.5 3.00012 4.83579 3.00012 5.25V12.75C3.00012 13.1642 3.33591 13.5 3.75012 13.5H6.25012C6.66434 13.5 7.00012 13.1642 7.00012 12.75V5.25C7.00012 4.83579 6.66434 4.5 6.25012 4.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowLeft;
