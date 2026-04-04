import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Filter2Minus({
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
          d="M9 13.275C9 12.12 9.878 11.177 11 11.051V9.568L15.377 5.873C15.773 5.54 16 5.052 16 4.534V2.749C16 2.335 15.664 1.999 15.25 1.999H2.75C2.336 1.999 2 2.335 2 2.749V4.534C2 5.052 2.227 5.539 2.622 5.872L7 9.567V16.249C7 16.663 7.336 16.999 7.75 16.999H10.25C10.664 16.999 11 16.663 11 16.249V15.5C9.878 15.374 9 14.43 9 13.275Z"
          fill={fill}
        />
        <path
          d="M16.25 14H11.25C10.836 14 10.5 13.664 10.5 13.25C10.5 12.836 10.836 12.5 11.25 12.5H16.25C16.664 12.5 17 12.836 17 13.25C17 13.664 16.664 14 16.25 14Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Filter2Minus;
