import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gauge4({
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
          d="M8.99992 10.25C8.85502 10.25 8.71412 10.2666 8.57672 10.2927L7.20402 7.9482C6.99402 7.5903 6.53513 7.47109 6.17763 7.67959C5.82023 7.88909 5.70013 8.34848 5.90903 8.70598L7.28662 11.0588C6.95662 11.4504 6.74982 11.9492 6.74982 12.5C6.74982 13.7407 7.75962 14.75 8.99982 14.75C10.24 14.75 11.2498 13.7407 11.2498 12.5C11.2498 11.2593 10.2401 10.25 8.99992 10.25Z"
          fill={secondaryfill}
        />
        <path
          d="M9 4C4.5889 4 1 7.5889 1 12C1 12.0669 1.0039 12.1333 1.0127 12.2764C1.0273 12.6802 1.3584 13 1.7627 13H4.25C4.6641 13 5 12.6641 5 12.25C5 11.8359 4.6641 11.5 4.25 11.5H2.5186C2.7754 8.1484 5.584 5.5 9 5.5C12.3887 5.5 15.1797 8.106 15.4697 11.5H13.75C13.3359 11.5 13 11.8359 13 12.25C13 12.6641 13.3359 13 13.75 13H16.2373C16.6416 13 16.9775 12.603 16.9912 12.1997C16.9961 12.1333 17 12.0669 17 12C17 7.5889 13.4111 4 9 4Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Gauge4;
