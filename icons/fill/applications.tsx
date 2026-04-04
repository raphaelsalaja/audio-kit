import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Applications({
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
          d="m14.25,1h-3.5c-.4141,0-.75.3359-.75.75v5.5c0,.4141.3359.75.75.75h5.5c.4141,0,.75-.3359.75-.75v-3.5c0-1.5166-1.2334-2.75-2.75-2.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m13.25,9.5h-4.75v-4.75c0-.4141-.3359-.75-.75-.75h-3.5c-1.5166,0-2.75,1.2334-2.75,2.75v7c0,1.5166,1.2334,2.75,2.75,2.75h7c1.5166,0,2.75-1.2334,2.75-2.75v-3.5c0-.4141-.3359-.75-.75-.75ZM4.25,5.5h2.75v4H3v-2.75c0-.6895.5605-1.25,1.25-1.25Zm-1.25,8.25v-2.75h4v4h-2.75c-.6895,0-1.25-.5605-1.25-1.25Zm9.5,0c0,.6895-.5605,1.25-1.25,1.25h-2.75v-4h4v2.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Applications;
