import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Film({
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
          d="M14.25,2H3.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75ZM6,3.5h2.25v2h-2.25V3.5Zm-1.5,11h-.75c-.689,0-1.25-.561-1.25-1.25v-.75h2v2Zm0-9H2.5v-.75c0-.689,.561-1.25,1.25-1.25h.75v2Zm3.75,9h-2.25v-2h2.25v2Zm0-7.5h1.5v4h-1.5V7Zm3.75,7.5h-2.25v-2h2.25v2Zm0-9h-2.25V3.5h2.25v2Zm3.5,7.75c0,.689-.561,1.25-1.25,1.25h-.75v-2h2v.75Zm0-7.75h-2V3.5h.75c.689,0,1.25,.561,1.25,1.25v.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Film;
