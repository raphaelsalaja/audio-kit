import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bolt2({
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
          d="m10.672,4.917c-.126-.256-.387-.417-.672-.417h-3.146l.474-3.654c.043-.336-.145-.661-.459-.79s-.676-.032-.881.238L1.404,6.295c-.174.227-.203.532-.076.788.126.256.387.417.672.417h3.146l-.474,3.654c-.043.336.145.661.459.79.093.038.189.057.285.057.229,0,.451-.104.596-.295l4.583-6c.174-.227.203-.532.076-.788Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Bolt2;
