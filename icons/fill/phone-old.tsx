import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneOld({
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
          d="M10.75,4.5c-.414,0-.75-.336-.75-.75V.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V3.75c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M11.75,3H6.25c-.965,0-1.75,.785-1.75,1.75v11.5c0,.965,.785,1.75,1.75,1.75h5.5c.965,0,1.75-.785,1.75-1.75V4.75c0-.965-.785-1.75-1.75-1.75ZM7.75,15c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Zm0-2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Zm2.5,2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Zm0-2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Zm1.25-3.25c0,.414-.336,.75-.75,.75h-3.5c-.414,0-.75-.336-.75-.75v-1c0-.414,.336-.75,.75-.75h3.5c.414,0,.75,.336,.75,.75v1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PhoneOld;
