import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gradient({
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
          d="M7 5.5V2.75H3.25C2.698 2.75 2.25 3.198 2.25 3.75V7.25C2.25 7.802 2.698 8.25 3.25 8.25H9V5.5H7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 12.75L3.5 10.75L5.25 12.75V14.25C5.25 14.802 4.802 15.25 4.25 15.25H2.75C2.198 15.25 1.75 14.802 1.75 14.25V12.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 12.75L14.5 10.75L16.25 12.75V14.25C16.25 14.802 15.802 15.25 15.25 15.25H13.75C13.198 15.25 12.75 14.802 12.75 14.25V12.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path d="M11 2.75H9V5.5H11V2.75Z" fill={fill} stroke="none" />
        <path d="M13 5.5H11V8.25H13V5.5Z" fill={fill} stroke="none" />
        <path
          d="M14.75 2.75H3.25C2.6977 2.75 2.25 3.198 2.25 3.75V7.25C2.25 7.802 2.6977 8.25 3.25 8.25H14.75C15.3023 8.25 15.75 7.802 15.75 7.25V3.75C15.75 3.198 15.3023 2.75 14.75 2.75Z"
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

export default Gradient;
