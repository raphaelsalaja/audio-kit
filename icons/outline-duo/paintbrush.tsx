import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Paintbrush({
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
          d="M1.75 14.706C4.453 15.518 6.646 15.586 8.439 13.751C9.52 12.666 9.52 10.906 8.439 9.81999C7.358 8.73399 5.613 8.71799 4.523 9.81999C2.75 11.612 4.298 13.314 1.75 14.706Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.95599 9.04399L13.534 2.46599C14.155 1.84499 15.163 1.84499 15.784 2.46599C16.405 3.08699 16.405 4.09499 15.784 4.71599L9.20599 11.294"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 14.706C4.453 15.518 6.646 15.586 8.439 13.751C9.52 12.666 9.52 10.906 8.439 9.81999C7.358 8.73399 5.613 8.71799 4.523 9.81999C2.75 11.612 4.298 13.314 1.75 14.706Z"
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

export default Paintbrush;
