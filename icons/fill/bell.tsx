import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bell({
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
          d="M15.75 12C15.061 12 14.5 11.439 14.5 10.75V6.5C14.5 3.467 12.033 1 9 1C5.967 1 3.5 3.467 3.5 6.5V10.75C3.5 11.439 2.939 12 2.25 12C1.836 12 1.5 12.336 1.5 12.75C1.5 13.164 1.836 13.5 2.25 13.5H15.75C16.164 13.5 16.5 13.164 16.5 12.75C16.5 12.336 16.164 12 15.75 12Z"
          fill={fill}
        />
        <path
          d="M7.80099 15C7.64999 15 7.50799 15.068 7.41299 15.185C7.31799 15.302 7.28099 15.456 7.31199 15.603C7.48499 16.425 8.17999 17 9.00099 17C9.82199 17 10.517 16.425 10.69 15.603C10.721 15.456 10.684 15.302 10.589 15.185C10.494 15.068 10.352 15 10.201 15H7.80099Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Bell;
