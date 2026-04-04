import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Button({
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
        <path
          d="M22 18V14.4301L12 19.4148V23L22 18Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M16 13.5V10.5L14.0358 11.4832L12 11.7574V15L14.0358 14.6434L16 13.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M12 19.4148V22.801" stroke={fill} />
        <path
          d="M2 14.5L11.5528 19.2764C11.8343 19.4172 12.1657 19.4172 12.4472 19.2764L22 14.5"
          stroke={fill}
        />
        <path d="M20 7L22 6" stroke={fill} strokeLinecap="round" />
        <path d="M4 7L2 6" stroke={fill} strokeLinecap="round" />
        <path d="M12 3V1" stroke={fill} strokeLinecap="round" />
        <path
          d="M8 11L2.55279 13.7236C2.214 13.893 2 14.2393 2 14.618V17.382C2 17.7607 2.214 18.107 2.55279 18.2764L11.3292 22.6646C11.7515 22.8757 12.2485 22.8757 12.6708 22.6646L21.4472 18.2764C21.786 18.107 22 17.7607 22 17.382V14.618C22 14.2393 21.786 13.893 21.4472 13.7236L16 11"
          stroke={fill}
        />
        <path
          d="M16 9.5V12.8546C16 14.0394 14.2091 15 12 15C9.79086 15 8 14.0394 8 12.8546V9.5"
          stroke={fill}
        />
        <path
          d="M16 9.49994C16 10.6848 14.2091 11.6454 12 11.6454C9.79086 11.6454 8 10.6848 8 9.49994C8 8.31504 9.79086 7.35449 12 7.35449C14.2091 7.35449 16 8.31504 16 9.49994Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Button;
