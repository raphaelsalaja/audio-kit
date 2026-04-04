import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleCheck({
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
          d="M13.5 8C11.2939 8 9.5 9.7944 9.5 12C9.5 14.2056 11.2939 16 13.5 16C15.7061 16 17.5 14.2056 17.5 12C17.5 9.7944 15.7061 8 13.5 8ZM15.8076 11.252L13.5576 13.752C13.4199 13.9048 13.2256 13.9942 13.0195 13.9996C13.0127 14.0001 13.0068 14.0001 13 14.0001C12.8018 14.0001 12.6104 13.9215 12.4697 13.7804L11.2197 12.5304C10.9267 12.2374 10.9267 11.7628 11.2197 11.4699C11.5127 11.177 11.9873 11.1769 12.2802 11.4699L12.9716 12.1608L14.6923 10.2482C14.9706 9.9416 15.4433 9.9162 15.7519 10.1925C16.0595 10.4698 16.0849 10.9439 15.8076 11.252Z"
          fill={fill}
        />
        <path
          d="M1.5 4.75C1.5 3.23079 2.73079 2 4.25 2H13.75C15.2692 2 16.5 3.23079 16.5 4.75V7.39123C15.6369 6.82773 14.6063 6.5 13.5 6.5C10.4654 6.5 8 8.96609 8 12C8 12.7053 8.13324 13.3799 8.37589 14H6.26309L2.71852 16.8357C2.49339 17.0158 2.18496 17.0509 1.92511 16.926C1.66526 16.8011 1.5 16.5383 1.5 16.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleCheck;
