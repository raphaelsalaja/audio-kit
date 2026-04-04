import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RotateObjClockwise({
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
          d="M12.75 7H8.25C7.00736 7 6 8.00736 6 9.25V13.75C6 14.9926 7.00736 16 8.25 16H12.75C13.9926 16 15 14.9926 15 13.75V9.25C15 8.00736 13.9926 7 12.75 7Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.78 6.03005L9.03 3.78005C9.323 3.48705 9.323 3.01202 9.03 2.71902L6.78 0.469994C6.487 0.176994 6.01199 0.176994 5.71899 0.469994C5.42599 0.762994 5.42599 1.23803 5.71899 1.53103L6.689 2.501H6.25C3.631 2.5 1.5 4.63102 1.5 7.25002C1.5 7.66402 1.836 8.00002 2.25 8.00002C2.664 8.00002 3 7.66402 3 7.25002C3 5.45802 4.458 4.00002 6.25 4.00002H6.689L5.71899 4.96999C5.42599 5.26299 5.42599 5.73803 5.71899 6.03103C5.86499 6.17703 6.05699 6.251 6.24899 6.251C6.44099 6.251 6.63299 6.17803 6.77899 6.03103L6.78 6.03005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RotateObjClockwise;
