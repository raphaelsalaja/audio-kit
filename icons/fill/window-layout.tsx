import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowLayout({
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
        <rect height="7.75" width="1.5" fill={secondaryfill} x="5.5" y="7.5" />
        <path
          d="M14.25,2H3.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-7.25,2c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm-3,0c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1ZM15.5,13.25c0,.689-.561,1.25-1.25,1.25H3.75c-.689,0-1.25-.561-1.25-1.25v-5.25H15.5v5.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowLayout;
