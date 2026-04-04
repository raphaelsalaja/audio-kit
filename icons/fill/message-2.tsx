import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Message2({
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
          d="m9.25.501H2.75C1.233.501,0,1.735,0,3.251v3.5c0,1.517,1.233,2.75,2.75,2.75h.25v1.75c0,.291.168.556.432.679.102.047.21.071.318.071.172,0,.343-.059.48-.174l2.792-2.326h2.229c1.517,0,2.75-1.233,2.75-2.75v-3.5c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Message2;
