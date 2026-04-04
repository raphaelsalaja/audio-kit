import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcasePin({
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
          d="M14.5 9.5C12.5703 9.5 11 11.0703 11 13C11 15.6543 14.0107 17.3369 14.1396 17.4072C14.2519 17.4687 14.3759 17.5 14.5 17.5C14.6241 17.5 14.748 17.4688 14.8604 17.4072C14.9893 17.3369 18 15.6543 18 13C18 11.0703 16.4297 9.5 14.5 9.5ZM14.5 14C13.9478 14 13.5 13.5522 13.5 13C13.5 12.4478 13.9478 12 14.5 12C15.0522 12 15.5 12.4477 15.5 13C15.5 13.5523 15.0522 14 14.5 14Z"
          fill={secondaryfill}
        />
        <path
          d="M11.75 5.5C11.336 5.5 11 5.164 11 4.75V2.25C11 2.112 10.888 2 10.75 2H7.25C7.112 2 7 2.112 7 2.25V4.75C7 5.164 6.664 5.5 6.25 5.5C5.836 5.5 5.5 5.164 5.5 4.75V2.25C5.5 1.285 6.285 0.5 7.25 0.5H10.75C11.715 0.5 12.5 1.285 12.5 2.25V4.75C12.5 5.164 12.164 5.5 11.75 5.5Z"
          fill={fill}
        />
        <path
          d="M10.4438 16C9.91561 15.1954 9.5 14.1871 9.5 13C9.5 10.2419 11.7419 8 14.5 8C15.4102 8 16.2642 8.24417 17 8.67048V6.75C17 5.233 15.767 4 14.25 4H3.75C2.233 4 1 5.233 1 6.75V13.25C1 14.767 2.233 16 3.75 16H10.4438Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitcasePin;
