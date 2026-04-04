import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UnorderedList({
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
        <circle cx="3.75" cy="5.25" fill={secondaryfill} r="2.25" />
        <circle cx="3.75" cy="12.75" fill={secondaryfill} r="2.25" />
        <path
          d="M16.25,6h-7.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h7.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M16.25,13.5h-7.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h7.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UnorderedList;
