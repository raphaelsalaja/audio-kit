import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sliders3Vertical({
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
          d="M9,14c-.414,0-.75,.336-.75,.75v1c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M11,11h-1.25V2.25c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75V11h-1.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h4c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75,8.5c-.414,0-.75,.336-.75,.75v6.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-6.5c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M15.75,5.5h-1.25V2.25c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v3.25h-1.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h4c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M4.25,8.5c-.414,0-.75,.336-.75,.75v6.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-6.5c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M7,6.25c0-.414-.336-.75-.75-.75h-1.25V2.25c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v3.25h-1.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H6.25c.414,0,.75-.336,.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sliders3Vertical;
