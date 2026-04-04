import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageStar({
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
          d="M16.25 8.08789V4.25C16.25 3.146 15.355 2.25 14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L8.3262 14.189"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 10.068L15.004 12.103L17.25 12.429L15.625 14.013L16.009 16.25L14 15.194L11.991 16.25L12.375 14.013L10.75 12.429L12.996 12.103L14 10.068Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MessageStar;
