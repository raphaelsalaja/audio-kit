import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationRepeat({
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
          d="M12.25,12.5H6.75c-.689,0-1.25-.561-1.25-1.25V5.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v5.5c0,1.517,1.233,2.75,2.75,2.75h5.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9.25,15.5H3.75c-.689,0-1.25-.561-1.25-1.25v-5.5c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v5.5c0,1.517,1.233,2.75,2.75,2.75h5.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <rect
          height="10"
          width="10"
          fill={fill}
          rx="2.75"
          ry="2.75"
          x="7"
          y="1"
        />
      </g>
    </svg>
  );
}

export default AnimationRepeat;
