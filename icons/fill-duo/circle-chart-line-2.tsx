import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleChartLine2({
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
          d="M9 1C4.58179 1 1 4.58179 1 9C1 9.83786 1.12881 10.6456 1.36771 11.4046L6.03265 6.73968C6.52054 6.25178 7.31242 6.25178 7.80031 6.73968L11.0835 10.0228L15.9937 5.11265C14.6272 2.65948 12.0073 1 9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.6323 6.59537L11.9673 11.2603C11.4794 11.7482 10.6875 11.7482 10.1997 11.2603L6.91647 7.97718L2.00632 12.8873C3.37283 15.3405 5.99265 17 8.99999 17C13.4182 17 17 13.4182 17 9.00001C17 8.16214 16.8712 7.35435 16.6323 6.59537Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleChartLine2;
