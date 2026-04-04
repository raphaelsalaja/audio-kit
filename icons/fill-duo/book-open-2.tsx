import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookOpen2({
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
          d="M1 4.063C1 2.90684 2.10059 2.06815 3.21547 2.37601L9 3.97197V16C8.93335 16 8.86629 15.9911 8.80061 15.973L2.28413 14.1759C1.52538 13.9661 1 13.2765 1 12.489V4.063Z"
          fill={fill}
        />
        <path
          d="M17 4.063C17 2.90684 15.8994 2.06815 14.7845 2.37601L9 3.97197V16C9.06665 16 9.13371 15.9911 9.19939 15.973L15.7159 14.1759C16.4746 13.9661 17 13.2765 17 12.489V4.063Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default BookOpen2;
