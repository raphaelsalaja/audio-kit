import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InputPasswordXmark({
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
          d="M5.5 10C6.0523 10 6.5 9.552 6.5 9C6.5 8.448 6.0523 8 5.5 8C4.9477 8 4.5 8.448 4.5 9C4.5 9.552 4.9477 10 5.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 10C9.5523 10 10 9.552 10 9C10 8.448 9.5523 8 9 8C8.4477 8 8 8.448 8 9C8 9.552 8.4477 10 9 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.5 10C13.0523 10 13.5 9.552 13.5 9C13.5 8.448 13.0523 8 12.5 8C11.9477 8 11.5 8.448 11.5 9C11.5 9.552 11.9477 10 12.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.75 11.75L16.75 15.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.80182V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V11.25C1.75 12.354 2.645 13.25 3.75 13.25H10.1681"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 11.75L12.75 15.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default InputPasswordXmark;
