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
          d="M4.064 10.256C3.779 9.92997 3.22 9.92997 2.935 10.256L1.186 12.256C1.066 12.393 1 12.568 1 12.75V14.25C1 15.215 1.785 16 2.75 16H4.25C5.215 16 6 15.215 6 14.25V12.75C6 12.568 5.934 12.393 5.814 12.256L4.064 10.256Z"
          fill={secondaryfill}
        />
        <path
          d="M16.814 12.256L15.064 10.256C14.779 9.92997 14.22 9.92997 13.935 10.256L12.185 12.256C12.065 12.393 11.999 12.568 11.999 12.75V14.25C11.999 15.215 12.784 16 13.749 16H15.249C16.214 16 16.999 15.215 16.999 14.25V12.75C16.999 12.568 16.934 12.393 16.814 12.256Z"
          fill={secondaryfill}
        />
        <path
          d="M7 5.5V2.75H3.25C2.698 2.75 2.25 3.198 2.25 3.75V7.25C2.25 7.802 2.698 8.25 3.25 8.25H9V5.5H7Z"
          fill={fill}
        />
        <path d="M11 2.75H9V5.5H11V2.75Z" fill={fill} />
        <path d="M13 5.5H11V8.25H13V5.5Z" fill={fill} />
        <path
          d="M1.5 3.75C1.5 2.78393 2.28334 2 3.25 2H14.75C15.7167 2 16.5 2.78393 16.5 3.75V7.25C16.5 8.21607 15.7167 9 14.75 9H3.25C2.28334 9 1.5 8.21607 1.5 7.25V3.75ZM3.25 3.5C3.11206 3.5 3 3.61207 3 3.75V7.25C3 7.38793 3.11206 7.5 3.25 7.5H14.75C14.8879 7.5 15 7.38793 15 7.25V3.75C15 3.61207 14.8879 3.5 14.75 3.5H3.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Gradient;
