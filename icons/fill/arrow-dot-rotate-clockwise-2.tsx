import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDotRotateClockwise2({
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
        <circle
          cx="9.25"
          cy="9.25"
          fill={secondaryfill}
          r="1.75"
          strokeWidth="0"
        />
        <path
          d="m10.75,0c-.414,0-.75.336-.75.75v.784c-1.078-.97-2.483-1.534-4-1.534C2.691,0,0,2.691,0,6s2.691,6,6,6c.414,0,.75-.336.75-.75s-.336-.75-.75-.75c-2.481,0-4.5-2.019-4.5-4.5S3.519,1.5,6,1.5c1.311,0,2.516.556,3.356,1.5h-1.606c-.414,0-.75.336-.75.75s.336.75.75.75h3c.414,0,.75-.336.75-.75V.75c0-.414-.336-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowDotRotateClockwise2;
