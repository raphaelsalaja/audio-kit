import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gauge2({
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
          d="M9 1C4.589 1 1 4.5889 1 9C1 13.4111 4.589 17 9 17C13.411 17 17 13.4111 17 9C17 4.5889 13.411 1 9 1ZM9 11C7.897 11 7 10.103 7 9C7 8.7231 7.0567 8.4595 7.1588 8.2197L4.6031 5.664C4.3101 5.371 4.3101 4.8959 4.6031 4.603C4.8961 4.31 5.37109 4.31 5.66409 4.603L8.2198 7.15869C8.4597 7.05659 8.72331 7 9.00011 7C10.1031 7 11.0001 7.897 11.0001 9C11.0001 10.103 10.103 11 9 11Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Gauge2;
