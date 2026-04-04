import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FireFlame({
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
          d="M13.607 5.92201C13.205 5.36701 12.713 4.85701 12.18 4.40601C11.877 5.90001 11.3588 6.46406 11.3588 6.46406C11.3588 4.22478 10.7078 2.34455 8.90901 1.12901C8.688 0.980006 8.406 0.959006 8.165 1.07401C7.925 1.18901 7.764 1.42301 7.742 1.68801C7.591 3.50601 6.587 4.45901 5.425 5.56401C4.11501 6.80901 2.63 8.22101 2.63 10.987C2.63 13.653 4.127 15.912 6.455 16.843C6.358 15.298 6.99501 14.668 7.517 14.166C7.96 13.74 8.31 13.404 8.337 12.483C8.343 12.31 8.437 12.152 8.587 12.065C8.736 11.979 8.92201 11.976 9.07401 12.058C10.776 12.975 11.527 15.127 11.531 16.812C13.301 16.056 14.566 14.714 15.095 12.998C15.759 10.843 15.221 8.26901 13.607 5.92201Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FireFlame;
