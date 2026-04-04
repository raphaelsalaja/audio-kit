import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function House7({
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
          d="M16.451 6.401L9.44999 1.15C9.18199 0.95 8.81699 0.95 8.54999 1.15L5.49999 3.437V2.25C5.49999 1.836 5.16399 1.5 4.74999 1.5C4.33599 1.5 3.99999 1.836 3.99999 2.25V4.562L1.54999 6.4C1.21899 6.649 1.15199 7.119 1.40099 7.45C1.64799 7.781 2.11899 7.849 2.45099 7.6L8.99999 2.688L15.55 7.601C15.685 7.702 15.843 7.751 15.999 7.751C16.228 7.751 16.453 7.647 16.6 7.451C16.849 7.119 16.782 6.649 16.451 6.401Z"
          fill={secondaryfill}
        />
        <path
          d="M15 15.5H16.25C16.664 15.5 17 15.836 17 16.25C17 16.664 16.664 17 16.25 17H10.5V13.25C10.5 12.974 10.276 12.75 10 12.75H8C7.724 12.75 7.5 12.974 7.5 13.25V17H1.75C1.336 17 1 16.664 1 16.25C1 15.836 1.336 15.5 1.75 15.5H3V9.045L9 4.562L15 9V15.5ZM9.6 10C9.821 10 10 9.821 10 9.6V8.4C10 8.179 9.821 8 9.6 8H8.4C8.179 8 8 8.179 8 8.4V9.6C8 9.821 8.179 10 8.4 10H9.6Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default House7;
