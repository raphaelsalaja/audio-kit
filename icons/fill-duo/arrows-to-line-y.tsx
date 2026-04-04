import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsToLineY({
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
          d="M15.25 8.25H2.75C2.336 8.25 2 8.586 2 9C2 9.414 2.336 9.75 2.75 9.75H15.25C15.664 9.75 16 9.414 16 9C16 8.586 15.664 8.25 15.25 8.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.46999 6.78C8.61599 6.926 8.80799 7 8.99999 7C9.19199 7 9.38399 6.927 9.52999 6.78L12.03 4.28C12.323 3.987 12.323 3.51199 12.03 3.21899C11.737 2.92599 11.262 2.92599 10.969 3.21899L9.74899 4.439V1.75C9.74899 1.336 9.41299 1 8.99899 1C8.58499 1 8.24899 1.336 8.24899 1.75V4.439L7.02898 3.21899C6.73598 2.92599 6.26098 2.92599 5.96798 3.21899C5.67498 3.51199 5.67498 3.987 5.96798 4.28L8.46798 6.78H8.46999Z"
          fill={fill}
        />
        <path
          d="M9.52999 11.22C9.23699 10.927 8.76199 10.927 8.46899 11.22L5.96899 13.72C5.67599 14.013 5.67599 14.488 5.96899 14.781C6.26199 15.074 6.73699 15.074 7.02999 14.781L8.24999 13.561V16.25C8.24999 16.664 8.58599 17 8.99999 17C9.41399 17 9.74999 16.664 9.74999 16.25V13.561L10.97 14.781C11.116 14.927 11.308 15.001 11.5 15.001C11.692 15.001 11.884 14.928 12.03 14.781C12.323 14.488 12.323 14.013 12.03 13.72L9.52999 11.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsToLineY;
