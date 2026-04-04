import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Rings({
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
          d="M6.25 3.25C3.07479 3.25 0.5 5.82479 0.5 9C0.5 12.1752 3.07479 14.75 6.25 14.75C9.42521 14.75 12 12.1752 12 9C12 7.43637 11.3756 6.01835 10.3626 4.98172C10.7974 4.83155 11.2642 4.75 11.75 4.75C14.0968 4.75 16 6.65321 16 9C16 11.1182 14.4502 12.875 12.4226 13.1969C12.0135 13.2618 11.7345 13.6461 11.7995 14.0552C11.8644 14.4643 12.2487 14.7433 12.6578 14.6783C15.4024 14.2426 17.5 11.8674 17.5 9C17.5 5.82479 14.9252 3.25 11.75 3.25C10.7539 3.25 9.81695 3.50338 9 3.9492C8.18306 3.50338 7.24607 3.25 6.25 3.25ZM7.63742 4.98172C7.20259 4.83155 6.7358 4.75 6.25 4.75C3.90321 4.75 2 6.65321 2 9C2 11.3468 3.90321 13.25 6.25 13.25C6.73562 13.25 7.20225 13.1685 7.63695 13.0184C6.62485 11.9825 6 10.5648 6 9C6 7.43637 6.6244 6.01835 7.63742 4.98172Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Rings;
