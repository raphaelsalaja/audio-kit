import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhotoMinus({
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
          d="M16.75 4.5H11.75C11.336 4.5 11 4.164 11 3.75C11 3.336 11.336 3 11.75 3H16.75C17.164 3 17.5 3.336 17.5 3.75C17.5 4.164 17.164 4.5 16.75 4.5Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25 15.5H3.75C2.2334 15.5 1 14.2666 1 12.75V5.25C1 3.7334 2.2334 2.5 3.75 2.5H8.79201C9.20611 2.5 9.54201 2.8359 9.54201 3.25C9.54201 3.6641 9.20611 4 8.79201 4H3.75C3.0605 4 2.5 4.5605 2.5 5.25V12.75C2.5 13.4395 3.0605 14 3.75 14H14.25C14.9395 14 15.5 13.4395 15.5 12.75V6.75C15.5 6.3359 15.8359 6 16.25 6C16.6641 6 17 6.3359 17 6.75V12.75C17 14.2666 15.7666 15.5 14.25 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PhotoMinus;
