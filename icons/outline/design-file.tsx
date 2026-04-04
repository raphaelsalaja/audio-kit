import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DesignFile({
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
        <circle cx="11.5" cy="8" fill={secondaryfill} r="2" stroke="none" />
        <rect
          height="3.5"
          width="3.5"
          fill={secondaryfill}
          rx=".9"
          ry=".9"
          stroke="none"
          x="6"
          y="10"
        />
        <path
          d="M8.402,7.648c.124-.217,.123-.486-.003-.701l-1.33-2.28c-.251-.43-.959-.428-1.208,0l-1.33,2.279c-.126,.216-.128,.484-.003,.702,.124,.217,.357,.352,.607,.352h2.659c.25,0,.483-.135,.607-.352Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M4.75,16.25c-1.105,0-2-.895-2-2V3.75c0-1.105,.895-2,2-2h5.586c.265,0,.52,.105,.707,.293l3.914,3.914c.188,.188,.293,.442,.293,.707v7.586c0,1.105-.895,2-2,2H4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DesignFile;
