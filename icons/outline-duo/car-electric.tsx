import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CarElectric({
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
          d="m13.25,13.25v1c0,.5523.4477,1,1,1h1c.5523,0,1-.4477,1-1v-4.4c0-.6295-.2964-1.2223-.8-1.6l-1-.75-.7413-3.2012c-.21-.9067-1.0177-1.5488-1.9484-1.5488h-5.5205c-.9307,0-1.7385.642-1.9484,1.5488l-.7413,3.2012-1,.75c-.5036.3777-.8.9705-.8,1.6v4.4c0,.5523.4477,1,1,1h1c.5523,0,1-.4477,1-1v-1h8.5Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m11.3047,7.3364c-.1079-.2065-.3213-.3364-.5547-.3364h-1.3379l.6104-1.5166c.1182-.2949-.0029-.6313-.2822-.7827-.2798-.1519-.6274-.0703-.8096.1904l-2.1924,3.125c-.1338.1909-.1504.4404-.043.6475.1079.2065.3213.3364.5547.3364h1.3379l-.6104,1.5166c-.1182.2949.0029.6313.2822.7827.0942.0513.1963.0757.2974.0757.1982,0,.3916-.0938.5122-.2661l2.1924-3.125c.1338-.1909.1504-.4404.043-.6475Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.25,13.25v1c0,.5523.4477,1,1,1h1c.5523,0,1-.4477,1-1v-4.4c0-.6295-.2964-1.2223-.8-1.6l-1-.75-.7413-3.2012c-.21-.9067-1.0177-1.5488-1.9484-1.5488h-5.5205c-.9307,0-1.7385.642-1.9484,1.5488l-.7413,3.2012-1,.75c-.5036.3777-.8.9705-.8,1.6v4.4c0,.5523.4477,1,1,1h1c.5523,0,1-.4477,1-1v-1h8.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="5" cy="10.5" fill={fill} r="1" strokeWidth="0" />
        <circle cx="13" cy="10.5" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default CarElectric;
