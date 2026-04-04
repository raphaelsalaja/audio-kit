import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsExpandDiagonal4({
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
          height="17.678"
          width="1.5"
          fill={secondaryfill}
          transform="translate(-3.728 9) rotate(-45)"
          x="8.25"
          y=".161"
        />
        <path
          d="M2.75,8c-.414,0-.75-.336-.75-.75V2.75c0-.414,.336-.75,.75-.75H7.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75H3.5v3.75c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M15.25,16h-4.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3.75v-3.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v4.5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsExpandDiagonal4;
