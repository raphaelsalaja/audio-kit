import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Slideshow({
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
        <circle cx="5" cy="16" fill={secondaryfill} r="1" />
        <circle cx="13" cy="16" fill={secondaryfill} r="1" />
        <circle cx="9" cy="16" fill={secondaryfill} r="1.25" />
        <rect
          height="11.5"
          width="16"
          fill={fill}
          rx="2.75"
          ry="2.75"
          x="1"
          y="2"
        />
      </g>
    </svg>
  );
}

export default Slideshow;
