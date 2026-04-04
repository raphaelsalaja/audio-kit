import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SprayCan({
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
        <circle cx="13.25" cy="2.75" fill={secondaryfill} r=".75" />
        <circle cx="15.75" cy="1.25" fill={secondaryfill} r=".75" />
        <circle cx="15.75" cy="4.25" fill={secondaryfill} r=".75" />
        <path
          d="M11,4.076V1.75c0-.965-.785-1.75-1.75-1.75h-1.5c-.965,0-1.75,.785-1.75,1.75v2.326c-1.71,.349-3,1.863-3,3.674v7.5c0,.965,.785,1.75,1.75,1.75h7.5c.965,0,1.75-.785,1.75-1.75V7.75c0-1.811-1.29-3.326-3-3.674Zm1.25,11.424H4.75c-.138,0-.25-.112-.25-.25V7.75c0-1.241,1.009-2.25,2.25-2.25h3.5c1.241,0,2.25,1.009,2.25,2.25v.25h-3.75c-.414,0-.75,.336-.75,.75v4.5c0,.414,.336,.75,.75,.75h3.75v1.25c0,.138-.112,.25-.25,.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SprayCan;
