import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chat({
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
          d="M17.5 22.5V10L20.5 8.5V21L17.5 22.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M17.5 10L20.5 8.5" stroke={fill} />
        <path d="M3.5 3L17.5 10L17.5 22.5" stroke={fill} />
        <path
          d="M7 9.25L8.75 10.125L9.625 10.5625"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M10.5 14.25L8.75 13.375L7 12.5"
          stroke={fill}
          strokeLinecap="round"
        />
        <path d="M14 12.75L12.25 11.875" stroke={fill} strokeLinecap="round" />
        <path
          d="M19.9472 21.2764L18.1708 22.1646C17.7485 22.3758 17.2515 22.3758 16.8292 22.1646L7 17.25L5.18045 18.9396C4.5406 19.5337 3.5 19.08 3.5 18.2068V3.61803C3.5 3.23926 3.714 2.893 4.05279 2.72361L5.82918 1.83541C6.25147 1.62426 6.74853 1.62426 7.17082 1.83541L19.9472 8.22361C20.286 8.393 20.5 8.73926 20.5 9.11803V20.382C20.5 20.7608 20.286 21.107 19.9472 21.2764Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Chat;
