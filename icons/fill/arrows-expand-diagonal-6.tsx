import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsExpandDiagonal6({
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
          height="16.263"
          width="1.5"
          fill={secondaryfill}
          transform="translate(-3.728 9) rotate(-45)"
          x="8.25"
          y=".868"
        />
        <path
          d="M14.75,15.5h-6.01c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5.26v-5.26c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v6.01c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M3.25,10.01c-.414,0-.75-.336-.75-.75V3.25c0-.414,.336-.75,.75-.75h6.01c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75H4v5.26c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsExpandDiagonal6;
