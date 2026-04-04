import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowRotateClockwisePlus({
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
          d="m16.2676,8.4531c-.3955-.0347-.7588.3149-.7705.729-.0967,3.5425-2.9512,6.3179-6.4971,6.3179-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5c2.1631,0,4.129,1.0732,5.3273,2.8013l-1.4572-.2012c-.415-.0498-.7891.2305-.8457.6406s.2305.7886.6406.8457l2.9443.4067c.0352.0044.0693.0068.1035.0068.3682,0,.6895-.2715.7422-.647l.4082-2.9448c.0566-.4102-.2295-.7891-.6406-.8457-.4053-.0586-.7881.2295-.8457.6396l-.1152.8328c-1.4927-1.8855-3.7737-3.0349-6.2617-3.0349C4.5889,1,1,4.5889,1,9s3.5889,8,8,8c4.3643,0,7.877-3.416,7.9971-7.7769.0107-.4141-.3154-.7588-.7295-.77Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m9,12.5c.4141,0,.75-.3359.75-.75v-2h2c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-2v-2c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v2h-2c-.4141,0-.75.3359-.75.75s.3359.75.75.75h2v2c0,.4141.3359.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowRotateClockwisePlus;
