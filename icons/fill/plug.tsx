import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plug({
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
          d="M14.25,4h-1.75V1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v2.25H7V1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v2.25h-1.75c-.965,0-1.75,.785-1.75,1.75v1.75c0,3.606,2.742,6.583,6.25,6.958v1.792c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.792c3.508-.376,6.25-3.352,6.25-6.958v-1.75c0-.965-.785-1.75-1.75-1.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Plug;
