import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Frame({
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
          height="10"
          width="10"
          fill={fill}
          rx="2.75"
          ry="2.75"
          x="4"
          y="4"
        />
        <path
          d="M4.75,3c-.414,0-.75-.336-.75-.75V.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25,3c-.414,0-.75-.336-.75-.75V.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M4.75,18c-.414,0-.75-.336-.75-.75v-1.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25,18c-.414,0-.75-.336-.75-.75v-1.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M17.25,5.5h-1.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M17.25,14h-1.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M2.25,5.5H.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M2.25,14H.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Frame;
