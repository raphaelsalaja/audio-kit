import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BellDot({
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
          d="m7.801,15c-.151,0-.293.068-.388.185-.095.117-.132.271-.101.418.173.822.868,1.397,1.689,1.397s1.516-.575,1.689-1.397c.031-.147-.006-.301-.101-.418-.095-.117-.237-.185-.388-.185h-2.4Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.75,12c-.689,0-1.25-.561-1.25-1.25v-4.25c0-.1709-.0103-.3394-.0256-.5061-.501.3159-1.0895.5061-1.7244.5061-1.792,0-3.25-1.458-3.25-3.25,0-.8008.3022-1.5254.7842-2.0923-.4128-.0994-.8413-.1577-1.2842-.1577-3.033,0-5.5,2.467-5.5,5.5v4.25c0,.689-.561,1.25-1.25,1.25-.414,0-.75.3359-.75.75s.336.75.75.75h13.5c.414,0,.75-.3359.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle
          cx="12.75"
          cy="3.25"
          fill={secondaryfill}
          r="1.75"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default BellDot;
