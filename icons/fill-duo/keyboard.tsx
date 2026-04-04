import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard({
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
          d="M0 6.75C0 5.23069 1.23128 4 2.75 4H15.25C16.7687 4 18 5.23069 18 6.75V11.25C18 12.7693 16.7687 14 15.25 14H2.75C1.23128 14 0 12.7693 0 11.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.5 10.25C5.5 9.83579 5.83579 9.5 6.25 9.5H11.75C12.1642 9.5 12.5 9.83579 12.5 10.25C12.5 10.6642 12.1642 11 11.75 11H6.25C5.83579 11 5.5 10.6642 5.5 10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 7H3.5C3.2239 7 3 7.224 3 7.5V8C3 8.276 3.2239 8.5 3.5 8.5H4C4.2761 8.5 4.5 8.276 4.5 8V7.5C4.5 7.224 4.2761 7 4 7Z"
          fill={fill}
        />
        <path
          d="M4 9.5H3.5C3.2239 9.5 3 9.724 3 10V10.5C3 10.776 3.2239 11 3.5 11H4C4.2761 11 4.5 10.776 4.5 10.5V10C4.5 9.724 4.2761 9.5 4 9.5Z"
          fill={fill}
        />
        <path
          d="M6.5 7H6C5.7239 7 5.5 7.224 5.5 7.5V8C5.5 8.276 5.7239 8.5 6 8.5H6.5C6.7761 8.5 7 8.276 7 8V7.5C7 7.224 6.7761 7 6.5 7Z"
          fill={fill}
        />
        <path
          d="M9.25 7H8.75C8.4739 7 8.25 7.224 8.25 7.5V8C8.25 8.276 8.4739 8.5 8.75 8.5H9.25C9.5261 8.5 9.75 8.276 9.75 8V7.5C9.75 7.224 9.5261 7 9.25 7Z"
          fill={fill}
        />
        <path
          d="M14.5 7H14C13.7239 7 13.5 7.224 13.5 7.5V8C13.5 8.276 13.7239 8.5 14 8.5H14.5C14.7761 8.5 15 8.276 15 8V7.5C15 7.224 14.7761 7 14.5 7Z"
          fill={fill}
        />
        <path
          d="M14.5 9.5H14C13.7239 9.5 13.5 9.724 13.5 10V10.5C13.5 10.776 13.7239 11 14 11H14.5C14.7761 11 15 10.776 15 10.5V10C15 9.724 14.7761 9.5 14.5 9.5Z"
          fill={fill}
        />
        <path
          d="M12 7H11.5C11.2239 7 11 7.224 11 7.5V8C11 8.276 11.2239 8.5 11.5 8.5H12C12.2761 8.5 12.5 8.276 12.5 8V7.5C12.5 7.224 12.2761 7 12 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Keyboard;
