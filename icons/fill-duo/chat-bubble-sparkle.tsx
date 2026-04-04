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
          fill={fill}
        />
        <path
          d="M1.5 4.75C1.5 3.23079 2.73079 2 4.25 2H13.75C15.2692 2 16.5 3.23079 16.5 4.75V9.88494L16.3842 9.53752C16.0781 8.62101 15.2194 8 14.2501 8C13.281 8 12.4218 8.62076 12.1158 9.53794L11.7215 10.7211L10.5367 11.1157C9.62014 11.4225 9.00018 12.2806 9.00018 13.25C9.00018 13.5109 9.0451 13.7638 9.12862 14H6.26309L2.71852 16.8357C2.49339 17.0158 2.18496 17.0509 1.92511 16.926C1.66526 16.8011 1.5 16.5383 1.5 16.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleSparkle;
