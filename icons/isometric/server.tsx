import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Server({
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
          d="M12 11L22 6V18L12 23V11Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M9 2.5L19 7.5V19.5" stroke={fill} />
        <path d="M2 10L12 15L22 10" stroke={fill} />
        <path d="M2 14L12 19L22 14" stroke={fill} />
        <path d="M12 11V23" stroke={fill} />
        <path
          d="M22 6L12.4472 10.7764C12.1657 10.9172 11.8343 10.9172 11.5528 10.7764L2 6"
          stroke={fill}
        />
        <path
          d="M21.4472 5.72361L12.6708 1.33541C12.2485 1.12426 11.7515 1.12426 11.3292 1.33541L2.55279 5.72361C2.214 5.893 2 6.23926 2 6.61803V17.382C2 17.7607 2.214 18.107 2.55279 18.2764L11.3292 22.6646C11.7515 22.8757 12.2485 22.8757 12.6708 22.6646L21.4472 18.2764C21.786 18.107 22 17.7607 22 17.382V6.61803C22 6.23926 21.786 5.893 21.4472 5.72361Z"
          stroke={fill}
        />
        <path d="M10 20H10.01" stroke={fill} strokeLinecap="round" />
        <path d="M10 16H10.01" stroke={fill} strokeLinecap="round" />
        <path d="M10 12H10.01" stroke={fill} strokeLinecap="round" />
        <path d="M4 9L5 9.5" stroke={fill} strokeLinecap="round" />
        <path d="M4 13L5 13.5" stroke={fill} strokeLinecap="round" />
        <path d="M4 17L5 17.5" stroke={fill} strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default Server;
