import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OfficeUser({
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
          d="m8.793,14.8516c.4032-1.1575,1.2114-2.084,2.2241-2.6704-.326-.48-.5171-1.0586-.5171-1.6812,0-1.6543,1.3457-3,3-3,.4478,0,.869.1052,1.251.282v-2.9021c0-.3848-.222-.7358-.569-.9019l-4.75-2.272c-.273-.1301-.59-.1301-.863,0L3.819,3.978c-.348.166-.569.5171-.569.9019v11.3701h5.4501c-.0867-.4629-.0655-.9438.0928-1.3984Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m3.25,16.25V4.88c0-.385.221-.736.569-.902l4.75-2.272c.273-.13.59-.13.863,0l4.75,2.272c.347.166.569.517.569.902v2.0847"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.6011,17h-4.2021c-.4067,0-.7905-.1987-1.0273-.5317-.2324-.3276-.293-.7476-.1621-1.123.4883-1.4023,1.8105-2.3452,3.2905-2.3452s2.8022.9429,3.291,2.3457c.1304.375.0698.7949-.1626,1.1226-.2368.333-.6206.5317-1.0273.5317Z"
          fill={fill}
          strokeWidth="0"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="7.25"
          y2="6.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.25"
          x2="6.25"
          y1="7.25"
          y2="6.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.75"
          x2="11.75"
          y1="7.25"
          y2="6.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="10.5"
          y2="10"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.25"
          x2="6.25"
          y1="10.5"
          y2="10"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.9288"
          x2="1.75"
          y1="16.25"
          y2="16.25"
        />
        <circle cx="13.5" cy="10.5" fill={fill} r="1.5" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default OfficeUser;
