import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Roadmap({
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
          d="m13,9.25v-4.5c0-1.5166-1.2334-2.75-2.75-2.75h-5.7061c-.5972,0-1.1465.2993-1.4697.7998L.6201,6.5928c-.1602.2476-.1602.5669,0,.8145l2.4551,3.7939c.3242.5.8735.7988,1.4688.7988h5.7061c1.5166,0,2.75-1.2334,2.75-2.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m17.3799,10.5923l-1.5-2.3179c-.2251-.3477-.6899-.4458-1.0376-.2222-.3477.2251-.4468.6895-.2222,1.0376l1.2363,1.9102-2.1895,3.3848c-.0469.0723-.126.1152-.2109.1152h-5.7061c-.4326,0-.8296-.2354-1.0615-.6304-.2095-.3564-.6704-.4751-1.0264-.2661-.3574.21-.4766.6694-.2666,1.0264.5044.8579,1.3843,1.3701,2.3545,1.3701h5.7061c.5952,0,1.1445-.2988,1.4697-.7998l2.4541-3.793c.1602-.2476.1602-.5669,0-.8149Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Roadmap;
