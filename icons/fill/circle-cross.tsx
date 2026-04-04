import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCross({
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
          d="m16.25,9c0-.2539-.0136-.5046-.0391-.752-3.5527-.0212-6.4377-2.9062-6.459-6.459-.2473-.0254-.498-.0391-.752-.0391s-.5047.0137-.752.0391c-.0213,3.5527-2.9063,6.4377-6.459,6.459-.0255.2473-.0391.498-.0391.752s.0136.5046.0391.752c3.5527.0212,6.4377,2.9062,6.459,6.459.2473.0254.498.0391.752.0391s.5047-.0137.752-.0391c.0213-3.5527,2.9063-6.4377,6.459-6.459.0255-.2473.0391-.498.0391-.752Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9,17c-4.4111,0-8-3.5889-8-8S4.5889,1,9,1s8,3.5889,8,8-3.5889,8-8,8Zm0-14.5c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleCross;
