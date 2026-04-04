import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleOpenDownRight({
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
          d="M9,1c-1.936,0-3.713,.692-5.099,1.841l6.599,6.598v-2.689c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v4.5c0,.414-.336,.75-.75,.75H6.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.689L2.841,3.902c-1.149,1.385-1.841,3.162-1.841,5.098,0,4.411,3.589,8,8,8s8-3.589,8-8S13.411,1,9,1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleOpenDownRight;
