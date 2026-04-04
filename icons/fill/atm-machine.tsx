import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AtmMachine({
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
          d="M16.25,3.5H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h14.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M14.75,5h-2.75v12h.75c1.517,0,2.75-1.233,2.75-2.75V5.75c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M10,5H3.25c-.414,0-.75,.336-.75,.75V14.25c0,1.517,1.233,2.75,2.75,2.75h4.75V5Zm-3.75,9c-.414,0-.75-.336-.75-.75v-2.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AtmMachine;
