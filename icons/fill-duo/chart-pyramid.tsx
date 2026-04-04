import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartPyramid({
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
          d="M6.98839 2.61997C7.88206 1.07198 10.1177 1.07198 11.0114 2.61997L13.2516 6.5H4.74817L6.98839 2.61997Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M15.8498 11H2.15001L1.56341 12.016C0.669967 13.5636 1.78619 15.5 3.57492 15.5H14.4249C16.2137 15.5 17.3297 13.5648 16.4366 12.0163L15.8498 11Z"
          fill={fill}
        />
        <path
          d="M4.74819 6.5H13.2517L15.8498 11H2.15002L4.74819 6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ChartPyramid;
