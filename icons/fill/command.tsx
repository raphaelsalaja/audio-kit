import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Command({
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
          d="M13.25,10.5h-1.25v-3h1.25c1.517,0,2.75-1.233,2.75-2.75s-1.233-2.75-2.75-2.75-2.75,1.233-2.75,2.75v1.25h-3v-1.25c0-1.517-1.233-2.75-2.75-2.75s-2.75,1.233-2.75,2.75,1.233,2.75,2.75,2.75h1.25v3h-1.25c-1.517,0-2.75,1.233-2.75,2.75s1.233,2.75,2.75,2.75,2.75-1.233,2.75-2.75v-1.25h3v1.25c0,1.517,1.233,2.75,2.75,2.75s2.75-1.233,2.75-2.75-1.233-2.75-2.75-2.75Zm-1.25-5.75c0-.689,.561-1.25,1.25-1.25s1.25,.561,1.25,1.25-.561,1.25-1.25,1.25h-1.25v-1.25Zm-8.5,0c0-.689,.561-1.25,1.25-1.25s1.25,.561,1.25,1.25v1.25h-1.25c-.689,0-1.25-.561-1.25-1.25Zm2.5,8.5c0,.689-.561,1.25-1.25,1.25s-1.25-.561-1.25-1.25,.561-1.25,1.25-1.25h1.25v1.25Zm1.5-5.75h3v3h-3v-3Zm5.75,7c-.689,0-1.25-.561-1.25-1.25v-1.25h1.25c.689,0,1.25,.561,1.25,1.25s-.561,1.25-1.25,1.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Command;
