import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard3({
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
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          x="4.5"
          y="8.5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          x="1"
          y="8.5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          x="8"
          y="8.5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          x="11.5"
          y="8.5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          x="6.25"
          y="5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          x="2.75"
          y="5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          x="9.75"
          y="5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          x="13.25"
          y="5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          x="15"
          y="8.5"
        />
        <path
          d="M13.5,13.5H4.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H13.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Keyboard3;
