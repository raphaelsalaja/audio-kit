import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackXPlus({
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
          d="M1.25,3c-.414,0-.75,.336-.75,.75V14.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V3.75c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M16.75,3c-.414,0-.75,.336-.75,.75V14.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V3.75c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M11.75,2.5H6.25c-1.517,0-2.75,1.233-2.75,2.75v7.5c0,1.517,1.233,2.75,2.75,2.75h5.5c1.517,0,2.75-1.233,2.75-2.75V5.25c0-1.517-1.233-2.75-2.75-2.75Zm-.75,7.25h-1.25v1.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1.25h-1.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.25v-1.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.25h1.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StackXPlus;
