import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KeyboardMouse({
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
          d="M2.75 2.5C1.23128 2.5 0 3.73069 0 5.25V9.75C0 11.2693 1.23128 12.5 2.75 12.5H9V12.25C9 9.90307 10.9021 8 13.25 8H14.25C15.8483 8 17.24 8.88189 17.9658 10.1853C17.9883 10.0436 18 9.89815 18 9.75V5.25C18 3.73069 16.7687 2.5 15.25 2.5H2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4 5.5H3.5C3.2239 5.5 3 5.724 3 6V6.5C3 6.776 3.2239 7 3.5 7H4C4.2761 7 4.5 6.776 4.5 6.5V6C4.5 5.724 4.2761 5.5 4 5.5Z"
          fill={fill}
        />
        <path
          d="M4 8H3.5C3.2239 8 3 8.224 3 8.5V9C3 9.276 3.2239 9.5 3.5 9.5H4C4.2761 9.5 4.5 9.276 4.5 9V8.5C4.5 8.224 4.2761 8 4 8Z"
          fill={fill}
        />
        <path
          d="M6.5 5.5H6C5.7239 5.5 5.5 5.724 5.5 6V6.5C5.5 6.776 5.7239 7 6 7H6.5C6.7761 7 7 6.776 7 6.5V6C7 5.724 6.7761 5.5 6.5 5.5Z"
          fill={fill}
        />
        <path
          d="M9.25 5.5H8.75C8.4739 5.5 8.25 5.724 8.25 6V6.5C8.25 6.776 8.4739 7 8.75 7H9.25C9.5261 7 9.75 6.776 9.75 6.5V6C9.75 5.724 9.5261 5.5 9.25 5.5Z"
          fill={fill}
        />
        <path
          d="M14.5 5.5H14C13.7239 5.5 13.5 5.724 13.5 6V6.5C13.5 6.776 13.7239 7 14 7H14.5C14.7761 7 15 6.776 15 6.5V6C15 5.724 14.7761 5.5 14.5 5.5Z"
          fill={fill}
        />
        <path
          d="M12 5.5H11.5C11.2239 5.5 11 5.724 11 6V6.5C11 6.776 11.2239 7 11.5 7H12C12.2761 7 12.5 6.776 12.5 6.5V6C12.5 5.724 12.2761 5.5 12 5.5Z"
          fill={fill}
        />
        <path
          d="M13.25 9.5C11.7307 9.5 10.5 10.7313 10.5 12.25V15.25C10.5 16.7687 11.7307 18 13.25 18H14.25C15.7693 18 17 16.7687 17 15.25V12.25C17 10.7313 15.7693 9.5 14.25 9.5H13.25ZM14.5 12.75C14.5 12.3358 14.1642 12 13.75 12C13.3358 12 13 12.3358 13 12.75V13.75C13 14.1642 13.3358 14.5 13.75 14.5C14.1642 14.5 14.5 14.1642 14.5 13.75V12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 8C5.83579 8 5.5 8.33579 5.5 8.75C5.5 9.16421 5.83579 9.5 6.25 9.5H10.0094C10.5671 8.84338 11.3209 8.35845 12.1804 8.13569C12.0585 8.05019 11.9101 8 11.75 8H6.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default KeyboardMouse;
