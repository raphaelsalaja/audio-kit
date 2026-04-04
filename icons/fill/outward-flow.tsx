import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OutwardFlow({
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
        <circle cx="9" cy="9" fill={secondaryfill} r="3" strokeWidth="0" />
        <path
          d="m9,1c-1.6543,0-3,1.3457-3,3,0,.4141.3359.75.75.75s.75-.3359.75-.75c0-.8271.6729-1.5,1.5-1.5s1.5.6729,1.5,1.5c0,.4141.3359.75.75.75s.75-.3359.75-.75c0-1.6543-1.3457-3-3-3Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14,6c-.4141,0-.75.3359-.75.75s.3359.75.75.75c.8271,0,1.5.6729,1.5,1.5s-.6729,1.5-1.5,1.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75c1.6543,0,3-1.3457,3-3s-1.3457-3-3-3Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.25,13.25c-.4141,0-.75.3359-.75.75,0,.8271-.6729,1.5-1.5,1.5s-1.5-.6729-1.5-1.5c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75c0,1.6543,1.3457,3,3,3s3-1.3457,3-3c0-.4141-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m4,7.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75c-1.6543,0-3,1.3457-3,3s1.3457,3,3,3c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75c-.8271,0-1.5-.6729-1.5-1.5s.6729-1.5,1.5-1.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default OutwardFlow;
