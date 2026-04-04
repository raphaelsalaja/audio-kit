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
          d="m16.398,3.6409c-.1983-.3636-.6539-.4976-1.0175-.2993-.3637.1983-.4977.6539-.2993,1.0176l1.0367,1.9007c-.3563.0581-.6283.3674-.6283.7402v1.75c0,.4142.3358.75.75.75h.2648l.006,1.0228c-.0011.8275-.6723,1.498-1.5,1.498-.8284,0-1.5-.6716-1.5-1.5,0-.4142-.3358-.75-.75-.75s-.75.3358-.75.75c0,1.6568,1.3432,3,3,3s3-1.3432,3-3l-.0208-3.5183c-.0004-.2921-.0739-.5793-.2137-.8356l-1.3779-2.5261Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m14.4896,15h-1V4.25c0-1.5171-1.233-2.75-2.75-2.75h-5.0001c-1.517,0-2.75,1.2329-2.75,2.75v10.75h-.997c-.414,0-.75.3359-.75.75s.336.75.75.75h12.4971c.414,0,.75-.3359.75-.75s-.336-.75-.75-.75Zm-3.9779-6.0161l-2.1924,3.125c-.1206.1724-.314.2661-.5122.2661-.1011,0-.2031-.0244-.2974-.0757-.2793-.1514-.4004-.4878-.2822-.7827l.6104-1.5166h-1.3379c-.2334,0-.4468-.1299-.5547-.3364-.1074-.207-.0908-.4565.043-.6475l2.1924-3.125c.1816-.2603.5303-.3428.8096-.1904.2793.1514.4004.4878.2822.7827l-.6104,1.5166h1.3379c.2334,0,.4468.1299.5547.3364.1074.207.0908.4565-.043.6475Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ChargingStation;
