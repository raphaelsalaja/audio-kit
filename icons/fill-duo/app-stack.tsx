import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AppStack({
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
          d="M3.75012 3C2.23352 3 1.00012 4.2334 1.00012 5.75V12.25C1.00012 13.7666 2.23352 15 3.75012 15H6.00012V3H3.75012Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 3C15.7667 3 17.0001 4.2334 17.0001 5.75V12.25C17.0001 13.7666 15.7667 15 14.2501 15H12.0001V3H14.2501Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.7501 1.5H7.25012C5.73134 1.5 4.50012 2.73122 4.50012 4.25V13.75C4.50012 15.2688 5.73134 16.5 7.25012 16.5H10.7501C12.2689 16.5 13.5001 15.2688 13.5001 13.75V4.25C13.5001 2.73122 12.2689 1.5 10.7501 1.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AppStack;
