import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ColorPalette({
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
          d="M7.5 4.135V3.75C7.5 2.785 6.715 2 5.75 2H3.75C2.785 2 2 2.785 2 3.75V9.635L7.5 4.135Z"
          fill={secondaryfill}
        />
        <path
          d="M13.034 8.5L13.308 8.226C13.99 7.544 13.99 6.433 13.308 5.751L11.894 4.337C11.212 3.655 10.101 3.655 9.41901 4.337L5.25601 8.5H13.034Z"
          fill={secondaryfill}
        />
        <path
          d="M5 10H14.25C15.215 10 16 10.785 16 11.75V14.25C16 15.215 15.215 16 14.25 16H5C3.346 16 2 14.654 2 13C2 11.346 3.346 10 5 10ZM8 14.5H10.5V11.5H8V14.5ZM14.25 14.5C14.388 14.5 14.5 14.388 14.5 14.25V11.75C14.5 11.612 14.388 11.5 14.25 11.5H12V14.5H14.25ZM5 14C5.55228 14 6 13.5523 6 13C6 12.4477 5.55228 12 5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ColorPalette;
