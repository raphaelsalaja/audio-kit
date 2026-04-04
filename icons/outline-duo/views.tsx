import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Views({
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
          d="M4.25 2.75H13.75C14.8546 2.75 15.75 3.64543 15.75 4.75V11.25C15.75 12.3546 14.8546 13.25 13.75 13.25H4.25C3.14543 13.25 2.25 12.3546 2.25 11.25V4.75C2.25 3.64543 3.14543 2.75 4.25 2.75ZM9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.75 2.75H4.25C3.14543 2.75 2.25 3.64543 2.25 4.75V11.25C2.25 12.3546 3.14543 13.25 4.25 13.25H13.75C14.8546 13.25 15.75 12.3546 15.75 11.25V4.75C15.75 3.64543 14.8546 2.75 13.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 16.25H13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.691 7.108C12.151 6.414 10.955 5.25 8.99999 5.25C7.04499 5.25 5.84899 6.414 5.30899 7.109C4.89599 7.642 4.89599 8.358 5.30899 8.891C5.84899 9.585 7.04499 10.749 8.99999 10.749C10.955 10.749 12.151 9.585 12.691 8.89C13.104 8.357 13.104 7.642 12.691 7.108ZM8.99999 9.5C8.17199 9.5 7.49999 8.828 7.49999 8C7.49999 7.172 8.17199 6.5 8.99999 6.5C9.82799 6.5 10.5 7.172 10.5 8C10.5 8.828 9.82799 9.5 8.99999 9.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Views;
