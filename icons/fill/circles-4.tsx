import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circles4({
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
          d="M9,15.5c-3.584,0-6.5-2.916-6.5-6.5,0-.414-.336-.75-.75-.75s-.75,.336-.75,.75c0,4.411,3.589,8,8,8,.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9,1c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75c3.584,0,6.5,2.916,6.5,6.5,0,.414,.336,.75,.75,.75s.75-.336,.75-.75c0-4.411-3.589-8-8-8Z"
          fill={secondaryfill}
        />
        <circle cx="9" cy="9" fill={fill} r="5" />
      </g>
    </svg>
  );
}

export default Circles4;
