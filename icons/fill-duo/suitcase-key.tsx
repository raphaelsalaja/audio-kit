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
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
        <path
          d="M8.5 14.75C8.5 13.2312 9.73119 12 11.25 12C12.5088 12 13.57 12.8457 13.8965 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H16.5V16.25C16.5 16.6642 16.1642 17 15.75 17C15.3358 17 15 16.6642 15 16.25V15.5H13.8965C13.57 16.6543 12.5088 17.5 11.25 17.5C9.73119 17.5 8.5 16.2688 8.5 14.75ZM11.25 13.5C11.9404 13.5 12.5 14.0596 12.5 14.75C12.5 15.4404 11.9404 16 11.25 16C10.5596 16 10 15.4404 10 14.75C10 14.0596 10.5596 13.5 11.25 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 6.75C1 5.23203 2.23054 4 3.75 4H14.25C15.7695 4 17 5.23203 17 6.75V12.5H14.8558C14.1053 11.2994 12.7722 10.5 11.25 10.5C8.90276 10.5 7 12.4028 7 14.75C7 15.185 7.06536 15.6048 7.18679 16H3.75C2.23054 16 1 14.768 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcaseKey;
