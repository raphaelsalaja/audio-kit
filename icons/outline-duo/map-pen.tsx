import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapPen({
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
          d="M13.7959 15.9542L16.9571 12.793C17.3476 12.4025 17.3476 11.7693 16.9571 11.3788L16.3713 10.793C15.9808 10.4025 15.3476 10.4025 14.9571 10.793L11.7959 13.9542L11.0001 16.7501L13.7959 15.9542Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.96484 2.81317C6.15084 2.77217 6.34541 2.78431 6.52441 2.84931L11.4756 4.65009C11.6546 4.71509 11.8492 4.72822 12.0352 4.68622L15.0332 4.0202C15.6581 3.88132 16.2499 4.35593 16.25 4.99579L16.1445 8.28876C15.3605 8.17216 14.5424 8.34059 13.8584 8.79852L13.6113 8.98114L13.5537 9.03095L13.3662 9.20282L10.2051 12.364C9.98401 12.5851 9.81032 12.8631 9.69434 13.153L9.63184 13.3386L9.34668 14.3386L6.52441 13.3503C6.34541 13.2853 6.15084 13.2721 5.96484 13.3141L2.9668 13.9802C2.34188 14.119 1.75 13.6435 1.75 13.0036V4.55243C1.75 4.08343 2.0762 3.67687 2.5332 3.57587L5.96484 2.81317Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 7.55712V4.99701C16.25 4.35691 15.658 3.88202 15.033 4.02092L12.035 4.68692C11.849 4.72792 11.655 4.71602 11.476 4.65082L6.52399 2.85003C6.34499 2.78483 6.151 2.77192 5.965 2.81392L2.53299 3.57682C2.07499 3.67892 1.75 4.08492 1.75 4.55292V13.0029C1.75 13.643 2.34201 14.1179 2.96701 13.979L5.965 13.313C6.151 13.272 6.34499 13.2839 6.52399 13.3491L8.63049 14.1152"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 15.9542L16.9571 12.793C17.3476 12.4025 17.3476 11.7693 16.9571 11.3788L16.3713 10.793C15.9808 10.4025 15.3476 10.4025 14.9571 10.793L11.7959 13.9542L11.0001 16.7501L13.7959 15.9542Z"
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

export default MapPen;
