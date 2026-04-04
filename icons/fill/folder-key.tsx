import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderKey({
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
          d="M8.5 14.75C8.5 13.2312 9.73119 12 11.25 12C12.5088 12 13.57 12.8457 13.8965 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H16.5V16.25C16.5 16.6642 16.1642 17 15.75 17C15.3358 17 15 16.6642 15 16.25V15.5H13.8965C13.57 16.6543 12.5088 17.5 11.25 17.5C9.73119 17.5 8.5 16.2688 8.5 14.75ZM11.25 13.5C10.5596 13.5 10 14.0596 10 14.75C10 15.4404 10.5596 16 11.25 16C11.9404 16 12.5 15.4404 12.5 14.75C12.5 14.0596 11.9404 13.5 11.25 13.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M7.18679 16C7.06536 15.6048 7 15.185 7 14.75C7 12.4028 8.90276 10.5 11.25 10.5C12.7722 10.5 14.1053 11.2994 14.8558 12.5H16.5V6.25C16.5 4.734 15.267 3.5 13.75 3.5H8.724L8.346 3.029C7.821 2.375 7.039 2 6.201 2H4.25C2.733 2 1.5 3.234 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H7.18679ZM3 4.75V6.314C3.377 6.12 3.798 6 4.25 6H13.75C14.202 6 14.623 6.12 15 6.314V6.25C15 5.561 14.439 5 13.75 5H8.364C8.136 5 7.921 4.896 7.779 4.719L7.176 3.967C6.938 3.67 6.582 3.5 6.201 3.5H4.25C3.561 3.5 3 4.061 3 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderKey;
