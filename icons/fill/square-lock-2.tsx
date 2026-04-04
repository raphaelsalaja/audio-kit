import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareLock2({
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
          d="m8.75.5H3.25C1.733.5.5,1.733.5,3.25v5.5c0,1.517,1.233,2.75,2.75,2.75h5.5c1.517,0,2.75-1.233,2.75-2.75V3.25c0-1.517-1.233-2.75-2.75-2.75Zm-2,6.351v1.649c0,.414-.336.75-.75.75s-.75-.336-.75-.75v-1.649c-.732-.298-1.25-1.014-1.25-1.851,0-1.103.897-2,2-2s2,.897,2,2c0,.837-.518,1.554-1.25,1.851Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquareLock2;
