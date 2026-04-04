import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineRight2({
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
          d="m6.75,6.75H1c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h5.75c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m11.203,5.014l-3.186-2.478c-.381-.296-.885-.349-1.316-.136-.433.211-.701.642-.701,1.123v4.955c0,.481.269.912.701,1.123.176.086.364.128.551.128.271,0,.54-.089.766-.265l3.185-2.478c.308-.238.483-.598.483-.987s-.176-.749-.482-.986Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineRight2;
