import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChargingStation({
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
          d="m3.75,15.75V4.25c0-1.105.895-2,2-2h5c1.105,0,2,.895,2,2v11.5H3.75Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m15.75,4l1.3779,2.5261c.0801.1469.1221.3115.1221.4789l.0208,3.5158c0,1.2426-1.0074,2.25-2.25,2.25h0c-1.2426,0-2.25-1.0074-2.25-2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.5547,8.3364c-.1079-.2065-.3213-.3364-.5547-.3364h-1.3379l.6104-1.5166c.1182-.2949-.0029-.6313-.2822-.7827-.2793-.1523-.6279-.0698-.8096.1904l-2.1924,3.125c-.1338.1909-.1504.4404-.043.6475.1079.2065.3213.3364.5547.3364h1.3379l-.6104,1.5166c-.1182.2949.0029.6313.2822.7827.0942.0513.1963.0757.2974.0757.1982,0,.3916-.0938.5122-.2661l2.1924-3.125c.1338-.1909.1504-.4404.043-.6475Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m3.75,15.75V4.25c0-1.105.895-2,2-2h5c1.105,0,2,.895,2,2v11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2,15.75h12.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="1.75"
          width=".75"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="16.25"
          y="7"
        />
      </g>
    </svg>
  );
}

export default ChargingStation;
