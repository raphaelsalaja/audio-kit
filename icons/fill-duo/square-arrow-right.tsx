import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowRight({
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
          d="M12.78 9.53005L10.28 12.0301C10.134 12.1761 9.942 12.25 9.75 12.25C9.558 12.25 9.366 12.1771 9.22 12.0301C8.927 11.7371 8.927 11.262 9.22 10.969L10.44 9.74905H5.75C5.336 9.74905 5 9.41305 5 8.99905C5 8.58505 5.336 8.24905 5.75 8.24905H10.439L9.219 7.02908C8.926 6.73608 8.926 6.26104 9.219 5.96804C9.512 5.67504 9.987 5.67504 10.28 5.96804L12.78 8.46804C13.073 8.76104 13.073 9.23705 12.78 9.53005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowRight;
