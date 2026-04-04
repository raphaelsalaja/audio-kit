import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperclipPlus({
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
          d="M16.25,3.5h-1.75V1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.75h-1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.75v1.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.75h1.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M11.75,8c-.414,0-.75,.336-.75,.75v3c0,2.068-1.682,3.75-3.75,3.75s-3.75-1.682-3.75-3.75V4.75c0-1.241,1.009-2.25,2.25-2.25s2.25,1.009,2.25,2.25v7c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V5c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v6.75c0,1.241,1.009,2.25,2.25,2.25s2.25-1.009,2.25-2.25V4.75c0-2.068-1.682-3.75-3.75-3.75s-3.75,1.682-3.75,3.75v7c0,2.895,2.355,5.25,5.25,5.25s5.25-2.355,5.25-5.25v-3c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PaperclipPlus;
