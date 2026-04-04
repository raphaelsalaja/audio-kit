import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxDoor({
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
          d="M15.25,15.5h-.25V2.75c0-.965-.785-1.75-1.75-1.75H5.75c-.965,0-1.75,.785-1.75,1.75v5.75h2.25c1.792,0,3.25,1.458,3.25,3.25v3.5c0,.645-.194,1.244-.52,1.75h6.27c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Zm-3.5-5.5h-1c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M6.25,10h-1v2.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-2.25h-1c-.965,0-1.75,.785-1.75,1.75v3.5c0,.965,.785,1.75,1.75,1.75h3.5c.965,0,1.75-.785,1.75-1.75v-3.5c0-.965-.785-1.75-1.75-1.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default BoxDoor;
