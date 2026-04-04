import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileWave({
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
          d="M12.25,17H5.75c-1.517,0-2.75-1.233-2.75-2.75v-2.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.5c0,.689,.561,1.25,1.25,1.25h6.5c.689,0,1.25-.561,1.25-1.25v-3c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
        />
        <path
          d="M3.75,7.5c-.414,0-.75-.336-.75-.75V3.75c0-1.517,1.233-2.75,2.75-2.75h6.5c1.517,0,2.75,1.233,2.75,2.75v2.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V3.75c0-.689-.561-1.25-1.25-1.25H5.75c-.689,0-1.25,.561-1.25,1.25v3c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M10.375,13.5c-1.172,0-2.125-.953-2.125-2.125V6.625c0-.345-.28-.625-.625-.625s-.625,.28-.625,.625v1.625c0,.965-.785,1.75-1.75,1.75H1c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H5.25c.138,0,.25-.112,.25-.25v-1.625c0-1.172,.953-2.125,2.125-2.125s2.125,.953,2.125,2.125v4.75c0,.345,.28,.625,.625,.625s.625-.28,.625-.625v-1.625c0-.965,.785-1.75,1.75-1.75h4.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-4.25c-.138,0-.25,.112-.25,.25v1.625c0,1.172-.953,2.125-2.125,2.125Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MobileWave;
