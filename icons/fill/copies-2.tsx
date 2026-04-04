import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copies2({
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
          height="9"
          width="14"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="2"
          y="7"
        />
        <path
          d="M5.75,2.5h6.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H5.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M4.25,5.5H13.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H4.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Copies2;
