import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GamingBlocks({
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
          d="M13.25,17.5h-3.25c-.965,0-1.75-.785-1.75-1.75v-4c0-.414,.336-.75,.75-.75h5.25c.414,0,.75,.336,.75,.75v4c0,.965-.785,1.75-1.75,1.75Zm-3.5-5v3.25c0,.138,.112,.25,.25,.25h3.25c.138,0,.25-.112,.25-.25v-3.25h-3.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9,12.5H4.75c-.965,0-1.75-.785-1.75-1.75V6.25c0-.414,.336-.75,.75-.75h5.25c.414,0,.75,.336,.75,.75v5.5c0,.414-.336,.75-.75,.75ZM4.5,7v3.75c0,.138,.112,.25,.25,.25h3.5V7h-3.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25,5.5h-3.5V2.25c0-.965-.785-1.75-1.75-1.75h-3.25c-.965,0-1.75,.785-1.75,1.75V6.25c0,.414,.336,.75,.75,.75h4.5v4.75c0,.414,.336,.75,.75,.75h5.25c.414,0,.75-.336,.75-.75V7.25c0-.965-.785-1.75-1.75-1.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GamingBlocks;
