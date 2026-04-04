import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Joystick2({
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
          d="M8.25,7.394v2.856c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-2.856c1.29-.335,2.25-1.5,2.25-2.894,0-1.654-1.346-3-3-3s-3,1.346-3,3c0,1.394,.96,2.558,2.25,2.894Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25,12h-.75v-.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v.75H3.75c-1.241,0-2.25,1.009-2.25,2.25s1.009,2.25,2.25,2.25H14.25c1.241,0,2.25-1.009,2.25-2.25s-1.009-2.25-2.25-2.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Joystick2;
