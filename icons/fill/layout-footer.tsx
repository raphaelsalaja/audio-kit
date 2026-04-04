import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayoutFooter({
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
          d="M17,13h-1.5V4.75c0-.689-.561-1.25-1.25-1.25H3.75c-.689,0-1.25,.561-1.25,1.25V13H1V4.75c0-1.517,1.233-2.75,2.75-2.75H14.25c1.517,0,2.75,1.233,2.75,2.75V13Z"
          fill={secondaryfill}
        />
        <rect
          height="6"
          width="16"
          fill={fill}
          rx="2.75"
          ry="2.75"
          x="1"
          y="10"
        />
      </g>
    </svg>
  );
}

export default LayoutFooter;
