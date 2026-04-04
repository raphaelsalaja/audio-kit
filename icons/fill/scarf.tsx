import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Scarf({
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
          d="M15.5,4.025v7.449c.846-.123,1.5-.845,1.5-1.725V5.75c0-.879-.654-1.602-1.5-1.725Z"
          fill={fill}
        />
        <path
          d="M5,4H2.75c-.965,0-1.75,.785-1.75,1.75v4c0,.965,.785,1.75,1.75,1.75h2.25V4Z"
          fill={fill}
        />
        <path
          d="M12.25,2h-4c-.965,0-1.75,.785-1.75,1.75V15.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.25h1.5v1.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.25h1.5v1.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V3.75c0-.965-.785-1.75-1.75-1.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Scarf;
