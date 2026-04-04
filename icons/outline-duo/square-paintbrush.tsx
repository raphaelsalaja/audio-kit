import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquarePaintbrush({
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
          d="M4.75 11.815C6.912 12.465 8.667 12.519 10.101 11.051C10.966 10.183 10.966 8.77501 10.101 7.90601C9.236 7.03701 7.84 7.02501 6.968 7.90601C5.55 9.34001 6.788 10.701 4.75 11.815Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 9.24701L15.836 4.164C16.388 3.612 16.388 2.716 15.836 2.164C15.284 1.612 14.388 1.612 13.836 2.164L8.742 7.26001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 11.815C6.912 12.465 8.667 12.519 10.101 11.051C10.966 10.183 10.966 8.77501 10.101 7.90601C9.236 7.03701 7.84 7.02501 6.968 7.90601C5.55 9.34001 6.788 10.701 4.75 11.815Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 9.49109V13.75C14.75 14.855 13.855 15.75 12.75 15.75H4.25C3.145 15.75 2.25 14.855 2.25 13.75V5.25C2.25 4.145 3.145 3.25 4.25 3.25H8.5081"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SquarePaintbrush;
