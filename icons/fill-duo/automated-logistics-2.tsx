import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AutomatedLogistics2({
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
          d="M5.5 3.75C5.5 2.78349 6.28349 2 7.25 2H10.75C11.7165 2 12.5 2.78349 12.5 3.75V7.25C12.5 8.21651 11.7165 9 10.75 9H7.25C6.28349 9 5.5 8.21651 5.5 7.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 2V5C9.75 5.41421 9.41421 5.75 9 5.75C8.58579 5.75 8.25 5.41421 8.25 5V2H9.75Z"
          fill={fill}
        />
        <path
          d="M14.5 11H3.5C2.11929 11 1 12.1193 1 13.5C1 14.8807 2.11929 16 3.5 16H14.5C15.8807 16 17 14.8807 17 13.5C17 12.1193 15.8807 11 14.5 11ZM9.75 13.5C9.75 13.9142 9.4142 14.25 9 14.25C8.5858 14.25 8.25 13.9142 8.25 13.5C8.25 13.0858 8.5858 12.75 9 12.75C9.4142 12.75 9.75 13.0858 9.75 13.5ZM4.75 14.25C5.1642 14.25 5.5 13.9142 5.5 13.5C5.5 13.0858 5.1642 12.75 4.75 12.75C4.3358 12.75 4 13.0858 4 13.5C4 13.9142 4.3358 14.25 4.75 14.25ZM14 13.5C14 13.9142 13.6642 14.25 13.25 14.25C12.8358 14.25 12.5 13.9142 12.5 13.5C12.5 13.0858 12.8358 12.75 13.25 12.75C13.6642 12.75 14 13.0858 14 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.5 3.75C13.5 2.78349 14.2835 2 15.25 2H16.25C16.6642 2 17 2.33579 17 2.75V8.25C17 8.66421 16.6642 9 16.25 9H15.25C14.2835 9 13.5 8.21651 13.5 7.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.5 3.75C4.5 2.78349 3.71651 2 2.75 2H1.75C1.33579 2 1 2.33579 1 2.75V8.25C1 8.66421 1.33579 9 1.75 9H2.75C3.71651 9 4.5 8.21651 4.5 7.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default AutomatedLogistics2;
