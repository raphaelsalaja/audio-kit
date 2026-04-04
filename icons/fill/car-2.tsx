import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Car2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m1.75,11.5h-.5c-.689,0-1.25-.561-1.25-1.25v-1c0-.414.336-.75.75-.75h1.5c.414,0,.75.336.75.75v1c0,.689-.561,1.25-1.25,1.25Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m10.75,11.5h-.5c-.689,0-1.25-.561-1.25-1.25v-1c0-.414.336-.75.75-.75h1.5c.414,0,.75.336.75.75v1c0,.689-.561,1.25-1.25,1.25Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m11.341,5.28l-.267-.267-.671-3.129c-.171-.802-.891-1.384-1.711-1.384H3.309c-.82,0-1.54.582-1.711,1.383l-.671,3.13-.267.267c-.419.419-.659.999-.659,1.591v2.379c0,.414.336.75.75.75h10.5c.414,0,.75-.336.75-.75v-2.379c0-.592-.24-1.172-.659-1.591ZM3.064,2.197c.024-.114.127-.197.245-.197h5.383c.117,0,.22.083.245.198l.6,2.802H2.463l.601-2.803Zm-.064,6.303c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm6,0c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Car2;
