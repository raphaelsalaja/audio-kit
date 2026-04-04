import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageFlag({
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
          d="M10.5,10.25c0-1.517,1.233-2.75,2.75-2.75h3.5c.086,0,.166,.018,.25,.025v-3.275c0-1.517-1.233-2.75-2.75-2.75H3.75c-1.517,0-2.75,1.233-2.75,2.75v7c0,1.517,1.233,2.75,2.75,2.75h1.25v2.25c0,.288,.165,.551,.425,.676,.104,.05,.215,.074,.325,.074,.167,0,.333-.056,.469-.165l3.544-2.835h.737v-3.75Z"
          fill={fill}
        />
        <path
          d="M16.75,9h-3.5c-.689,0-1.25,.561-1.25,1.25v6c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-2.75h3.25c.689,0,1.25-.561,1.25-1.25v-2c0-.689-.561-1.25-1.25-1.25Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MessageFlag;
