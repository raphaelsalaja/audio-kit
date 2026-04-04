import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AugmentedReality2({
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
          d="m8.398.912l-2.55,1.479c-.37.215-.598.61-.598,1.038v2.968c0,.428.228.823.598,1.038l2.55,1.479c.372.216.832.216,1.204,0l2.55-1.479c.37-.215.598-.61.598-1.038v-2.968c0-.428-.228-.823-.598-1.038l-2.55-1.479c-.372-.216-.832-.216-1.204,0Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m8.398.912l-2.55,1.479c-.37.215-.598.61-.598,1.038v2.968c0,.428.228.823.598,1.038l2.55,1.479c.372.216.832.216,1.204,0l2.55-1.479c.37-.215.598-.61.598-1.038v-2.968c0-.428-.228-.823-.598-1.038l-2.55-1.479c-.372-.216-.832-.216-1.204,0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m16.072,10.58l-6.663,2.987c-.26.117-.558.117-.818,0l-6.664-2.987"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m3.948,9.5144l-1.607.7205c-.36.1621-.591.519-.591.9131v1.9551c0,.395.231.752.591.9131l6.25,2.8018c.26.1172.558.1172.818,0l6.25-2.8018c.36-.1621.591-.519.591-.9131v-1.9551c0-.395-.231-.752-.591-.9131l-1.6071-.7205"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="12.59 2.831 9 4.913 5.41 2.831"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="9.076"
          y2="4.913"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="16.904"
          y2="13.654"
        />
      </g>
    </svg>
  );
}

export default AugmentedReality2;
