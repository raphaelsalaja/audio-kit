import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaintRoller2({
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
          d="m9,12.75v-1.5c0-.5523-.4477-1-1-1H3.75c-.5523,0-1-.4477-1-1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.75,16.25v-2.5c0-.552-.448-1-1-1h-1.5c-.552,0-1,.448-1,1v2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.75,5.75v-2c0-.552-.448-1-1-1H3.25c-.552,0-1,.448-1,1v2c0,.552.448,1,1,1h11.5c.552,0,1-.448,1-1Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.8809,9.7358c-.1631-.1729-.332-.3496-.4902-.5474-.1895-.2383-.5918-.2383-.7812,0-.1582.1978-.3271.3745-.4902.5474-.5244.5527-1.1191,1.1787-1.1191,2.2417,0,1.1152.8975,2.0225,2,2.0225s2-.9072,2-2.0225c0-1.063-.5947-1.689-1.1191-2.2417Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default PaintRoller2;
