import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDotRotateAnticlockwise2({
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
          cx="2.75"
          cy="9.25"
          fill={secondaryfill}
          r="1.75"
          strokeWidth="0"
        />
        <path
          d="m6,0c-1.517,0-2.922.565-4,1.534v-.784c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3c0,.414.336.75.75.75h3c.414,0,.75-.336.75-.75s-.336-.75-.75-.75h-1.606c.839-.944,2.045-1.5,3.356-1.5,2.481,0,4.5,2.019,4.5,4.5s-2.019,4.5-4.5,4.5c-.414,0-.75.336-.75.75s.336.75.75.75c3.309,0,6-2.691,6-6S9.309,0,6,0Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowDotRotateAnticlockwise2;
