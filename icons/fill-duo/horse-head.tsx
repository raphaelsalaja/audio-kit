import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HorseHead({
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
          d="m15.9565,5.6436C13.8711,1.7856,9.8184,1.0796,7.5884,1.002c-.2217-.0073-.4414.0859-.5898.2554s-.2129.3965-.1758.6182l.3672,2.1851L1.7324,8.6943c-.6621.564-.9009,1.4897-.5957,2.3022l.0747.2002c.3901,1.0396,1.5239,1.5835,2.5996,1.2358l1.1182-.3989c.4683-.1489.9927.0054,1.6582.2017.4644.1367.9976.2935,1.6045.3647,1.6258.2351,3.761-.5295,3.761-.5295,0,0-1.3647,1.8177-4.5701,1.6331-.4712.5356-1.0049,1.1426-1.353,2.3364-.0659.2266-.0215.4712.1201.6602.1416.1885.3643.2998.6001.2998h8.25c.3159,0,.6255-.2739.7329-.5713,1.6069-4.459,1.6821-8.0874.2236-10.7852Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <circle cx="8.5" cy="7.5" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default HorseHead;
