import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane42({
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
          d="m11.142,4.595L2.54.179C1.977-.112,1.32-.044.827.352.334.748.128,1.374.288,1.987l.851,3.265h3.111c.414,0,.75.336.75.75s-.336.75-.75.75H1.148l-.86,3.265c-.16.612.046,1.238.539,1.634.29.233.636.352.986.352.246,0,.494-.059.727-.178l8.602-4.417c.529-.272.858-.811.858-1.406s-.329-1.134-.858-1.406Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default PaperPlane42;
