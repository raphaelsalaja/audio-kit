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
          d="m8.793,14.8516c.4032-1.1575,1.2114-2.084,2.2241-2.6704-.326-.48-.5171-1.0586-.5171-1.6812,0-1.6543,1.3457-3,3-3,.7715,0,1.4689.3008,2.001.781v-3.4011c0-.6694-.3906-1.2891-.9951-1.5786l-4.7515-2.2725c-.4795-.228-1.0288-.2275-1.5093.0005L3.4956,3.3013c-.605.2886-.9956.9082-.9956,1.5786v10.6201h-.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h7.2161c-.3429-.6638-.4207-1.4373-.1731-2.1484Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m9,8c-.4141,0-.75-.3359-.75-.75v-.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v.5c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.25,8c-.4141,0-.75-.3359-.75-.75v-.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v.5c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.75,8c-.4141,0-.75-.3359-.75-.75v-.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v.5c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,11.25c-.4141,0-.75-.3359-.75-.75v-.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v.5c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.25,11.25c-.4141,0-.75-.3359-.75-.75v-.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v.5c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.6011,17h-4.2021c-.4067,0-.7905-.1987-1.0273-.5317-.2324-.3276-.293-.7476-.1621-1.123.4883-1.4023,1.8105-2.3452,3.2905-2.3452s2.8022.9429,3.291,2.3457c.1304.375.0698.7949-.1626,1.1226-.2368.333-.6206.5317-1.0273.5317Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="13.5" cy="10.5" fill={fill} r="1.5" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default OfficeUser;
