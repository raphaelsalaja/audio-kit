import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowThroughLineUp({
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
          d="M15.25 10.5H12C11.586 10.5 11.25 10.164 11.25 9.75C11.25 9.336 11.586 9 12 9H15.25C15.664 9 16 9.336 16 9.75C16 10.164 15.664 10.5 15.25 10.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 10.5H2.75C2.336 10.5 2 10.164 2 9.75C2 9.336 2.336 9 2.75 9H9C9.414 9 9.75 9.336 9.75 9.75C9.75 10.164 9.414 10.5 9 10.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.52999 2.21999C9.23699 1.92699 8.76199 1.92699 8.46899 2.21999L4.96899 5.71999C4.67599 6.01299 4.67599 6.488 4.96899 6.781C5.26199 7.074 5.73699 7.074 6.02999 6.781L8.24999 4.561V15.75C8.24999 16.164 8.58599 16.5 8.99999 16.5C9.41399 16.5 9.74999 16.164 9.74999 15.75V4.561L11.97 6.781C12.116 6.927 12.308 7.001 12.5 7.001C12.692 7.001 12.884 6.928 13.03 6.781C13.323 6.488 13.323 6.01299 13.03 5.71999L9.52999 2.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowThroughLineUp;
