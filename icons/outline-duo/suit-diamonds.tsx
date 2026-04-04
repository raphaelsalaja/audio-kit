import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitDiamonds({
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
          d="M9 16.25C9.657 15.118 10.51 13.835 11.615 12.491C12.769 11.087 13.941 9.931 15 9C13.941 8.07 12.77 6.913 11.615 5.509C10.51 4.165 9.657 2.882 9 1.75C8.343 2.882 7.49 4.165 6.385 5.509C5.231 6.913 4.059 8.069 3 9C4.059 9.93 5.23 11.087 6.385 12.491C7.49 13.835 8.343 15.118 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C9.657 15.118 10.51 13.835 11.615 12.491C12.769 11.087 13.941 9.931 15 9C13.941 8.07 12.77 6.913 11.615 5.509C10.51 4.165 9.657 2.882 9 1.75C8.343 2.882 7.49 4.165 6.385 5.509C5.231 6.913 4.059 8.069 3 9C4.059 9.93 5.23 11.087 6.385 12.491C7.49 13.835 8.343 15.118 9 16.25Z"
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

export default SuitDiamonds;
