import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bookmark2({
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
          d="m8.25,0H3.75C2.233,0,1,1.233,1,2.75v8.5c0,.285.162.546.418.672.255.127.562.097.788-.077l3.794-2.901,3.794,2.901c.133.102.294.154.456.154.113,0,.227-.025.332-.078.256-.126.418-.387.418-.672V2.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Bookmark2;
