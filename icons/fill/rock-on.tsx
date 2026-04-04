import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RockOn({
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
          d="m16,4.499c0-.8271-.6729-1.5-1.5-1.5s-1.5.6729-1.5,1.5v2.8901c-.266-.2397-.6144-.3901-1-.3901-.5219,0-.9812.2686-1.25.6738-.2688-.4053-.7281-.6738-1.25-.6738-.3856,0-.734.1504-1,.3901v-3.8901c0-.8271-.6729-1.5-1.5-1.5s-1.5.6729-1.5,1.5v6.9912l-1.3213-1.6826c-.5098-.6504-1.4551-.7646-2.1064-.2534-.6328.4966-.7402,1.3345-.2666,2.0879l1.96,3.0142c1.1582,1.7808,3.1172,2.8438,5.2402,2.8438h1.7451c2.8945,0,5.25-2.355,5.25-5.25l-.001-6.751Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2,6.25c.2646,0,.5195-.1406.6553-.3857l1.25-2.25c.1299-.2324.126-.5156-.0088-.7446s-.3809-.3696-.6465-.3696h-.709l.4209-1.2627c.1221-.3677-.0557-.7681-.4102-.9238-.3525-.1548-.7695-.0171-.957.3223L.3447,2.8857c-.1299.2324-.126.5156.0088.7446s.3809.3696.6465.3696h.709l-.4209,1.2627c-.1221.3677.0557.7681.4102.9238.0977.043.2002.0635.3018.0635Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default RockOn;
