import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayoutRight2({
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
          d="m9.25,1H2.75C1.233,1,0,2.233,0,3.75v4.5c0,1.517,1.233,2.75,2.75,2.75h6.5c1.517,0,2.75-1.233,2.75-2.75V3.75c0-1.517-1.233-2.75-2.75-2.75Zm.25,6.75c0,.414-.336.75-.75.75s-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75s.75.336.75.75v3.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default LayoutRight2;
