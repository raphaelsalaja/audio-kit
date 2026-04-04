import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldLeftFromLine({
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
          d="M16.25 6C15.836 6 15.5 6.336 15.5 6.75V11.25C15.5 11.664 15.836 12 16.25 12C16.664 12 17 11.664 17 11.25V6.75C17 6.336 16.664 6 16.25 6Z"
          fill={fill}
        />
        <path
          d="M12.25 5.99999H8.99998V4.53699C8.99998 4.05299 8.72898 3.62199 8.29298 3.41199C7.85498 3.20099 7.35098 3.25798 6.97198 3.55898L1.36498 8.02199C1.06598 8.26099 0.893982 8.61699 0.893982 8.99999C0.893982 9.38299 1.06598 9.73899 1.36598 9.97799L6.97098 14.441C7.19898 14.621 7.47098 14.714 7.74698 14.714C7.93198 14.714 8.11798 14.672 8.29198 14.588C8.72898 14.378 8.99898 13.946 8.99898 13.463V12H12.249C13.214 12 13.999 11.215 13.999 10.25V7.74999C13.999 6.78499 13.215 5.99999 12.25 5.99999Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldLeftFromLine;
