import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartArea2({
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
          d="M14.9942 3.26184C15.8176 2.63617 17 3.22451 17 4.257V12.25C17 13.7692 15.7692 15 14.25 15H3.75C2.23079 15 1 13.7692 1 12.25V9.457C1 9.12405 1.13264 8.80819 1.36284 8.57551L4.17467 5.76367C4.60013 5.33821 5.26976 5.27599 5.7669 5.61797L8.97761 7.82533L14.9942 3.26184Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartArea2;
