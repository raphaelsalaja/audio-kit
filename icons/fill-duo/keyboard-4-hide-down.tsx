import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard4HideDown({
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
          d="M1 5.75C1 4.23128 2.23069 3 3.75 3H14.25C15.7693 3 17 4.23128 17 5.75V10.25C17 11.7687 15.7693 13 14.25 13H3.75C2.23069 13 1 11.7687 1 10.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 9.75C6 9.33579 6.33579 9 6.75 9H11.25C11.6642 9 12 9.33579 12 9.75C12 10.1642 11.6642 10.5 11.25 10.5H6.75C6.33579 10.5 6 10.1642 6 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.75 6H7.25C6.974 6 6.75 6.2239 6.75 6.5V7C6.75 7.2761 6.974 7.5 7.25 7.5H7.75C8.026 7.5 8.25 7.2761 8.25 7V6.5C8.25 6.2239 8.026 6 7.75 6Z"
          fill={fill}
        />
        <path
          d="M4.75 6H4.25C3.974 6 3.75 6.2239 3.75 6.5V7C3.75 7.2761 3.974 7.5 4.25 7.5H4.75C5.026 7.5 5.25 7.2761 5.25 7V6.5C5.25 6.2239 5.026 6 4.75 6Z"
          fill={fill}
        />
        <path
          d="M10.75 6H10.25C9.974 6 9.75 6.2239 9.75 6.5V7C9.75 7.2761 9.974 7.5 10.25 7.5H10.75C11.026 7.5 11.25 7.2761 11.25 7V6.5C11.25 6.2239 11.026 6 10.75 6Z"
          fill={fill}
        />
        <path
          d="M13.75 6H13.25C12.974 6 12.75 6.2239 12.75 6.5V7C12.75 7.2761 12.974 7.5 13.25 7.5H13.75C14.026 7.5 14.25 7.2761 14.25 7V6.5C14.25 6.2239 14.026 6 13.75 6Z"
          fill={fill}
        />
        <path
          d="M5.96967 14.2197C6.26256 13.9268 6.73744 13.9268 7.03033 14.2197L9 16.1893L10.9697 14.2197C11.2626 13.9268 11.7374 13.9268 12.0303 14.2197C12.3232 14.5126 12.3232 14.9874 12.0303 15.2803L9.53033 17.7803C9.23744 18.0732 8.76256 18.0732 8.46967 17.7803L5.96967 15.2803C5.67678 14.9874 5.67678 14.5126 5.96967 14.2197Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Keyboard4HideDown;
