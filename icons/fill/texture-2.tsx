import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Texture2({
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
          d="M2.75,8.5c-.414,0-.75-.336-.75-.75V2.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V7.75c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M5.25,8.5c-.414,0-.75-.336-.75-.75V2.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V7.75c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M7.75,8.5c-.414,0-.75-.336-.75-.75V2.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V7.75c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M15.25,3.5h-5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.25,6h-5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.25,8.5h-5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.25,16c-.414,0-.75-.336-.75-.75v-5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M12.75,16c-.414,0-.75-.336-.75-.75v-5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M10.25,16c-.414,0-.75-.336-.75-.75v-5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M7.75,11H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M7.75,13.5H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M7.75,16H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Texture2;
