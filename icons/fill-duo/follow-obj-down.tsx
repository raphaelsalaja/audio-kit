import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjDown({
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
          d="M14.25 11.5H3.75C2.7835 11.5 2 12.2835 2 13.25V14.25C2 15.2165 2.7835 16 3.75 16H14.25C15.2165 16 16 15.2165 16 14.25V13.25C16 12.2835 15.2165 11.5 14.25 11.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.46999 9.78003C8.61599 9.92603 8.80799 10 8.99999 10C9.19199 10 9.38399 9.92703 9.52999 9.78003L12.78 6.53003C13.073 6.23703 13.073 5.76199 12.78 5.46899C12.487 5.17599 12.012 5.17599 11.719 5.46899L9.74899 7.43903V1.75C9.74899 1.336 9.41299 1 8.99899 1C8.58499 1 8.24899 1.336 8.24899 1.75V7.43903L6.279 5.46899C5.986 5.17599 5.511 5.17599 5.218 5.46899C4.925 5.76199 4.925 6.23703 5.218 6.53003L8.468 9.78003H8.46999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FollowObjDown;
