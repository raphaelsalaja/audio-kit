import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookWrench({
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
          d="M15.25,12.75c-.641,.844-.734,2.547,0,3.5H4.5c-.966,0-1.75-.783-1.75-1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25,12.75H4.5c-.966,0-1.75,.783-1.75,1.75V3.75c0-1.105,.895-2,2-2H15.25V12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25,5.75c0-.978-.628-1.802-1.5-2.112v1.862c0,.276-.224,.5-.5,.5h-.5c-.276,0-.5-.224-.5-.5v-1.862c-.872,.31-1.5,1.134-1.5,2.112,0,.882,.512,1.637,1.25,2.006v2.244c0,.552,.448,1,1,1s1-.448,1-1v-2.244c.738-.369,1.25-1.124,1.25-2.006Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BookWrench;
