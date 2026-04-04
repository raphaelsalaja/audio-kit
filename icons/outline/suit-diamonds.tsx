import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitDiamonds({
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
          d="M9,16.25c.657-1.132,1.51-2.415,2.615-3.759,1.154-1.404,2.326-2.56,3.385-3.491-1.059-.93-2.23-2.087-3.385-3.491-1.105-1.344-1.958-2.627-2.615-3.759-.657,1.132-1.51,2.415-2.615,3.759-1.154,1.404-2.326,2.56-3.385,3.491,1.059,.93,2.23,2.087,3.385,3.491,1.105,1.344,1.958,2.627,2.615,3.759Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SuitDiamonds;
