import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chess({
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
        <polygon
          fill={fill}
          points="12.1477 10.2388 11.9375 11.5 14.5628 11.5 14.3517 10.2339 12.1477 10.2388"
          strokeWidth="0"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.75"
          x2="5.75"
          y1=".75"
          y2="5.25"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.5"
          x2="4"
          y1="2.25"
          y2="2.25"
        />
        <path
          d="m2.5633,14.6221l.8068-1c.1898-.2353.476-.3721.7783-.3721h3.2026c.3023,0,.5884.1367.7782.372l.807,1c.5278.6541.0623,1.628-.7782,1.628H3.3416c-.8404,0-1.306-.9738-.7783-1.6279Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2.5633,14.6221l.8068-1c.1898-.2353.476-.3721.7783-.3721h3.2026c.3023,0,.5884.1367.7782.372l.807,1c.5278.6541.0623,1.628-.7782,1.628H3.3416c-.8404,0-1.306-.9738-.7783-1.6279Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.75,10.75v-1.2566l1.2064-1.2537.0007.001c.4556-.48.6614-1.1816.4735-1.8965-.0936-.3564-.2979-.6826-.5742-.9255-1.0371-.9094-2.5513-.5437-3.1069.6006-.0886-.1829-.2043-.3506-.3443-.4978-.7506-.7905-2.0005-.8228-2.7905-.0723-.7906.7507-.8228,2.0007-.0721,2.7905l1.2074,1.2544v1.2559"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.25,5.5c-.6041,0-1.1506.2229-1.5828.5796.2051,1.0933-.0143,2.1936-.6074,3.1023.4228.7812,1.2395,1.3181,2.1902,1.3181,1.3807,0,2.5-1.1194,2.5-2.5s-1.1193-2.5-2.5-2.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16.2787,14.3877l-.7479-.9587c-.2112-.2708-.5353-.429-.8786-.429h-2.8042c-.3433,0-.6674.1582-.8786.429l-.0681.0872c.4752.7468.6178,1.635.4122,2.4839h4.178c.8313,0,1.2983-.9565.7871-1.6123Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Chess;
