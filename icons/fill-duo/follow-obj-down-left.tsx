import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjDownLeft({
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
          d="M7.25 9H3.75C2.7835 9 2 9.7835 2 10.75V14.25C2 15.2165 2.7835 16 3.75 16H7.25C8.2165 16 9 15.2165 9 14.25V10.75C9 9.7835 8.2165 9 7.25 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.72 2.21999L11 5.94003V3.24001C11 2.82601 10.664 2.49001 10.25 2.49001C9.836 2.49001 9.5 2.82601 9.5 3.24001V7.75002C9.5 8.16402 9.836 8.50002 10.25 8.50002H14.761C15.175 8.50002 15.511 8.16402 15.511 7.75002C15.511 7.33602 15.175 7.00002 14.761 7.00002H12.061L15.781 3.28005C16.074 2.98705 16.074 2.51202 15.781 2.21902C15.488 1.92602 15.013 1.92699 14.72 2.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FollowObjDownLeft;
