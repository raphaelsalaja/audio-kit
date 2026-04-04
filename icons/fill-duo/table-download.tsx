import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableDownload({
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
          d="M16.78 13.22C16.487 12.9301 16.013 12.9301 15.72 13.22L14.5 14.4399V11.2501C14.5 10.8401 14.164 10.5001 13.75 10.5001C13.336 10.5001 13 10.8401 13 11.2501V14.4399L11.78 13.22C11.487 12.9301 11.013 12.9301 10.72 13.22C10.427 13.51 10.427 13.9901 10.72 14.2802L13.22 16.7802C13.366 16.9302 13.558 17.0001 13.75 17.0001C13.942 17.0001 14.134 16.9303 14.281 16.7802L16.781 14.2802C17.074 13.9902 17.073 13.5101 16.78 13.22Z"
          fill={fill}
        />
        <path d="M6.5 6.5V2H4.75C3.233 2 2 3.23 2 4.75V6.5H6.5Z" fill={fill} />
        <path
          d="M8.625 14.5H6.5V6.5H2V13.25C2 14.77 3.233 16 4.75 16H8.625C9.039 16 9.375 15.66 9.375 15.25C9.375 14.84 9.039 14.5 8.625 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.25 2H6.5V6.5H14.5V8.625C14.5 9.035 14.836 9.375 15.25 9.375C15.664 9.375 16 9.035 16 8.625V4.75C16 3.23 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TableDownload;
