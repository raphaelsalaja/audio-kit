import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dresser({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path d="M11 6.5V13" stroke={fill} />
        <path
          d="M6 14.6294V10.6294L16 15.6294L12 17.6294L6 14.6294Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M22 6L16 9V16V21L22 18V6Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M16 9V21" stroke={fill} />
        <path d="M6 4L16 9L22 6" stroke={fill} />
        <path
          d="M6.55279 3.72361L11.3292 1.33541C11.7515 1.12426 12.2485 1.12426 12.6708 1.33541L21.4472 5.72361C21.786 5.893 22 6.23926 22 6.61803V17.382C22 17.7607 21.786 18.107 21.4472 18.2764L12.6708 22.6646C12.2485 22.8757 11.7515 22.8757 11.3292 22.6646L2.55279 18.2764C2.214 18.107 2 17.7607 2 17.382V13.118C2 12.7393 2.214 12.393 2.55279 12.2236L6 10.5V4.61803C6 4.23926 6.214 3.893 6.55279 3.72361Z"
          stroke={fill}
        />
        <path d="M6 10.5L16 15.5" stroke={fill} />
        <path d="M2 12.5L12 17.5L16 15.5" stroke={fill} />
        <path d="M12 17.5V23" stroke={fill} />
        <path d="M6 17.1294L7 17.6294" stroke={fill} strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default Dresser;
