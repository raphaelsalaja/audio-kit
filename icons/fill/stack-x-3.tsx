import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackX3({
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
        <rect
          height="14"
          width="9"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="4.5"
          y="2"
        />
        <path
          d="M15.75,3.5c-.414,0-.75,.336-.75,.75V13.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.25c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M2.25,3.5c-.414,0-.75,.336-.75,.75V13.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.25c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default StackX3;
