import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneOld({
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
          d="M4.5 4.75C4.5 3.78379 5.28379 3 6.25 3H11.75C12.7162 3 13.5 3.78379 13.5 4.75V16.25C13.5 17.2162 12.7162 18 11.75 18H6.25C5.28379 18 4.5 17.2162 4.5 16.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.75 12.5C8.164 12.5 8.5 12.164 8.5 11.75C8.5 11.336 8.164 11 7.75 11C7.336 11 7 11.336 7 11.75C7 12.164 7.336 12.5 7.75 12.5Z"
          fill={fill}
        />
        <path
          d="M10.25 12.5C10.664 12.5 11 12.164 11 11.75C11 11.336 10.664 11 10.25 11C9.836 11 9.5 11.336 9.5 11.75C9.5 12.164 9.836 12.5 10.25 12.5Z"
          fill={fill}
        />
        <path
          d="M7.75 15C8.164 15 8.5 14.664 8.5 14.25C8.5 13.836 8.164 13.5 7.75 13.5C7.336 13.5 7 13.836 7 14.25C7 14.664 7.336 15 7.75 15Z"
          fill={fill}
        />
        <path
          d="M10.25 15C10.664 15 11 14.664 11 14.25C11 13.836 10.664 13.5 10.25 13.5C9.836 13.5 9.5 13.836 9.5 14.25C9.5 14.664 9.836 15 10.25 15Z"
          fill={fill}
        />
        <path
          d="M6 6.75C6 6.33579 6.33579 6 6.75 6H11.25C11.6642 6 12 6.33579 12 6.75V8.75C12 9.16421 11.6642 9.5 11.25 9.5H6.75C6.33579 9.5 6 9.16421 6 8.75V6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 0.75C11.5 0.335786 11.1642 0 10.75 0C10.3358 0 10 0.335786 10 0.75V3H11.5V0.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PhoneOld;
