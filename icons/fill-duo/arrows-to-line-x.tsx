import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsToLineX({
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
          d="M4.28 5.96999C3.987 5.67699 3.51199 5.67699 3.21899 5.96999C2.92599 6.26299 2.92599 6.738 3.21899 7.031L4.439 8.251H1.75C1.336 8.251 1 8.587 1 9.001C1 9.415 1.336 9.751 1.75 9.751H4.439L3.21899 10.971C2.92599 11.264 2.92599 11.739 3.21899 12.032C3.36499 12.178 3.55699 12.252 3.74899 12.252C3.94099 12.252 4.13299 12.179 4.27899 12.032L6.77899 9.53201C7.07199 9.23901 7.07199 8.764 6.77899 8.471L4.27899 5.971L4.28 5.96999Z"
          fill={fill}
        />
        <path
          d="M16.25 8.24999H13.561L14.781 7.02999C15.074 6.73699 15.074 6.26199 14.781 5.96899C14.488 5.67599 14.013 5.67599 13.72 5.96899L11.22 8.46899C10.927 8.76199 10.927 9.23699 11.22 9.52999L13.72 12.03C13.866 12.176 14.058 12.25 14.25 12.25C14.442 12.25 14.634 12.177 14.78 12.03C15.073 11.737 15.073 11.262 14.78 10.969L13.56 9.74899H16.249C16.663 9.74899 16.999 9.41299 16.999 8.99899C16.999 8.58499 16.663 8.24899 16.249 8.24899L16.25 8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsToLineX;
