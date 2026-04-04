import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenRectArrowIn({
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
          d="M13.25 2H9.75C9.336 2 9 2.336 9 2.75C9 3.164 9.336 3.5 9.75 3.5H13.25C13.939 3.5 14.5 4.061 14.5 4.75V13.25C14.5 13.939 13.939 14.5 13.25 14.5H9.75C9.336 14.5 9 14.836 9 15.25C9 15.664 9.336 16 9.75 16H13.25C14.767 16 16 14.767 16 13.25V4.75C16 3.233 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.78 8.46999L7.28 4.96999C6.987 4.67699 6.51199 4.67699 6.21899 4.96999C5.92599 5.26299 5.92599 5.73803 6.21899 6.03103L8.439 8.251H2.75C2.336 8.251 2 8.587 2 9.001C2 9.415 2.336 9.751 2.75 9.751H8.439L6.21899 11.971C5.92599 12.264 5.92599 12.739 6.21899 13.032C6.36499 13.178 6.55699 13.252 6.74899 13.252C6.94099 13.252 7.13301 13.179 7.27901 13.032L10.779 9.53201C11.072 9.23901 11.072 8.76397 10.779 8.47097L10.78 8.46999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OpenRectArrowIn;
