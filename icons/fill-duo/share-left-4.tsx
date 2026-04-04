import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareLeft4({
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
          d="M15.25 10C14.836 10 14.5 10.336 14.5 10.75V13.25C14.5 13.939 13.939 14.5 13.25 14.5H2.75C2.336 14.5 2 14.836 2 15.25C2 15.664 2.336 16 2.75 16H13.25C14.767 16 16 14.767 16 13.25V10.75C16 10.336 15.664 10 15.25 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.46999 9.78005C5.61599 9.92605 5.80799 10 5.99999 10C6.19199 10 6.38399 9.92705 6.52999 9.78005C6.82299 9.48705 6.82299 9.01202 6.52999 8.71902L4.55999 6.74905H6.99899C8.92899 6.74905 10.499 8.31905 10.499 10.249C10.499 10.663 10.835 10.999 11.249 10.999C11.663 10.999 11.999 10.663 11.999 10.249C11.999 7.49205 9.75599 5.24905 6.99899 5.24905H4.55999L6.52999 3.27908C6.82299 2.98608 6.82299 2.51104 6.52999 2.21804C6.23699 1.92504 5.76199 1.92504 5.46899 2.21804L2.21899 5.46804C1.92599 5.76104 1.92599 6.23608 2.21899 6.52908L5.46899 9.77908L5.46999 9.78005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareLeft4;
