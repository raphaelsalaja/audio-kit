import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder52({
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
          d="m1,5c0-1.105.895-2,2-2h3.48c-.076-.267-.145-.479-.187-.568l-.298-.637c-.369-.787-1.168-1.295-2.038-1.295h-1.708C1.009.5,0,1.509,0,2.75v2c0,.414.336.75.75.75.063,0,.152.04.25.094v-.594Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9.25,11H2.75c-1.517,0-2.75-1.233-2.75-2.75v-3.5c0-1.517,1.233-2.75,2.75-2.75h6.5c1.517,0,2.75,1.233,2.75,2.75v3.5c0,1.517-1.233,2.75-2.75,2.75ZM2.75,3.5c-.689,0-1.25.561-1.25,1.25v3.5c0,.689.561,1.25,1.25,1.25h6.5c.689,0,1.25-.561,1.25-1.25v-3.5c0-.689-.561-1.25-1.25-1.25H2.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Folder52;
