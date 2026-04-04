import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MirrorObjYDotted({
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
          d="M16,13.248v-1.5c0-.414-.336-.75-.75-.75H2.75c-.414,0-.75,.336-.75,.75v1.5c0,1.519,1.231,2.75,2.75,2.75H13.25c1.519,0,2.75-1.231,2.75-2.75Z"
          fill={fill}
        />
        <path
          d="M2,6.248v-1.5c0-1.517,1.233-2.75,2.75-2.75H13.25c1.517,0,2.75,1.233,2.75,2.75v1.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1.5c0-.689-.561-1.25-1.25-1.25H4.75c-.689,0-1.25,.561-1.25,1.25v1.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75Z"
          fill={fill}
        />
        <circle cx="15.25" cy="8.998" fill={secondaryfill} r=".75" />
        <circle cx="12.125" cy="8.998" fill={secondaryfill} r=".75" />
        <circle cx="9" cy="8.998" fill={secondaryfill} r=".75" />
        <circle cx="5.875" cy="8.998" fill={secondaryfill} r=".75" />
        <circle cx="2.75" cy="8.998" fill={secondaryfill} r=".75" />
      </g>
    </svg>
  );
}

export default MirrorObjYDotted;
