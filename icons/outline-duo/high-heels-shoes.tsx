import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HighHeelsShoes({
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
          d="M3.749 9.964C2.554 9.272 1.75 7.98 1.75 6.5C1.75 4.875 2.729 3.337 4 2.75C6.082 6.767 9.485 10.042 12.84 11.902C13.271 12.141 13.758 12.25 14.25 12.25C15.355 12.25 16.25 13.145 16.25 14.25V14.75C16.25 15.026 16.026 15.25 15.75 15.25H12.183C11.499 15.25 10.855 14.909 10.498 14.326C9.841 13.253 8.646 11.748 6.667 10.792C5.564 10.26 4.53 10.048 3.749 9.964Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 15.25V9.96399"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.749 9.964C2.554 9.272 1.75 7.98 1.75 6.5C1.75 4.875 2.729 3.337 4 2.75C6.082 6.767 9.485 10.042 12.84 11.902C13.271 12.141 13.758 12.25 14.25 12.25C15.355 12.25 16.25 13.145 16.25 14.25V14.75C16.25 15.026 16.026 15.25 15.75 15.25H12.183C11.499 15.25 10.855 14.909 10.498 14.326C9.841 13.253 8.646 11.748 6.667 10.792C5.564 10.26 4.53 10.048 3.749 9.964Z"
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

export default HighHeelsShoes;
