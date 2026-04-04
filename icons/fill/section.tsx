import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Section({
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
        <rect
          height="8"
          width="16"
          fill={fill}
          rx="2.75"
          ry="2.75"
          x="1"
          y="5"
        />
        <path
          d="M14.25,15H3.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H14.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75,3H14.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H3.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Section;
