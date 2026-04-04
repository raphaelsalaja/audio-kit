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
          d="M17.4873 12.5381L15.5928 11.9072L14.9615 10.0127C14.8594 9.707 14.5728 9.5 14.2501 9.5C13.9274 9.5 13.6407 9.707 13.5387 10.0127L12.9074 11.9072L11.0129 12.5381C10.7067 12.6406 10.5002 12.9268 10.5002 13.25C10.5002 13.5732 10.7067 13.8594 11.0129 13.9619L12.9074 14.5928L13.5387 16.4873C13.6408 16.793 13.9274 17 14.2501 17C14.5728 17 14.8595 16.793 14.9615 16.4873L15.5928 14.5928L17.4873 13.9619C17.7935 13.8594 18 13.5732 18 13.25C18 12.9268 17.7935 12.6406 17.4873 12.5381Z"
          fill={secondaryfill}
        />
        <path
          d="M9.12862 14C9.0451 13.7638 9.00018 13.5109 9.00018 13.25C9.00018 12.2806 9.62236 11.4218 10.5389 11.1149L11.7215 10.7211L12.1156 9.53849C12.4216 8.62132 13.281 8 14.2501 8C15.2194 8 16.0781 8.62101 16.3842 9.53752L16.5 9.88495V4.75C16.5 3.233 15.267 2 13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V16.25C1.5 16.538 1.665 16.801 1.925 16.926C2.029 16.976 2.14 17 2.25 17C2.417 17 2.583 16.944 2.719 16.835L6.263 14H9.12862Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChatBubbleSparkle;
