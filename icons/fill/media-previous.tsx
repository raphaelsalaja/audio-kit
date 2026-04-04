import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaPrevious({
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
          d="M15.205,3.042c-.502-.297-1.107-.305-1.618-.022L5.333,7.59c-.514,.285-.833,.825-.833,1.41s.319,1.125,.833,1.41l8.254,4.57c.249,.138,.52,.207,.791,.206,.285,0,.57-.076,.828-.228,.498-.293,.795-.812,.795-1.387V4.43c0-.575-.297-1.094-.795-1.387Z"
          fill={fill}
        />
        <path
          d="M2.75,2c-.414,0-.75,.336-.75,.75V15.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V2.75c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MediaPrevious;
