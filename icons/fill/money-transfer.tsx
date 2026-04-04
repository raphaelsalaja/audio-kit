import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoneyTransfer({
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
          d="m16.25,5H1.75c-.3037,0-.5771-.1826-.6934-.4629-.1152-.2803-.0518-.603.1631-.8174L3.7197,1.2197c.293-.293.7676-.293,1.0605,0s.293.7676,0,1.0605l-1.2197,1.2197h12.6895c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m13.75,17c-.1924,0-.3838-.0732-.5303-.2197-.293-.293-.293-.7676,0-1.0605l1.2197-1.2197H1.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h14.5c.3037,0,.5771.1826.6934.4629.1152.2803.0518.603-.1631.8174l-2.5,2.5c-.1465.1465-.3379.2197-.5303.2197Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9,3c-3.3086,0-6,2.6914-6,6s2.6914,6,6,6,6-2.6914,6-6-2.6914-6-6-6Zm.75,8.25c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-4.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v4.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default MoneyTransfer;
