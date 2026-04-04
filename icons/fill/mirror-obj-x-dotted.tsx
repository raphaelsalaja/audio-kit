import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MirrorObjXDotted({
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
          d="M13.25,2h-1.5c-.414,0-.75,.336-.75,.75V15.25c0,.414,.336,.75,.75,.75h1.5c1.519,0,2.75-1.231,2.75-2.75V4.75c0-1.519-1.231-2.75-2.75-2.75Z"
          fill={fill}
        />
        <path
          d="M6.25,16h-1.5c-1.517,0-2.75-1.233-2.75-2.75V4.75c0-1.517,1.233-2.75,2.75-2.75h1.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-1.5c-.689,0-1.25,.561-1.25,1.25V13.25c0,.689,.561,1.25,1.25,1.25h1.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <circle cx="9" cy="2.75" fill={secondaryfill} r=".75" />
        <circle cx="9" cy="5.875" fill={secondaryfill} r=".75" />
        <circle cx="9" cy="9" fill={secondaryfill} r=".75" />
        <circle cx="9" cy="12.125" fill={secondaryfill} r=".75" />
        <circle cx="9" cy="15.25" fill={secondaryfill} r=".75" />
      </g>
    </svg>
  );
}

export default MirrorObjXDotted;
