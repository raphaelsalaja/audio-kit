import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarUser({
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
          d="m9,13.1851l.6059.4149c.3245-.3323.76-.6864,1.1612-.9188-.326-.48-.5171-1.0586-.5171-1.6812,0-1.6543,1.3457-3,3-3,.5654,0,1.1746.1918,1.6265.4647l1.3735-1.4476-5.01-.728-2.24-4.5391-2.24,4.5391-5.01.728,3.625,3.5339-.856,4.989,4.481-2.355Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m15.3511,17.5h-4.2021c-.4067,0-.7905-.1987-1.0273-.5317-.2324-.3276-.293-.7476-.1621-1.123.4883-1.4023,1.8105-2.3452,3.2905-2.3452s2.8022.9429,3.291,2.3457c.1304.375.0698.7949-.1626,1.1226-.2368.333-.6206.5317-1.0273.5317Z"
          fill={fill}
          strokeWidth="0"
        />
        <polyline
          fill="none"
          points="9 13.185 4.519 15.54 5.375 10.551 1.75 7.017 6.76 6.289 9 1.75 11.24 6.289 16.25 7.017 15.35 7.8948"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="13.25" cy="11" fill={fill} r="1.5" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default StarUser;
