import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tv({
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
          d="M1 4.75C1 3.23079 2.23079 2 3.75 2H14.25C15.7692 2 17 3.23079 17 4.75V10.25C17 11.7692 15.7692 13 14.25 13H3.75C2.23079 13 1 11.7692 1 10.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.49302 14.7954C5.47326 14.4379 7.0383 14 9 14C10.9617 14 12.5267 14.4379 13.507 14.7954C13.8961 14.9373 14.0965 15.3678 13.9546 15.757C13.8127 16.1461 13.3822 16.3465 12.993 16.2046C12.1253 15.8881 10.7383 15.5 9 15.5C7.26169 15.5 5.87473 15.8881 5.00698 16.2046C4.61784 16.3465 4.18732 16.1461 4.0454 15.757C3.90347 15.3678 4.10388 14.9373 4.49302 14.7954Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Tv;
