import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GamepadButtons({
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
          d="M15.75 7.74999V10.25C15.75 10.802 15.302 11.25 14.75 11.25H13.414C13.149 11.25 12.894 11.145 12.707 10.957L11.103 9.35299C10.908 9.15799 10.908 8.84099 11.103 8.64599L12.707 7.04199C12.895 6.85399 13.149 6.74899 13.414 6.74899H14.75C15.302 6.74899 15.75 7.19799 15.75 7.74999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 10.25V7.75C2.25 7.198 2.698 6.75 3.25 6.75H4.586C4.851 6.75 5.106 6.855 5.293 7.043L6.897 8.647C7.092 8.842 7.092 9.159 6.897 9.354L5.293 10.958C5.105 11.146 4.851 11.251 4.586 11.251H3.25C2.698 11.251 2.25 10.803 2.25 10.251V10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.75002 2.25H10.25C10.802 2.25 11.25 2.698 11.25 3.25V4.586C11.25 4.851 11.145 5.106 10.957 5.293L9.35302 6.897C9.15802 7.092 8.84102 7.092 8.64602 6.897L7.04202 5.293C6.85402 5.105 6.74902 4.851 6.74902 4.586V3.25C6.74902 2.698 7.19802 2.25 7.75002 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 7.74999V10.25C15.75 10.802 15.302 11.25 14.75 11.25H13.414C13.149 11.25 12.894 11.145 12.707 10.957L11.103 9.35299C10.908 9.15799 10.908 8.84099 11.103 8.64599L12.707 7.04199C12.895 6.85399 13.149 6.74899 13.414 6.74899H14.75C15.302 6.74899 15.75 7.19799 15.75 7.74999Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 15.75H7.75C7.198 15.75 6.75 15.302 6.75 14.75V13.414C6.75 13.149 6.855 12.894 7.043 12.707L8.647 11.103C8.842 10.908 9.159 10.908 9.354 11.103L10.958 12.707C11.146 12.895 11.251 13.149 11.251 13.414V14.75C11.251 15.302 10.803 15.75 10.251 15.75H10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 10.25V7.75C2.25 7.198 2.698 6.75 3.25 6.75H4.586C4.851 6.75 5.106 6.855 5.293 7.043L6.897 8.647C7.092 8.842 7.092 9.159 6.897 9.354L5.293 10.958C5.105 11.146 4.851 11.251 4.586 11.251H3.25C2.698 11.251 2.25 10.803 2.25 10.251V10.25Z"
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

export default GamepadButtons;
