import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowDownLeft({
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
          d="M12.28 6.78005L8.05999 11H9.74899C10.163 11 10.499 11.336 10.499 11.75C10.499 12.164 10.163 12.5 9.74899 12.5H6.24899C5.83499 12.5 5.49899 12.164 5.49899 11.75V8.25002C5.49899 7.83602 5.83499 7.50002 6.24899 7.50002C6.66299 7.50002 6.99899 7.83602 6.99899 8.25002V9.93899L11.219 5.71902C11.512 5.42602 11.987 5.42602 12.28 5.71902C12.573 6.01202 12.573 6.48705 12.28 6.78005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowDownLeft;
