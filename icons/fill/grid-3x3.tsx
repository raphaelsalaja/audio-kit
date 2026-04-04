import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Grid3x3({
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
          d="M15.75,7H2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H15.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.75,12.5H2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H15.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M6.25,16.5c-.414,0-.75-.336-.75-.75V2.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V15.75c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M11.75,16.5c-.414,0-.75-.336-.75-.75V2.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V15.75c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Grid3x3;
