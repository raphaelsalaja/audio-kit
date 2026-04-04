import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowLink({
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
          d="M14.25 2H3.75C2.233 2 1 3.23 1 4.75V13.25C1 14.77 2.233 16 3.75 16H6.7708C7.1848 16 7.5208 15.66 7.5208 15.25C7.5208 14.84 7.1848 14.5 6.7708 14.5H3.75C3.061 14.5 2.5 13.9399 2.5 13.25V8H15.5V9.3125C15.5 9.7324 15.836 10.0625 16.25 10.0625C16.664 10.0625 17 9.7324 17 9.3125V4.75C17 3.23 15.767 2 14.25 2ZM4 6C3.448 6 3 5.55 3 5C3 4.45 3.448 4 4 4C4.552 4 5 4.45 5 5C5 5.55 4.552 6 4 6ZM7 6C6.448 6 6 5.55 6 5C6 4.45 6.448 4 7 4C7.552 4 8 4.45 8 5C8 5.55 7.552 6 7 6Z"
          fill={fill}
        />
        <path
          d="M12 17.5H11.5C10.1216 17.5 9 16.3789 9 15V14C9 12.6211 10.1216 11.5 11.5 11.5H12C12.4141 11.5 12.75 11.8359 12.75 12.25C12.75 12.6641 12.4141 13 12 13H11.5C10.9487 13 10.5 13.4482 10.5 14V15C10.5 15.5518 10.9487 16 11.5 16H12C12.4141 16 12.75 16.3359 12.75 16.75C12.75 17.1641 12.4141 17.5 12 17.5Z"
          fill={secondaryfill}
        />
        <path
          d="M15.5 17.5H15C14.5859 17.5 14.25 17.1641 14.25 16.75C14.25 16.3359 14.5859 16 15 16H15.5C16.0513 16 16.5 15.5518 16.5 15V14C16.5 13.4482 16.0513 13 15.5 13H15C14.5859 13 14.25 12.6641 14.25 12.25C14.25 11.8359 14.5859 11.5 15 11.5H15.5C16.8784 11.5 18 12.6211 18 14V15C18 16.3789 16.8784 17.5 15.5 17.5Z"
          fill={secondaryfill}
        />
        <path
          d="M14.75 15.25H12.25C11.8359 15.25 11.5 14.9141 11.5 14.5C11.5 14.0859 11.8359 13.75 12.25 13.75H14.75C15.1641 13.75 15.5 14.0859 15.5 14.5C15.5 14.9141 15.1641 15.25 14.75 15.25Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowLink;
