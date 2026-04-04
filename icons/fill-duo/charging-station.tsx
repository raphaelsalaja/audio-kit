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
          d="m2.9896,4.25c0-1.5192,1.2308-2.75,2.75-2.75h5c1.5192,0,2.75,1.2308,2.75,2.75v11.5c0,.4142-.3358.75-.75.75H3.7396c-.4142,0-.75-.3358-.75-.75V4.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m10.5547,8.3364c-.1079-.2065-.3213-.3364-.5547-.3364h-1.3379l.6104-1.5166c.1182-.2949-.0029-.6313-.2822-.7827-.2793-.1523-.6279-.0698-.8096.1904l-2.1924,3.125c-.1338.1909-.1504.4404-.043.6475.1079.2065.3213.3364.5547.3364h1.3379l-.6104,1.5166c-.1182.2949.0029.6313.2822.7827.0942.0513.1963.0757.2974.0757.1982,0,.3916-.0938.5122-.2661l2.1924-3.125c.1338-.1909.1504-.4404.043-.6475Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m1.2396,15.75c0-.4142.3358-.75.75-.75h12.5c.4142,0,.75.3358.75.75s-.3358.75-.75.75H1.9896c-.4142,0-.75-.3358-.75-.75Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m13.4896,13.1073c.4459.2628.9658.4135,1.5208.4135,1.6568,0,3-1.3432,3-3l-.0208-3.5183c-.0004-.2921-.074-.5793-.2137-.8356l-1.3779-2.5261c-.1983-.3636-.6539-.4976-1.0175-.2993-.3637.1984-.4977.6539-.2993,1.0176l1.0367,1.9007c-.3563.0581-.6283.3674-.6283.7402v1.75c0,.4142.3358.75.75.75h.2647l.0061,1.0228c-.0011.8275-.6723,1.498-1.5,1.498-.8284,0-1.5-.6716-1.5-1.5,0-.0607-.0072-.1196-.0208-.1761v2.7626Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ChargingStation;
