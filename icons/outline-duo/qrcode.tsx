import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Qrcode({
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
          d="M6.75 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V6.75C2.75 7.30228 3.19772 7.75 3.75 7.75H6.75C7.30228 7.75 7.75 7.30228 7.75 6.75V3.75C7.75 3.19772 7.30228 2.75 6.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 2.75H11.25C10.6977 2.75 10.25 3.19772 10.25 3.75V6.75C10.25 7.30228 10.6977 7.75 11.25 7.75H14.25C14.8023 7.75 15.25 7.30228 15.25 6.75V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 10.25H3.75C3.19772 10.25 2.75 10.6977 2.75 11.25V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H6.75C7.30228 15.25 7.75 14.8023 7.75 14.25V11.25C7.75 10.6977 7.30228 10.25 6.75 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V6.75C2.75 7.30228 3.19772 7.75 3.75 7.75H6.75C7.30228 7.75 7.75 7.30228 7.75 6.75V3.75C7.75 3.19772 7.30228 2.75 6.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 2.75H11.25C10.6977 2.75 10.25 3.19772 10.25 3.75V6.75C10.25 7.30228 10.6977 7.75 11.25 7.75H14.25C14.8023 7.75 15.25 7.30228 15.25 6.75V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 10.25H3.75C3.19772 10.25 2.75 10.6977 2.75 11.25V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H6.75C7.30228 15.25 7.75 14.8023 7.75 14.25V11.25C7.75 10.6977 7.30228 10.25 6.75 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path d="M6 4.5H4.5V6H6V4.5Z" fill={fill} stroke="none" />
        <path d="M13.5 4.5H12V6H13.5V4.5Z" fill={fill} stroke="none" />
        <path d="M6 12H4.5V13.5H6V12Z" fill={fill} stroke="none" />
        <path d="M16 14.5H14.5V16H16V14.5Z" fill={fill} stroke="none" />
        <path d="M14.5 13H13V14.5H14.5V13Z" fill={fill} stroke="none" />
        <path d="M16 11.5H14.5V13H16V11.5Z" fill={fill} stroke="none" />
        <path d="M13 14.5H11V16H13V14.5Z" fill={fill} stroke="none" />
        <path d="M11 11.5H9.5V14.5H11V11.5Z" fill={fill} stroke="none" />
        <path d="M14.5 10H11V11.5H14.5V10Z" fill={fill} stroke="none" />
      </g>
    </svg>
  );
}

export default Qrcode;
