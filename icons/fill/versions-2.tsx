import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Versions2({
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
          d="M5.25,12h-1.5c-1.517,0-2.75-1.233-2.75-2.75V3.75c0-1.517,1.233-2.75,2.75-2.75h3.5c1.517,0,2.75,1.233,2.75,2.75v.5h-1.5v-.5c0-.689-.561-1.25-1.25-1.25H3.75c-.689,0-1.25,.561-1.25,1.25v5.5c0,.689,.561,1.25,1.25,1.25h1.5v1.5Z"
          fill={secondaryfill}
        />
        <path
          d="M8.75,14.5h-1.5c-1.517,0-2.75-1.233-2.75-2.75V6.25c0-1.517,1.233-2.75,2.75-2.75h3.5c1.517,0,2.75,1.233,2.75,2.75v.5h-1.5v-.5c0-.689-.561-1.25-1.25-1.25h-3.5c-.689,0-1.25,.561-1.25,1.25v5.5c0,.689,.561,1.25,1.25,1.25h1.5v1.5Z"
          fill={secondaryfill}
        />
        <rect
          height="11"
          width="9"
          fill={fill}
          rx="2.75"
          ry="2.75"
          x="8"
          y="6"
        />
      </g>
    </svg>
  );
}

export default Versions2;
