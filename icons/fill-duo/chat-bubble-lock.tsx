import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleLock({
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
          d="M12 12.0177V11.25C12 10.0078 13.0078 9 14.25 9C15.4922 9 16.5 10.0078 16.5 11.25V12.0177C17.3481 12.139 18 12.8684 18 13.75V15.25C18 16.2165 17.2165 17 16.25 17H12.25C11.2835 17 10.5 16.2165 10.5 15.25V13.75C10.5 12.8684 11.1519 12.139 12 12.0177ZM13.5 11.25C13.5 10.8362 13.8362 10.5 14.25 10.5C14.6638 10.5 15 10.8362 15 11.25V12H13.5V11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 4.75C1.5 3.23079 2.73079 2 4.25 2H13.75C15.2692 2 16.5 3.23079 16.5 4.75V8.24999C15.8732 7.77908 15.0941 7.5 14.25 7.5C12.2612 7.5 10.6334 9.04917 10.5078 11.0063C9.60122 11.5828 9 12.5955 9 13.75V14H6.26309L2.71852 16.8357C2.49339 17.0158 2.18496 17.0509 1.92511 16.926C1.66526 16.8011 1.5 16.5383 1.5 16.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleLock;
