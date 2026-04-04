import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TypeScale({
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
          d="M11.75,2H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H6V15.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V3.5h4.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M16.25,7h-6c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2.25v6.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-6.75h2.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TypeScale;
