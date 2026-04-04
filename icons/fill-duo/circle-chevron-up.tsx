import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleChevronUp({
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
          d="M9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.52999 10.5301C6.23699 10.8231 5.76199 10.8231 5.46899 10.5301C5.32299 10.3841 5.24899 10.192 5.24899 10C5.24899 9.80802 5.32199 9.61599 5.46899 9.46999L8.46899 6.46999C8.76199 6.17699 9.23699 6.17699 9.52999 6.46999L12.53 9.46999C12.823 9.76299 12.823 10.238 12.53 10.531C12.237 10.824 11.762 10.824 11.469 10.531L8.99899 8.061L6.52899 10.531L6.52999 10.5301Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleChevronUp;
