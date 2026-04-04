import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartUser({
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
          d="m8.543,14.8516c.4026-1.1575,1.2111-2.0842,2.224-2.6704-.3259-.48-.517-1.0586-.517-1.6812,0-1.6543,1.3457-3,3-3,.829,0,1.5791.3391,2.1221.8848,0,0,.6279-.8399.6279-1.5259.008-2.1199-1.704-3.8459-3.826-3.8589-1.277.0161-2.464.6599-3.173,1.72-.71-1.0601-1.897-1.7039-3.173-1.72-2.123.0129-3.834,1.739-3.826,3.8589,0,4.7266,4.4367,7.4524,6.1079,8.3411,0,0,.3511-.064.3876-.2.0134-.0498.0284-.0993.0456-.1484Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m15.8873,7.8389c.0712-.3958.1127-.8049.1127-1.23.008-2.1199-1.704-3.8459-3.827-3.8589-1.277.0161-2.464.6599-3.173,1.72-.71-1.061-1.896-1.7039-3.173-1.72-2.123.0129-3.834,1.739-3.827,3.8589,0,4.2173,3.7863,7.0154,5.7894,8.2007"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.3511,17h-4.2021c-.4067,0-.7905-.1987-1.0273-.5317-.2324-.3276-.293-.7476-.1621-1.123.4883-1.4023,1.8105-2.3452,3.2905-2.3452s2.8022.9429,3.291,2.3457c.1304.375.0698.7949-.1626,1.1226-.2368.333-.6206.5317-1.0273.5317Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="13.25" cy="10.5" fill={fill} r="1.5" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default HeartUser;
