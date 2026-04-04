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
          d="M14 9C11.7939 9 10 10.7944 10 13C10 15.2056 11.7939 17 14 17C16.2061 17 18 15.2056 18 13C18 10.7944 16.2061 9 14 9ZM16.3076 12.252L14.0576 14.752C13.9199 14.9048 13.7256 14.9942 13.5195 14.9996C13.5127 15.0001 13.5068 15.0001 13.5 15.0001C13.3018 15.0001 13.1104 14.9215 12.9697 14.7804L11.7197 13.5304C11.4267 13.2374 11.4267 12.7628 11.7197 12.4699C12.0127 12.177 12.4873 12.1769 12.7802 12.4699L13.4716 13.1608L15.1923 11.2482C15.4706 10.9416 15.9433 10.9162 16.2519 11.1925C16.5595 11.4698 16.5849 11.9439 16.3076 12.252Z"
          fill={secondaryfill}
        />
        <path
          d="M8.5 13C8.5 9.967 10.968 7.5 14 7.5C14.901 7.5 15.749 7.722 16.5 8.107V4.75C16.5 3.233 15.267 2 13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V16.25C1.5 16.538 1.665 16.801 1.925 16.926C2.029 16.976 2.14 17 2.25 17C2.417 17 2.583 16.944 2.719 16.835L6.263 14H8.596C8.536 13.675 8.5 13.342 8.5 13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChatBubbleCheck;
