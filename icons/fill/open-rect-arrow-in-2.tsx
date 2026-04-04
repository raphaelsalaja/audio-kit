import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenRectArrowIn2({
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
          d="m7.53,5.47l-2.5-2.5c-.293-.293-.768-.293-1.061,0s-.293.768,0,1.061l1.22,1.22H.75c-.414,0-.75.336-.75.75s.336.75.75.75h4.439l-1.22,1.22c-.293.293-.293.768,0,1.061.146.146.338.22.53.22s.384-.073.53-.22l2.5-2.5c.293-.293.293-.768,0-1.061Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9.25,12h-2.5c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h2.5c.689,0,1.25-.561,1.25-1.25V2.75c0-.689-.561-1.25-1.25-1.25h-2.5c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h2.5c1.517,0,2.75,1.233,2.75,2.75v6.5c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default OpenRectArrowIn2;
