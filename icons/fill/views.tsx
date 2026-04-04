import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Views({
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
          d="M13.25,17H4.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H13.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75,2H4.25c-1.517,0-2.75,1.233-2.75,2.75v6.5c0,1.517,1.233,2.75,2.75,2.75H13.75c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-1.059,6.891c-.54,.695-1.737,1.859-3.691,1.859s-3.151-1.164-3.691-1.858c0,0,0,0,0,0-.413-.533-.413-1.249,0-1.782,.54-.695,1.737-1.859,3.691-1.859s3.151,1.164,3.691,1.858c.414,.534,.414,1.25,0,1.783Z"
          fill={fill}
        />
        <circle cx="9" cy="8" fill={fill} r="1.5" />
      </g>
    </svg>
  );
}

export default Views;
