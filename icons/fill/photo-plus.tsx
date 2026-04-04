import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhotoPlus({
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
          d="M16.25 11.44L13.194 8.38395C12.122 7.31195 10.378 7.31295 9.30602 8.38395L3.47002 14.2199C3.34302 14.3459 3.27601 14.511 3.26001 14.683C3.41801 14.722 3.58002 14.75 3.75002 14.75H14.25C15.354 14.75 16.25 13.855 16.25 12.75V11.44Z"
          fill={fill}
        />
        <path
          d="M5.75 8.5C6.44 8.5 7 7.94 7 7.25C7 6.56 6.44 6 5.75 6C5.06 6 4.5 6.56 4.5 7.25C4.5 7.94 5.06 8.5 5.75 8.5Z"
          fill={fill}
        />
        <path
          d="M16.75 3H15V1.25C15 0.836 14.664 0.5 14.25 0.5C13.836 0.5 13.5 0.836 13.5 1.25V3H11.75C11.336 3 11 3.336 11 3.75C11 4.164 11.336 4.5 11.75 4.5H13.5V6.25C13.5 6.664 13.836 7 14.25 7C14.664 7 15 6.664 15 6.25V4.5H16.75C17.164 4.5 17.5 4.164 17.5 3.75C17.5 3.336 17.164 3 16.75 3Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25 15.5H3.75C2.2334 15.5 1 14.2666 1 12.75V5.25C1 3.7334 2.2334 2.5 3.75 2.5H8.793C9.2071 2.5 9.543 2.8359 9.543 3.25C9.543 3.6641 9.2071 4 8.793 4H3.75C3.0605 4 2.5 4.5605 2.5 5.25V12.75C2.5 13.4395 3.0605 14 3.75 14H14.25C14.9395 14 15.5 13.4395 15.5 12.75V8.47662C15.5 8.06252 15.8359 7.72662 16.25 7.72662C16.6641 7.72662 17 8.06252 17 8.47662V12.75C17 14.2666 15.7666 15.5 14.25 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PhotoPlus;
