import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EqualGreaterThan({
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
          d="m14.25,16.5H3.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h10.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m4.001,13.5c-.2705,0-.5312-.146-.665-.4014-.1924-.3667-.0518-.8203.3154-1.0127l8.7354-4.5859L3.6514,2.9141c-.3672-.1924-.5078-.646-.3154-1.0127.1914-.3662.6436-.5083,1.0127-.3154l10,5.25c.2471.1294.4014.3853.4014.6641s-.1543.5347-.4014.6641l-10,5.25c-.1113.0586-.2305.0859-.3477.0859Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default EqualGreaterThan;
