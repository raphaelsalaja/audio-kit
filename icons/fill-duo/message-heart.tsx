import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageHeart({
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
          d="M1 4.25C1 2.73203 2.23054 1.5 3.75 1.5H14.25C15.7695 1.5 17 2.73203 17 4.25V8.44584C16.6289 8.31908 16.2298 8.25012 15.8124 8.25012C15.181 8.25012 14.5443 8.42911 13.9981 8.74338C13.4515 8.42834 12.8091 8.24629 12.1764 8.25015C10.1249 8.26267 8.49898 9.93523 8.49898 11.9725C8.49898 12.9362 8.74494 13.7872 9.11212 14.5208L6.21852 16.8357C5.99339 17.0158 5.68496 17.0509 5.42511 16.926C5.16526 16.8011 5 16.5383 5 16.25V14H3.75C2.23054 14 1 12.768 1 11.25V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MessageHeart;
