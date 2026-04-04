import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ParkingSign({
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
          d="M9.5,6.5h-1.5v2h1.5c.551,0,1-.449,1-1s-.449-1-1-1Z"
          fill={fill}
        />
        <path
          d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-3.75,8h-1.5v2.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V5.75c0-.414,.336-.75,.75-.75h2.25c1.378,0,2.5,1.122,2.5,2.5s-1.122,2.5-2.5,2.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ParkingSign;
