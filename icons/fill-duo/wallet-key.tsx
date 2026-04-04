import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WalletKey({
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
          d="m14.75,6c-3.662,0-7.325-.0029-10.984-.0029-.415,0-.75-.335-.75-.75,0-.4141.335-.75.75-.75h10.734c.001-.249,0-.498,0-.7471,0-.9661-.784-1.75-1.75-1.75H4.25c-1.519,0-2.75,1.231-2.75,2.75v5.6375c.5352-.2437,1.1247-.3875,1.75-.3875,1.4766,0,2.8267.7832,3.5903,2h2.4097c1.2407,0,2.25,1.0093,2.25,2.25,0,.709-.3339,1.3374-.848,1.75h4.098c.966,0,1.75-.7839,1.75-1.75v-6.5c0-.9661-.784-1.75-1.75-1.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m12.75,12.25c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25,1.25.56,1.25,1.25,1.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.25,13.5h-3.3671c-.3289-1.1506-1.3781-2-2.6329-2-1.5166,0-2.75,1.2334-2.75,2.75s1.2334,2.75,2.75,2.75c1.2549,0,2.3041-.8494,2.6329-2h1.1171v.75c0,.4141.3359.75.75.75s.75-.3359.75-.75v-.75h.75c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Zm-6,2c-.6895,0-1.25-.5605-1.25-1.25s.5605-1.25,1.25-1.25,1.25.5605,1.25,1.25-.5605,1.25-1.25,1.25Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default WalletKey;
