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
          d="m9.75,12v-.75c0-.9648-.7852-1.75-1.75-1.75H3.75c-.1377,0-.25-.1123-.25-.25,0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75c0,.9648.7852,1.75,1.75,1.75h4.25c.1377,0,.25.1123.25.25v.75c-.9648,0-1.75.7852-1.75,1.75v2.5c0,.4141.3359.75.75.75s.75-.3359.75-.75v-2.5c0-.1377.1123-.25.25-.25h1.5c.1377,0,.25.1123.25.25v2.5c0,.4141.3359.75.75.75s.75-.3359.75-.75v-2.5c0-.9648-.7852-1.75-1.75-1.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.8809,9.7358c-.1631-.1729-.332-.3496-.4902-.5474-.1895-.2383-.5918-.2383-.7812,0-.1582.1978-.3271.3745-.4902.5474-.5244.5527-1.1191,1.1787-1.1191,2.2417,0,1.1152.8975,2.0225,2,2.0225s2-.9072,2-2.0225c0-1.063-.5947-1.689-1.1191-2.2417Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <rect
          height="5.5"
          width="15"
          fill={fill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="1.5"
          y="2"
        />
      </g>
    </svg>
  );
}

export default PaintRoller2;
