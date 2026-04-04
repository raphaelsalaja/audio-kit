import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeSparkle({
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
          d="M17.4873 13.5381L15.5928 12.9072L14.9615 11.0127C14.8594 10.707 14.5728 10.5 14.2501 10.5C13.9274 10.5 13.6407 10.707 13.5387 11.0127L12.9074 12.9072L11.0129 13.5381C10.7067 13.6406 10.5002 13.9268 10.5002 14.25C10.5002 14.5732 10.7067 14.8594 11.0129 14.9619L12.9074 15.5928L13.5387 17.4873C13.6408 17.793 13.9274 18 14.2501 18C14.5728 18 14.8595 17.793 14.9615 17.4873L15.5928 15.5928L17.4873 14.9619C17.7935 14.8594 18 14.5732 18 14.25C18 13.9268 17.7935 13.6406 17.4873 13.5381Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 2.5C2.23054 2.5 1 3.73203 1 5.25V12.75C1 14.268 2.23054 15.5 3.75 15.5H8.2929C8.70711 15.5 9.0429 15.1642 9.0429 14.75C9.0429 14.3358 8.70711 14 8.2929 14H3.75C3.061 14 2.5 13.439 2.5 12.75V6.521L8.154 9.641C8.419 9.787 8.71 9.86 9 9.86C9.29 9.86 9.581 9.787 9.846 9.641L15.5 6.521V9.01401C15.5 9.42822 15.8358 9.76401 16.25 9.76401C16.6642 9.76401 17 9.42822 17 9.01401V5.25C17 3.73203 15.7695 2.5 14.25 2.5H3.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeSparkle;
