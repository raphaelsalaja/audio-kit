import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageWriting({
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
          d="M3.75 1.5C2.23054 1.5 1 2.73203 1 4.25V11.25C1 12.768 2.23054 14 3.75 14H5V16.25C5 16.5383 5.16526 16.8011 5.42511 16.926C5.68496 17.0509 5.99339 17.0158 6.21852 16.8357L9.76309 14H14.25C15.7695 14 17 12.768 17 11.25V4.25C17 2.73203 15.7695 1.5 14.25 1.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 8.75C8.448 8.75 8 8.301 8 7.75C8 7.199 8.448 6.75 9 6.75C9.552 6.75 10 7.199 10 7.75C10 8.301 9.552 8.75 9 8.75Z"
          fill={fill}
          opacity="0.75"
        />
        <path
          d="M5.5 8.75C4.948 8.75 4.5 8.301 4.5 7.75C4.5 7.199 4.948 6.75 5.5 6.75C6.052 6.75 6.5 7.199 6.5 7.75C6.5 8.301 6.052 8.75 5.5 8.75Z"
          fill={fill}
        />
        <path
          d="M12.5 8.75C11.948 8.75 11.5 8.301 11.5 7.75C11.5 7.199 11.948 6.75 12.5 6.75C13.052 6.75 13.5 7.199 13.5 7.75C13.5 8.301 13.052 8.75 12.5 8.75Z"
          fill={fill}
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

export default MessageWriting;
