import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ExpandObj2({
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
          height="8"
          width="8"
          fill={fill}
          rx="2.25"
          ry="2.25"
          x="5"
          y="5"
        />
        <path
          d="M14.75,1.5h-3c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3c.138,0,.25,.112,.25,.25v3c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V3.25c0-.965-.785-1.75-1.75-1.75Z"
          fill={secondaryfill}
        />
        <path
          d="M6.25,15H3.25c-.138,0-.25-.112-.25-.25v-3c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v3c0,.965,.785,1.75,1.75,1.75h3c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ExpandObj2;
