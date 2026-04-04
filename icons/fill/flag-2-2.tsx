import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag22({
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
          d="m9.75,1H3v7h6.75c.689,0,1.25-.561,1.25-1.25V2.25c0-.689-.561-1.25-1.25-1.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2.75,12c-.414,0-.75-.336-.75-.75V.75c0-.414.336-.75.75-.75s.75.336.75.75v10.5c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Flag22;
