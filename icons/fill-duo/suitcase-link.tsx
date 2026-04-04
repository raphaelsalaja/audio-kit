import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseLink({
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
          d="m7,2.25c0-.138.112-.25.25-.25h3.5c.138,0,.25.112.25.25v1.75h1.5v-1.75c0-.966-.784-1.75-1.75-1.75h-3.5c-.966,0-1.75.784-1.75,1.75v1.75h1.5v-1.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12,17h-.5c-1.3784,0-2.5-1.1216-2.5-2.5v-1c0-1.3784,1.1216-2.5,2.5-2.5h.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-.5c-.5513,0-1,.4487-1,1v1c0,.5513.4487,1,1,1h.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.5,17h-.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h.5c.5513,0,1-.4487,1-1v-1c0-.5513-.4487-1-1-1h-.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h.5c1.3784,0,2.5,1.1216,2.5,2.5v1c0,1.3784-1.1216,2.5-2.5,2.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7.5,14.5v-1c0-2.2056,1.7944-4,4-4h.5c.5783,0,1.101.2253,1.5.5852.399-.3599.9217-.5852,1.5-.5852h.5c.531,0,1.0359.1089,1.5.2976v-3.0476c0-1.5181-1.23-2.75-2.75-2.75H3.75c-1.519,0-2.75,1.2319-2.75,2.75v6.5c0,1.5181,1.231,2.75,2.75,2.75h4.0475c-.1887-.4641-.2975-.969-.2975-1.5Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m14.75,14.75h-2.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SuitcaseLink;
