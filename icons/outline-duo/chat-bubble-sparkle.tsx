import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleSparkle({
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
          d="M13.75 2.75H4.25C3.145 2.75 2.25 3.645 2.25 4.75V16.25L6 13.25H9C9 13.2404 9.00012 13.2309 9.00036 13.2214C9.01241 12.2638 9.62916 11.4195 10.5367 11.1157L11.7215 10.7211L12.1156 9.53849C12.4216 8.62132 13.281 8 14.2501 8C14.585 8 14.9066 8.07411 15.1969 8.20892C15.258 8.2373 15.3178 8.26838 15.3761 8.30206C15.6511 8.46109 15.75 7.87477 15.75 7.72849V4.75C15.75 3.645 14.855 2.75 13.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 7.6602V4.75C15.75 3.646 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.646 2.25 4.75V16.25L6 13.25H8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.4873 12.5381L15.5928 11.9072L14.9615 10.0127C14.8594 9.707 14.5728 9.5 14.2501 9.5C13.9274 9.5 13.6407 9.707 13.5387 10.0127L12.9074 11.9072L11.0129 12.5381C10.7067 12.6406 10.5002 12.9268 10.5002 13.25C10.5002 13.5732 10.7067 13.8594 11.0129 13.9619L12.9074 14.5928L13.5387 16.4873C13.6408 16.793 13.9274 17 14.2501 17C14.5728 17 14.8595 16.793 14.9615 16.4873L15.5928 14.5928L17.4873 13.9619C17.7935 13.8594 18 13.5732 18 13.25C18 12.9268 17.7935 12.6406 17.4873 12.5381Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleSparkle;
