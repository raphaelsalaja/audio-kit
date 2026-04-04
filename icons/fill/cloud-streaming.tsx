import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudStreaming({
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
          d="M13.757 4.5C13.115 2.435 11.215 1 9 1C6.785 1 4.885 2.435 4.243 4.5C2.454 4.504 1 5.96 1 7.75C1 9.54 2.458 11 4.25 11H13.75C15.542 11 17 9.542 17 7.75C17 5.958 15.546 4.504 13.757 4.5ZM10.704 7.072L8.396 8.418C7.999 8.65 7.5 8.363 7.5 7.903V5.21C7.5 4.75 7.999 4.463 8.396 4.695L10.704 6.041C11.098 6.271 11.098 6.842 10.704 7.072Z"
          fill={fill}
        />
        <path
          d="M16.25 15H11.75C11.336 15 11 14.664 11 14.25C11 13.836 11.336 13.5 11.75 13.5H16.25C16.664 13.5 17 13.836 17 14.25C17 14.664 16.664 15 16.25 15Z"
          fill={secondaryfill}
        />
        <path
          d="M8.75 11.75C8.336 11.75 8 12.086 8 12.5V13.5H1.75C1.336 13.5 1 13.836 1 14.25C1 14.664 1.336 15 1.75 15H8V16C8 16.414 8.336 16.75 8.75 16.75C9.164 16.75 9.5 16.414 9.5 16V12.5C9.5 12.086 9.164 11.75 8.75 11.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CloudStreaming;
