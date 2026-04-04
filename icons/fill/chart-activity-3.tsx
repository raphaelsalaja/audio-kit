import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartActivity3({
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
          d="M11.125,16c-1.585,0-2.875-1.29-2.875-2.875V4.875c0-.758-.617-1.375-1.375-1.375s-1.375,.617-1.375,1.375v2.375c0,1.517-1.233,2.75-2.75,2.75h-.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h.5c.689,0,1.25-.561,1.25-1.25v-2.375c0-1.585,1.29-2.875,2.875-2.875s2.875,1.29,2.875,2.875V13.125c0,.758,.617,1.375,1.375,1.375s1.375-.617,1.375-1.375v-2.375c0-1.517,1.233-2.75,2.75-2.75h.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-.5c-.689,0-1.25,.561-1.25,1.25v2.375c0,1.585-1.29,2.875-2.875,2.875Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChartActivity3;
