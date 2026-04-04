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
          d="M16.7801 13.22C16.4871 12.9301 16.012 12.9301 15.719 13.22L14.499 14.4399V11.2501C14.499 10.8401 14.163 10.5001 13.749 10.5001C13.335 10.5001 12.999 10.8401 12.999 11.2501V14.4399L11.779 13.22C11.486 12.9301 11.011 12.9301 10.718 13.22C10.425 13.51 10.425 13.9901 10.718 14.2802L13.218 16.7802C13.364 16.9302 13.556 17.0001 13.748 17.0001C13.94 17.0001 14.1321 16.9303 14.2781 16.7802L16.7781 14.2802C17.0711 13.9902 17.0711 13.5101 16.7781 13.22H16.7801Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25 2H4.75C3.233 2 2 3.23 2 4.75V13.25C2 14.77 3.231 16 4.75 16H8.65591C9.06991 16 9.40591 15.66 9.40591 15.25C9.40591 14.84 9.06991 14.5 8.65591 14.5H6.5V8H3.5V6.5H6.5V3.5H8V6.5H14.5V8.65588C14.5 9.06588 14.836 9.40588 15.25 9.40588C15.664 9.40588 16 9.06588 16 8.65588V4.75C16 3.23 14.769 2 13.25 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableDownload;
