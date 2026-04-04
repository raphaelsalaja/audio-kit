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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M8.5 14.75C8.5 13.2312 9.73119 12 11.25 12C12.5088 12 13.57 12.8457 13.8965 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H16.5V16.25C16.5 16.6642 16.1642 17 15.75 17C15.3358 17 15 16.6642 15 16.25V15.5H13.8965C13.57 16.6543 12.5088 17.5 11.25 17.5C9.73119 17.5 8.5 16.2688 8.5 14.75ZM11.25 13.5C10.5596 13.5 10 14.0596 10 14.75C10 15.4404 10.5596 16 11.25 16C11.9404 16 12.5 15.4404 12.5 14.75C12.5 14.0596 11.9404 13.5 11.25 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H7.18679C7.06536 15.6048 7 15.185 7 14.75C7 12.4028 8.90276 10.5 11.25 10.5C12.7722 10.5 14.1053 11.2994 14.8558 12.5H16.5V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderKey;
