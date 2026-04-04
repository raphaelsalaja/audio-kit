import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowHeart({
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
          d="m14.25,2H3.75c-1.517,0-2.75,1.233-2.75,2.75v8.5c0,1.517,1.233,2.75,2.75,2.75h4.3392c.414,0,.75-.336.75-.75s-.336-.75-.75-.75H3.75c-.689,0-1.25-.561-1.25-1.25v-5.25h13v.5755c0,.414.336.75.75.75s.75-.336.75-.75v-3.8255c0-1.517-1.233-2.75-2.75-2.75ZM4,6c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm3,0c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.731,17.933c.17.089.368.089.538,0,.897-.472,3.731-2.181,3.731-4.961.004-1.221-.974-2.215-2.187-2.222-.73.009-1.408.38-1.813.991-.405-.611-1.084-.981-1.813-.991-1.213.007-2.191,1.002-2.187,2.222,0,2.78,2.834,4.489,3.731,4.961Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default WindowHeart;
