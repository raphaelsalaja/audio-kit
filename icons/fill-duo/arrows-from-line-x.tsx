import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsFromLineX({
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
          d="M9 2C8.586 2 8.25 2.336 8.25 2.75V15.25C8.25 15.664 8.586 16 9 16C9.414 16 9.75 15.664 9.75 15.25V2.75C9.75 2.336 9.414 2 9 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.24999 8.24999H3.561L4.781 7.02999C5.074 6.73699 5.074 6.26199 4.781 5.96899C4.488 5.67599 4.01299 5.67599 3.71999 5.96899L1.21999 8.46899C0.926994 8.76199 0.926994 9.23699 1.21999 9.52999L3.71999 12.03C3.86599 12.176 4.05799 12.25 4.24999 12.25C4.44199 12.25 4.63399 12.177 4.77999 12.03C5.07299 11.737 5.07299 11.262 4.77999 10.969L3.55999 9.74899H6.24899C6.66299 9.74899 6.99899 9.41299 6.99899 8.99899C6.99899 8.58499 6.66299 8.24899 6.24899 8.24899L6.24999 8.24999Z"
          fill={fill}
        />
        <path
          d="M14.28 5.96999C13.987 5.67699 13.512 5.67699 13.219 5.96999C12.926 6.26299 12.926 6.738 13.219 7.031L14.439 8.251H11.75C11.336 8.251 11 8.587 11 9.001C11 9.415 11.336 9.751 11.75 9.751H14.439L13.219 10.971C12.926 11.264 12.926 11.739 13.219 12.032C13.365 12.178 13.557 12.252 13.749 12.252C13.941 12.252 14.133 12.179 14.279 12.032L16.779 9.53201C17.072 9.23901 17.072 8.764 16.779 8.471L14.279 5.971L14.28 5.96999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsFromLineX;
