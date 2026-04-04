import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hourglass({
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
          d="M14.25,15h-.261c-.056-2.751-.457-4.593-1.989-6,1.532-1.407,1.932-3.249,1.989-6h.261c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H3.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h.261c.056,2.751,.457,4.593,1.989,6-1.532,1.407-1.932,3.249-1.989,6h-.261c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H14.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Hourglass;
