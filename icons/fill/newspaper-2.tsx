import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Newspaper2({
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
          d="M16.25 2H4.75C4.336 2 4 2.336 4 2.75V13.75C4 14.164 3.664 14.5 3.25 14.5C2.836 14.5 2.5 14.164 2.5 13.75V6.75C2.5 6.336 2.164 6 1.75 6C1.336 6 1 6.336 1 6.75V13.75C1 14.991 2.009 16 3.25 16H14.75C15.991 16 17 14.991 17 13.75V2.75C17 2.336 16.664 2 16.25 2ZM13.25 11H7.75C7.336 11 7 10.664 7 10.25C7 9.836 7.336 9.5 7.75 9.5H13.25C13.664 9.5 14 9.836 14 10.25C14 10.664 13.664 11 13.25 11ZM13.25 8H7.75C7.336 8 7 7.664 7 7.25C7 6.836 7.336 6.5 7.75 6.5H13.25C13.664 6.5 14 6.836 14 7.25C14 7.664 13.664 8 13.25 8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Newspaper2;
