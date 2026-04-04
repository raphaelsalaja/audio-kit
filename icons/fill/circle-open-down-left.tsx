import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleOpenDownLeft({
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
          d="M8.561,10.5h2.689c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75H6.75c-.414,0-.75-.336-.75-.75V6.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.689L14.099,2.841c-1.385-1.149-3.163-1.841-5.099-1.841C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8c0-1.936-.692-3.713-1.841-5.098l-6.599,6.598Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleOpenDownLeft;
