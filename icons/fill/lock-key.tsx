import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockKey({
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
          d="M11.75 9C11.336 9 11 8.664 11 8.25V5C11 3.622 9.879 2.5 8.5 2.5C7.121 2.5 6 3.622 6 5V8.25C6 8.664 5.664 9 5.25 9C4.836 9 4.5 8.664 4.5 8.25V5C4.5 2.794 6.294 1 8.5 1C10.706 1 12.5 2.794 12.5 5V8.25C12.5 8.664 12.164 9 11.75 9Z"
          fill={secondaryfill}
        />
        <path
          d="M8.25 14.75C8.25 13.2312 9.48122 12 11 12C12.2588 12 13.32 12.8457 13.6465 14H17C17.4142 14 17.75 14.3358 17.75 14.75C17.75 15.1642 17.4142 15.5 17 15.5H16.25V16.25C16.25 16.6642 15.9142 17 15.5 17C15.0858 17 14.75 16.6642 14.75 16.25V15.5H13.6465C13.32 16.6543 12.2588 17.5 11 17.5C9.48122 17.5 8.25 16.2688 8.25 14.75ZM11 13.5C10.3096 13.5 9.75 14.0596 9.75 14.75C9.75 15.4404 10.3096 16 11 16C11.6904 16 12.25 15.4404 12.25 14.75C12.25 14.0596 11.6904 13.5 11 13.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M7.39377 17C6.9858 16.3475 6.75 15.5763 6.75 14.75C6.75 12.4027 8.65281 10.5 11 10.5C12.5222 10.5 13.8553 11.2994 14.6058 12.5H15V10.25C15 8.733 13.767 7.5 12.25 7.5H4.75C3.233 7.5 2 8.733 2 10.25V14.25C2 15.767 3.233 17 4.75 17H7.39377Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LockKey;
