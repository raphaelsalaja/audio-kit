import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleHeart({
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
          d="M13.7301 16.9332C13.8999 17.0224 14.0982 17.0224 14.268 16.9332C15.1652 16.4617 17.999 14.7522 17.999 11.9725C18.0034 10.7517 17.0253 9.75752 15.8124 9.75012C15.0827 9.75952 14.4044 10.1301 13.999 10.7408C13.5936 10.1301 12.9153 9.75952 12.1856 9.75012C10.9727 9.75752 9.99458 10.7517 9.99898 11.9725C9.99898 14.7522 12.8329 16.4616 13.7301 16.9332Z"
          fill={fill}
        />
        <path
          d="M1.5 4.75C1.5 3.23079 2.73079 2 4.25 2H13.75C15.2692 2 16.5 3.23079 16.5 4.75V8.32832C16.2777 8.27828 16.0434 8.25012 15.7979 8.25012H15.7882L15.7786 8.25025C15.138 8.2585 14.5301 8.42994 13.9993 8.73485C13.4564 8.42754 12.8391 8.25842 12.2049 8.25025L12.1952 8.25012H12.1856C10.1206 8.25012 8.50311 9.92475 8.50311 11.9561C8.50311 12.7058 8.65183 13.3879 8.89055 14H6.26309L2.71852 16.8357C2.49339 17.0158 2.18496 17.0509 1.92511 16.926C1.66526 16.8011 1.5 16.5383 1.5 16.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleHeart;
