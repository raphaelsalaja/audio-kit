import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bathtub({
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
          d="M4.25,9.5c-.414,0-.75-.336-.75-.75V4c0-1.654,1.346-3,3-3s3,1.346,3,3c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75c0-.827-.673-1.5-1.5-1.5s-1.5,.673-1.5,1.5v4.75c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M16.25,8H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h.25v1.75c0,1.811,1.291,3.326,3,3.674v1.326c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.25h5v1.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.326c1.709-.349,3-1.863,3-3.674v-1.75h.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bathtub;
