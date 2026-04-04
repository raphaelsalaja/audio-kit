import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleForward({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V16.25C1.5 16.5383 1.66526 16.8011 1.92511 16.926C2.18496 17.0509 2.49339 17.0158 2.71852 16.8357L6.26309 14H13.75C15.2692 14 16.5 12.7692 16.5 11.25V4.75C16.5 3.23079 15.2692 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.78033 5.21967C8.48744 4.92678 8.01256 4.92678 7.71967 5.21967C7.42678 5.51256 7.42678 5.98744 7.71967 6.28033L8.93934 7.5H3.74478C3.33057 7.5 2.99478 7.83579 2.99478 8.25C2.99478 8.66421 3.33057 9 3.74478 9H8.93934L7.71967 10.2197C7.42678 10.5126 7.42678 10.9874 7.71967 11.2803C8.01256 11.5732 8.48744 11.5732 8.78033 11.2803L11.2803 8.78033C11.5732 8.48744 11.5732 8.01256 11.2803 7.71967L8.78033 5.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleForward;
