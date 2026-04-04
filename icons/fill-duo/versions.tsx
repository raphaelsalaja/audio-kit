import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Versions({
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
          d="M8.31451 3H6.75C5.2334 3 4 4.2334 4 5.75V12.25C4 13.7666 5.2334 15 6.75 15H8.31451C8.72861 15 9.06451 14.6641 9.06451 14.25V3.75C9.06451 3.3359 8.72861 3 8.31451 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.7501 1.5H10.2501C8.73134 1.5 7.50012 2.73122 7.50012 4.25V13.75C7.50012 15.2688 8.73134 16.5 10.2501 16.5H13.7501C15.2689 16.5 16.5001 15.2688 16.5001 13.75V4.25C16.5001 2.73122 15.2689 1.5 13.7501 1.5Z"
          fill={fill}
        />
        <path
          d="M4.00012 12.25V5.75C4.00012 5.2979 4.12034 4.877 4.31464 4.5H3.75012C2.23352 4.5 1.00012 5.7334 1.00012 7.25V10.75C1.00012 12.2666 2.23352 13.5 3.75012 13.5H4.31464C4.12034 13.123 4.00012 12.7021 4.00012 12.25Z"
          fill={secondaryfill}
          opacity="0.2"
        />
      </g>
    </svg>
  );
}

export default Versions;
