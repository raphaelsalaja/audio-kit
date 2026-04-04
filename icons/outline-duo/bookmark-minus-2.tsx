import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookmarkMinus2({
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
          d="m9,12.75l5,3.5.25-5.75h-2.5c-1.2426,0-2.25-1.0074-2.25-2.25s1.0074-2.25,2.25-2.25h2.5l-.25-2.25c0-1.105-.895-2-2-2h-6.25c-1.105,0-2,.895-2,2v12.5l5.25-3.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m16.75,8.25h-5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.25,5.25v-1.5c0-1.104-.895-2-2-2h-6.5c-1.105,0-2,.896-2,2v12.5l5.25-3.5,5.25,3.5v-5"
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

export default BookmarkMinus2;
