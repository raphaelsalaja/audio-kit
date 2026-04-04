import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Photo2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m9.591,5.659c-.877-.877-2.305-.877-3.182,0L1.974,10.094c.239.1.501.156.776.156h6.5c1.105,0,2-.895,2-2v-.932l-1.659-1.659Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9.25,11H2.75c-1.517,0-2.75-1.233-2.75-2.75V3.75C0,2.233,1.233,1,2.75,1h6.5c1.517,0,2.75,1.233,2.75,2.75v4.5c0,1.517-1.233,2.75-2.75,2.75ZM2.75,2.5c-.689,0-1.25.561-1.25,1.25v4.5c0,.689.561,1.25,1.25,1.25h6.5c.689,0,1.25-.561,1.25-1.25V3.75c0-.689-.561-1.25-1.25-1.25H2.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="4" cy="5" fill={secondaryfill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Photo2;
