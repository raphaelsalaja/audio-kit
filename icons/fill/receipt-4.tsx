import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Receipt4({
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
          d="m14.6943,5.3838l-3.5781-3.5781c-.5195-.5195-1.21-.8057-1.9443-.8057h-3.9219c-1.5166,0-2.75,1.2334-2.75,2.75v12.5c0,.2686.1436.5166.376.6504.2354.1343.5205.1328.752-.0024l2.6055-1.5195,2.3643,1.5044c.2441.1562.5605.1562.8047,0l2.3643-1.5044,2.6055,1.5195c.1172.0679.2471.1021.3779.1021.1289,0,.2578-.0332.374-.0996.2324-.1338.376-.3818.376-.6504V7.3286c0-.7349-.2861-1.4253-.8057-1.9448Zm-8.4443,1.6162h2c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-2c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75Zm5.5,4.5h-5.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h5.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Zm-1-5c-.4125,0-.75-.3375-.75-.75v-2.8607l.0557-.0231,3.6208,3.6208-.0054.013h-2.9211Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Receipt4;
