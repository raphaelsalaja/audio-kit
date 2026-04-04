import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Compass4({
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
          d="M9 4.5C9.414 4.5 9.75 4.164 9.75 3.75V2.25C9.75 1.836 9.414 1.5 9 1.5C8.586 1.5 8.25 1.836 8.25 2.25V3.75C8.25 4.164 8.586 4.5 9 4.5Z"
          fill={fill}
        />
        <path
          d="M16.25 8.75H14.75C14.336 8.75 14 9.086 14 9.5C14 9.914 14.336 10.25 14.75 10.25H16.25C16.664 10.25 17 9.914 17 9.5C17 9.086 16.664 8.75 16.25 8.75Z"
          fill={fill}
        />
        <path
          d="M9 14.5C8.586 14.5 8.25 14.836 8.25 15.25V16.75C8.25 17.164 8.586 17.5 9 17.5C9.414 17.5 9.75 17.164 9.75 16.75V15.25C9.75 14.836 9.414 14.5 9 14.5Z"
          fill={fill}
        />
        <path
          d="M3.25 8.75H1.75C1.336 8.75 1 9.086 1 9.5C1 9.914 1.336 10.25 1.75 10.25H3.25C3.664 10.25 4 9.914 4 9.5C4 9.086 3.664 8.75 3.25 8.75Z"
          fill={fill}
        />
        <path
          d="M13.0663 5.43365C13.2832 5.6505 13.3462 5.97754 13.2254 6.25942L11.1044 11.2084C11.0285 11.3854 10.8874 11.5265 10.7104 11.6023L5.76143 13.7233C5.47955 13.8442 5.15252 13.7812 4.93566 13.5643C4.71881 13.3475 4.65583 13.0204 4.77664 12.7386L6.89765 7.78954C6.97351 7.61253 7.11455 7.47148 7.29156 7.39562L12.2406 5.27462C12.5224 5.15382 12.8495 5.2168 13.0663 5.43365Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Compass4;
