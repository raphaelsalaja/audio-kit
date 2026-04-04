import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Signal({
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
          d="M2.75,15c-.414,0-.75-.336-.75-.75v-1.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M5.75,15c-.414,0-.75-.336-.75-.75v-4c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v4c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9,15c-.414,0-.75-.336-.75-.75V7.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v6.5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M12.25,15c-.414,0-.75-.336-.75-.75V5.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V14.25c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.25,15c-.414,0-.75-.336-.75-.75V2.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V14.25c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Signal;
