import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiscountTag({
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
          d="m15.8662,8.0557l-5.75-5.75c-.5195-.5195-1.21-.8057-1.9443-.8057H3.25c-.9648,0-1.75.7852-1.75,1.75v4.9219c0,.7344.2861,1.4248.8057,1.9443l5.75,5.75c.5361.5361,1.2402.8042,1.9443.8042s1.4082-.2681,1.9443-.8042l3.9219-3.9219c1.0723-1.0723,1.0723-2.8164,0-3.8887Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m8.543,5.793c.3904-.3901,1.0239-.3901,1.4142,0,.3903.3904.3903,1.0239,0,1.4143s-1.0239.3904-1.4142,0c-.3903-.3904-.3903-1.0239,0-1.4143Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.9573,12.7073c-.3903.3904-1.0239.3904-1.4142,0-.3903-.3904-.3903-1.0239,0-1.4143.3904-.3901,1.0239-.3901,1.4142,0,.3903.3904.3903,1.0239,0,1.4143Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.25,10h-6c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h6c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DiscountTag;
