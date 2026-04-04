import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ListRadio({
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
          d="m4.25,2c-1.792,0-3.25,1.458-3.25,3.25s1.458,3.25,3.25,3.25,3.25-1.458,3.25-3.25-1.458-3.25-3.25-3.25Zm0,5c-.966,0-1.75-.784-1.75-1.75s.784-1.75,1.75-1.75,1.75.784,1.75,1.75-.784,1.75-1.75,1.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m16.25,4.5h-6c-.414,0-.75.336-.75.75s.336.75.75.75h6c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m16.25,12h-6c-.414,0-.75.336-.75.75s.336.75.75.75h6c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="4.25" cy="12.75" fill={fill} r="3.25" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default ListRadio;
