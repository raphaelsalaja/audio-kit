import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sliders3({
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
          d="M15.75,8.25h-1c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M2.25,9.75H11v1.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V7c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.25H2.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.75,3.5h-6.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h6.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M2.25,5h3.25v1.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V2.25c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.25H2.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={fill}
        />
        <path
          d="M15.75,13h-6.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h6.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M6.25,11c-.414,0-.75,.336-.75,.75v1.25H2.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.25v1.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-4c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sliders3;
