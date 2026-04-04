import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgPlus({
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
          d="M10,14.75c0-1.241,1.01-2.25,2.25-2.25h.25v-.25c0-1.241,1.01-2.25,2.25-2.25,.838,0,1.562,.466,1.949,1.147,.191-.685,.301-1.402,.301-2.147,0-4.411-3.589-8-8-8S1,4.589,1,9c0,1.397,.371,2.778,1.062,3.971,.238,.446-.095,2.002-.842,2.749-.209,.209-.276,.522-.17,.798,.105,.276,.364,.465,.659,.481,.079,.004,.16,.006,.242,.006,1.145,0,2.534-.407,3.44-.871,.675,.343,1.39,.587,2.131,.727,.484,.092,.981,.138,1.478,.138,.745,0,1.463-.11,2.147-.301-.681-.387-1.147-1.111-1.147-1.949Z"
          fill={fill}
        />
        <path
          d="M17.25,14h-1.75v-1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.75h-1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.75v1.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.75h1.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MsgPlus;
