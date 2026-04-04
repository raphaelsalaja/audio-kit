import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleUser({
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
          d="M14 12C14.8284 12 15.5 11.3284 15.5 10.5C15.5 9.67157 14.8284 9 14 9C13.1716 9 12.5 9.67157 12.5 10.5C12.5 11.3284 13.1716 12 14 12Z"
          fill={fill}
        />
        <path
          d="M16.1011 17H11.899C11.4923 17 11.1085 16.8013 10.8717 16.4683C10.6393 16.1407 10.5787 15.7207 10.7096 15.3453C11.1979 13.943 12.5201 13.0001 14.0001 13.0001C15.4801 13.0001 16.8023 13.943 17.2911 15.3458C17.4215 15.7208 17.3609 16.1407 17.1285 16.4684C16.8917 16.8014 16.5078 17 16.1011 17Z"
          fill={fill}
        />
        <path
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V16.25C1.5 16.5383 1.66526 16.8011 1.92511 16.926C2.18496 17.0509 2.49339 17.0158 2.71852 16.8357L6.26309 14H9.68244C10.124 13.2335 10.7575 12.6054 11.5078 12.1706C11.1871 11.6931 11 11.1184 11 10.5C11 8.84312 12.3432 7.5 14 7.5C15.0435 7.5 15.9625 8.03275 16.5 8.84111V4.75C16.5 3.23079 15.2692 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleUser;
