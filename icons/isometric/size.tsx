import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Size({
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
        <path d="M14 3L22 7" stroke={secondaryfill} strokeOpacity=".3" />
        <path d="M10 3L2 7" stroke={secondaryfill} strokeOpacity=".3" />
        <path d="M14 2V4" stroke={fill} strokeLinecap="round" />
        <path d="M2 6V8" stroke={fill} strokeLinecap="round" />
        <path d="M22 6V8" stroke={fill} strokeLinecap="round" />
        <path d="M10 2V4" stroke={fill} strokeLinecap="round" />
        <path
          d="M22 17V13.5L12 18.5V22L22 17Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M12 18.5V21.7588" stroke={fill} />
        <path
          d="M2 13.5L11.3292 18.1646C11.7515 18.3757 12.2485 18.3757 12.6708 18.1646L22 13.5"
          stroke={fill}
        />
        <path
          d="M11.3292 21.6646L2.55279 17.2764C2.214 17.107 2 16.7607 2 16.382V14.118C2 13.7393 2.214 13.393 2.55279 13.2236L11.3292 8.83541C11.7515 8.62426 12.2485 8.62426 12.6708 8.83541L21.4472 13.2236C21.786 13.393 22 13.7393 22 14.118V16.382C22 16.7607 21.786 17.107 21.4472 17.2764L12.6708 21.6646C12.2485 21.8757 11.7515 21.8757 11.3292 21.6646Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Size;
