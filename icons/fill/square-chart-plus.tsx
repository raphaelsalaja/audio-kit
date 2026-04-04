import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartPlus({
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
          d="M14.75,8c-1.241,0-2.25-1.009-2.25-2.25v-.25h-.25c-1.241,0-2.25-1.009-2.25-2.25,0-.264,.054-.514,.138-.75H4.25c-1.517,0-2.75,1.233-2.75,2.75V13.75c0,1.517,1.233,2.75,2.75,2.75H12.75c1.517,0,2.75-1.233,2.75-2.75V7.862c-.236,.084-.486,.138-.75,.138ZM6,12.75c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-4.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v4.25Zm3.25,0c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V6.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v6.5Zm3.25,0c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-2c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2Z"
          fill={fill}
        />
        <path
          d="M17.25,2.5h-1.75V.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.75h-1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.75v1.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.75h1.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SquareChartPlus;
