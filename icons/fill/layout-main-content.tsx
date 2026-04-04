import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayoutMainContent({
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
          d="M8,16H3.75c-1.517,0-2.75-1.233-2.75-2.75V4.75c0-1.517,1.233-2.75,2.75-2.75h4.25v1.5H3.75c-.689,0-1.25,.561-1.25,1.25V13.25c0,.689,.561,1.25,1.25,1.25h4.25v1.5Z"
          fill={secondaryfill}
        />
        <rect
          height="14"
          width="11.5"
          fill={fill}
          rx="2.75"
          ry="2.75"
          x="5.5"
          y="2"
        />
      </g>
    </svg>
  );
}

export default LayoutMainContent;
