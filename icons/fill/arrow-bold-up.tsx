import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldUp({
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
          d="M9.996,1.413c-.479-.628-1.514-.628-1.992,0L3.011,7.994c-.289,.38-.336,.883-.124,1.311,.213,.429,.642,.695,1.12,.695h1.993v5.25c0,.965,.785,1.75,1.75,1.75h2.5c.965,0,1.75-.785,1.75-1.75v-5.25h1.993c.479,0,.907-.266,1.12-.695,.212-.428,.165-.931-.124-1.311L9.996,1.413Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowBoldUp;
