import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Burger2({
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
          d="M14.5 8.75H3.5C2.534 8.75 1.75 9.534 1.75 10.5C1.75 11.466 2.534 12.25 3.5 12.25H14.5C15.466 12.25 16.25 11.466 16.25 10.5C16.25 9.534 15.466 8.75 14.5 8.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 5.75C11.164 5.75 11.5 5.414 11.5 5C11.5 4.586 11.164 4.25 10.75 4.25C10.336 4.25 10 4.586 10 5C10 5.414 10.336 5.75 10.75 5.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.25 6.25C7.664 6.25 8 5.914 8 5.5C8 5.086 7.664 4.75 7.25 4.75C6.836 4.75 6.5 5.086 6.5 5.5C6.5 5.914 6.836 6.25 7.25 6.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.128 6.2963C14.5714 4.8202 13.2171 2.75 10 2.75H8.00001C4.78291 2.75 3.42861 4.8202 2.87201 6.2963"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 12.1753C15 12.1753 15.0057 15.25 11.75 15.25C11.3205 15.25 6.6795 15.25 6.25 15.25C2.9943 15.25 3 12.1753 3 12.1753"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5 8.75L11.11 10.762C11.31 11.012 11.691 11.012 11.891 10.762L13.501 8.75H9.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 8.75H3.5C2.534 8.75 1.75 9.534 1.75 10.5C1.75 11.466 2.534 12.25 3.5 12.25H14.5C15.466 12.25 16.25 11.466 16.25 10.5C16.25 9.534 15.466 8.75 14.5 8.75Z"
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

export default Burger2;
