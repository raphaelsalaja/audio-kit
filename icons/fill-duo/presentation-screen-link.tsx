import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreenLink({
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
          d="m5.7094,14h1.5811l-.829,2.487c-.131.393-.5558.606-.9487.475-.393-.131-.6053-.556-.4744-.949l.671-2.013Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.7094,14h1.5811l.6709,2.013c.131.393-.0813.818-.4743.949-.393.131-.8177-.082-.9487-.475l-.829-2.487Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12,6h-.5c-1.3784,0-2.5-1.1216-2.5-2.5v-1c0-1.3784,1.1216-2.5,2.5-2.5h.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-.5c-.5513,0-1,.4487-1,1v1c0,.5513.4487,1,1,1h.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.5,6h-.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h.5c.5513,0,1-.4487,1-1v-1c0-.5513-.4487-1-1-1h-.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h.5c1.3784,0,2.5,1.1216,2.5,2.5v1c0,1.3784-1.1216,2.5-2.5,2.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.5,7.5h-.5c-.5783,0-1.101-.2253-1.5-.5852-.399.3599-.9217.5852-1.5.5852h-.5c-2.2056,0-4-1.7944-4-4v-1c0-.1711.0295-.3345.0505-.5h-3.8005c-1.5192,0-2.75,1.231-2.75,2.75v6.5c0,1.519,1.2308,2.75,2.75,2.75h10.5c1.5192,0,2.75-1.231,2.75-2.75v-4.0476c-.4641.1887-.969.2976-1.5.2976Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m14.75,3.75h-2.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default PresentationScreenLink;
