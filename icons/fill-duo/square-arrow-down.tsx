import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowDown({
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
          d="M13.25 2H4.75C3.233 2 2 3.233 2 4.75V13.25C2 14.767 3.233 16 4.75 16H13.25C14.767 16 16 14.767 16 13.25V4.75C16 3.233 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.03 10.28L9.52999 12.78C9.38399 12.926 9.19199 13 8.99999 13C8.80799 13 8.61599 12.927 8.46999 12.78L5.96999 10.28C5.67699 9.98703 5.67699 9.51199 5.96999 9.21899C6.26299 8.92599 6.738 8.92599 7.031 9.21899L8.251 10.439V5.75C8.251 5.336 8.587 5 9.001 5C9.415 5 9.751 5.336 9.751 5.75V10.439L10.971 9.21899C11.264 8.92599 11.739 8.92599 12.032 9.21899C12.325 9.51199 12.325 9.98703 12.032 10.28H12.03Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowDown;
