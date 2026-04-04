import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KeyboardHideDown({
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
          d="M5.96967 13.2197C6.26256 12.9268 6.73744 12.9268 7.03033 13.2197L9 15.1893L10.9697 13.2197C11.2626 12.9268 11.7374 12.9268 12.0303 13.2197C12.3232 13.5126 12.3232 13.9874 12.0303 14.2803L9.53033 16.7803C9.23744 17.0732 8.76256 17.0732 8.46967 16.7803L5.96967 14.2803C5.67678 13.9874 5.67678 13.5126 5.96967 13.2197Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0 4.75C0 3.23069 1.23128 2 2.75 2H15.25C16.7687 2 18 3.23069 18 4.75V9.25C18 10.7693 16.7687 12 15.25 12H2.75C1.23128 12 0 10.7693 0 9.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.5 8.25C5.5 7.83579 5.83579 7.5 6.25 7.5H11.75C12.1642 7.5 12.5 7.83579 12.5 8.25C12.5 8.66421 12.1642 9 11.75 9H6.25C5.83579 9 5.5 8.66421 5.5 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 5H3.5C3.2239 5 3 5.224 3 5.5V6C3 6.276 3.2239 6.5 3.5 6.5H4C4.2761 6.5 4.5 6.276 4.5 6V5.5C4.5 5.224 4.2761 5 4 5Z"
          fill={fill}
        />
        <path
          d="M4 7.5H3.5C3.2239 7.5 3 7.724 3 8V8.5C3 8.776 3.2239 9 3.5 9H4C4.2761 9 4.5 8.776 4.5 8.5V8C4.5 7.724 4.2761 7.5 4 7.5Z"
          fill={fill}
        />
        <path
          d="M6.5 5H6C5.7239 5 5.5 5.224 5.5 5.5V6C5.5 6.276 5.7239 6.5 6 6.5H6.5C6.7761 6.5 7 6.276 7 6V5.5C7 5.224 6.7761 5 6.5 5Z"
          fill={fill}
        />
        <path
          d="M9.25 5H8.75C8.4739 5 8.25 5.224 8.25 5.5V6C8.25 6.276 8.4739 6.5 8.75 6.5H9.25C9.5261 6.5 9.75 6.276 9.75 6V5.5C9.75 5.224 9.5261 5 9.25 5Z"
          fill={fill}
        />
        <path
          d="M14.5 5H14C13.7239 5 13.5 5.224 13.5 5.5V6C13.5 6.276 13.7239 6.5 14 6.5H14.5C14.7761 6.5 15 6.276 15 6V5.5C15 5.224 14.7761 5 14.5 5Z"
          fill={fill}
        />
        <path
          d="M14.5 7.5H14C13.7239 7.5 13.5 7.724 13.5 8V8.5C13.5 8.776 13.7239 9 14 9H14.5C14.7761 9 15 8.776 15 8.5V8C15 7.724 14.7761 7.5 14.5 7.5Z"
          fill={fill}
        />
        <path
          d="M12 5H11.5C11.2239 5 11 5.224 11 5.5V6C11 6.276 11.2239 6.5 11.5 6.5H12C12.2761 6.5 12.5 6.276 12.5 6V5.5C12.5 5.224 12.2761 5 12 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default KeyboardHideDown;
