import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileExport({
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
          d="m15.487,5.427l-3.915-3.915c-.3278-.3279-.7724-.512-1.236-.512h-4.586c-1.5188,0-2.75,1.2312-2.75,2.75v10.5c0,1.5188,1.2312,2.75,2.75,2.75h7.5c1.5188,0,2.75-1.2312,2.75-2.75v-7.5845c0-.4646-.1845-.9102-.513-1.2385Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m15.8691,6.001h-3.8691c-.55,0-1-.45-1-1V1.131c.212.087.4068.2158.572.381l3.915,3.915c.1657.1657.2948.3612.3821.574Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.7803,10.2197l-2.25-2.25c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l.9697.9697h-3.4395c-1.3784,0-2.5,1.1216-2.5,2.5,0,1.0225.6187,1.9011,1.5,2.2881v-2.2881c0-.5513.4487-1,1-1h3.4395l-.9697.9697c-.293.293-.293.7676,0,1.0605.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197l2.25-2.25c.293-.293.293-.7676,0-1.0605Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default FileExport;
