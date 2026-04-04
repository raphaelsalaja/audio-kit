import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RotateObjAnticlockwise({
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
          d="M9.75 7H5.25C4.00736 7 3 8.00736 3 9.25V13.75C3 14.9926 4.00736 16 5.25 16H9.75C10.9926 16 12 14.9926 12 13.75V9.25C12 8.00736 10.9926 7 9.75 7Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.75 2.50002H11.311L12.281 1.53005C12.574 1.23705 12.574 0.762018 12.281 0.469018C11.988 0.176018 11.513 0.176018 11.22 0.469018L8.96999 2.71902C8.67699 3.01202 8.67699 3.48705 8.96999 3.78005L11.22 6.03005C11.366 6.17605 11.558 6.25002 11.75 6.25002C11.942 6.25002 12.134 6.17705 12.28 6.03005C12.573 5.73705 12.573 5.26202 12.28 4.96902L11.31 3.99905H11.749C13.541 3.99905 14.999 5.45705 14.999 7.24905C14.999 7.66305 15.335 7.99905 15.749 7.99905C16.163 7.99905 16.499 7.66305 16.499 7.24905C16.499 4.63005 14.368 2.49905 11.749 2.49905L11.75 2.50002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RotateObjAnticlockwise;
