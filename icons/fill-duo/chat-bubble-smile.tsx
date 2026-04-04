import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleSmile({
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
          d="M5.81867 8.62171C6.11156 8.32882 6.58643 8.32881 6.87933 8.62171C8.05043 9.79281 9.95056 9.79281 11.1217 8.62171C11.4146 8.32881 11.8894 8.32882 12.1823 8.62171C12.4752 8.9146 12.4752 9.38948 12.1823 9.68237C10.4254 11.4393 7.57556 11.4393 5.81867 9.68237C5.52578 9.38948 5.52577 8.9146 5.81867 8.62171Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleSmile;
