import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowDownload({
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
          d="M14.25 2H3.75C2.233 2 1 3.23 1 4.75V13.25C1 14.77 2.233 16 3.75 16H8.625C9.039 16 9.375 15.66 9.375 15.25C9.375 14.84 9.039 14.5 8.625 14.5H3.75C3.061 14.5 2.5 13.9399 2.5 13.25V8H15.5V9.59375C15.5 10.0037 15.836 10.3438 16.25 10.3438C16.664 10.3438 17 10.0037 17 9.59375V4.75C17 3.23 15.767 2 14.25 2ZM4 6C3.448 6 3 5.55 3 5C3 4.45 3.448 4 4 4C4.552 4 5 4.45 5 5C5 5.55 4.552 6 4 6ZM7 6C6.448 6 6 5.55 6 5C6 4.45 6.448 4 7 4C7.552 4 8 4.45 8 5C8 5.55 7.552 6 7 6Z"
          fill={fill}
        />
        <path
          d="M16.78 13.22C16.487 12.9301 16.012 12.9301 15.719 13.22L14.499 14.4399V11.2501C14.499 10.8401 14.163 10.5001 13.749 10.5001C13.335 10.5001 12.999 10.8401 12.999 11.2501V14.4399L11.779 13.22C11.486 12.9301 11.011 12.9301 10.718 13.22C10.425 13.51 10.425 13.9901 10.718 14.2802L13.218 16.7802C13.364 16.9302 13.556 17.0001 13.748 17.0001C13.94 17.0001 14.132 16.9303 14.278 16.7802L16.778 14.2802C17.071 13.9902 17.071 13.5101 16.778 13.22H16.78Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowDownload;
