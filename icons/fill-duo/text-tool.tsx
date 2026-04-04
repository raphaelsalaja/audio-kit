import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextTool({
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
          d="M6.75 5.5C6.33579 5.5 6 5.83579 6 6.25C6 6.66421 6.33579 7 6.75 7H8.25V11.75C8.25 12.1642 8.58579 12.5 9 12.5C9.41421 12.5 9.75 12.1642 9.75 11.75V7H11.25C11.6642 7 12 6.66421 12 6.25C12 5.83579 11.6642 5.5 11.25 5.5H6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.25 4C3.66421 4 4 4.33579 4 4.75V13.25C4 13.6642 3.66421 14 3.25 14C2.83579 14 2.5 13.6642 2.5 13.25V4.75C2.5 4.33579 2.83579 4 3.25 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4 14.75C4 14.3358 4.33579 14 4.75 14H13.25C13.6642 14 14 14.3358 14 14.75C14 15.1642 13.6642 15.5 13.25 15.5H4.75C4.33579 15.5 4 15.1642 4 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.75 4C15.1642 4 15.5 4.33579 15.5 4.75V13.25C15.5 13.6642 15.1642 14 14.75 14C14.3358 14 14 13.6642 14 13.25V4.75C14 4.33579 14.3358 4 14.75 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4 3.25C4 2.83579 4.33579 2.5 4.75 2.5H13.25C13.6642 2.5 14 2.83579 14 3.25C14 3.66421 13.6642 4 13.25 4H4.75C4.33579 4 4 3.66421 4 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 2.25C1 1.55197 1.56351 1 2.25 1H4.25C4.93649 1 5.5 1.55197 5.5 2.25V4.25C5.5 4.94803 4.93649 5.5 4.25 5.5H2.25C1.56351 5.5 1 4.94803 1 4.25V2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.5 2.25C12.5 1.55197 13.0635 1 13.75 1H15.75C16.4365 1 17 1.55197 17 2.25V4.25C17 4.94803 16.4365 5.5 15.75 5.5H13.75C13.0635 5.5 12.5 4.94803 12.5 4.25V2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 13.75C1 13.052 1.56351 12.5 2.25 12.5H4.25C4.93649 12.5 5.5 13.052 5.5 13.75V15.75C5.5 16.448 4.93649 17 4.25 17H2.25C1.56351 17 1 16.448 1 15.75V13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.5 13.75C12.5 13.052 13.0635 12.5 13.75 12.5H15.75C16.4365 12.5 17 13.052 17 13.75V15.75C17 16.448 16.4365 17 15.75 17H13.75C13.0635 17 12.5 16.448 12.5 15.75V13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextTool;
