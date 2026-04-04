import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bullhorn({
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
          d="M16.185 5.911C16.068 6.006 16 6.149 16 6.3V8.699C16 8.85 16.068 8.992 16.185 9.087C16.302 9.182 16.456 9.219 16.603 9.188C17.425 9.015 18 8.32 18 7.499C18 6.678 17.425 5.983 16.603 5.81C16.456 5.779 16.302 5.816 16.185 5.911Z"
          fill={secondaryfill}
        />
        <path
          d="M5 3.5C2.794 3.5 1 5.294 1 7.5C1 9.706 2.794 11.5 5 11.5V3.5Z"
          fill={fill}
        />
        <path
          d="M13.992 1.041C13.689 0.937 13.354 1.037 13.157 1.291C12.681 1.906 11.095 3.5 9.5 3.5H6.50101V11.5H9.5C11.411 11.5 13.141 13.688 13.158 13.71C13.303 13.896 13.523 13.999 13.75 13.999C13.832 13.999 13.914 13.986 13.994 13.958C14.297 13.854 14.5 13.57 14.5 13.25V7.5V1.75C14.5 1.429 14.296 1.144 13.993 1.041H13.992Z"
          fill={fill}
        />
        <path
          d="M9.51929 15.454C9.71706 16.3908 9.12524 17.3129 8.19171 17.5228C7.24701 17.7223 6.31749 17.1188 6.11791 16.1716L5.45432 13L8.99102 13.0853L9.51929 15.454Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Bullhorn;
