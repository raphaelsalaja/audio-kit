import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Versions({
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
          d="M4.813,13.5h-1.063c-1.516,0-2.75-1.233-2.75-2.75v-3.5c0-1.517,1.234-2.75,2.75-2.75h1.064v1.5h-1.064c-.689,0-1.25,.561-1.25,1.25v3.5c0,.689,.561,1.25,1.25,1.25h1.063v1.5Z"
          fill={secondaryfill}
        />
        <path
          d="M8.314,15h-1.564c-1.516,0-2.75-1.233-2.75-2.75V5.75c0-1.517,1.234-2.75,2.75-2.75h1.564v1.5h-1.564c-.689,0-1.25,.561-1.25,1.25v6.5c0,.689,.561,1.25,1.25,1.25h1.564v1.5Z"
          fill={secondaryfill}
        />
        <rect
          height="15"
          width="9"
          fill={fill}
          rx="2.75"
          ry="2.75"
          x="7.5"
          y="1.5"
        />
      </g>
    </svg>
  );
}

export default Versions;
