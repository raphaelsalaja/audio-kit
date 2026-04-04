import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseKey({
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
          d="M11.75 5.5C11.336 5.5 11 5.164 11 4.75V2.25C11 2.112 10.888 2 10.75 2H7.25C7.112 2 7 2.112 7 2.25V4.75C7 5.164 6.664 5.5 6.25 5.5C5.836 5.5 5.5 5.164 5.5 4.75V2.25C5.5 1.285 6.285 0.5 7.25 0.5H10.75C11.715 0.5 12.5 1.285 12.5 2.25V4.75C12.5 5.164 12.164 5.5 11.75 5.5Z"
          fill={fill}
        />
        <path
          d="M8.5 14.75C8.5 13.2312 9.73119 12 11.25 12C12.5088 12 13.57 12.8457 13.8965 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H16.5V16.25C16.5 16.6642 16.1642 17 15.75 17C15.3358 17 15 16.6642 15 16.25V15.5H13.8965C13.57 16.6543 12.5088 17.5 11.25 17.5C9.73119 17.5 8.5 16.2688 8.5 14.75ZM11.25 13.5C10.5596 13.5 10 14.0596 10 14.75C10 15.4404 10.5596 16 11.25 16C11.9404 16 12.5 15.4404 12.5 14.75C12.5 14.0596 11.9404 13.5 11.25 13.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M7.18679 16C7.06536 15.6048 7 15.185 7 14.75C7 12.4028 8.90276 10.5 11.25 10.5C12.7722 10.5 14.1053 11.2994 14.8558 12.5H17V6.75C17 5.233 15.767 4 14.25 4H3.75C2.233 4 1 5.233 1 6.75V13.25C1 14.767 2.233 16 3.75 16H7.18679Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitcaseKey;
