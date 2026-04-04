import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChevronUp({
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
          d="M9.52999 4.71999C9.23699 4.42699 8.76199 4.42699 8.46899 4.71999L2.21999 10.97C1.92699 11.263 1.92699 11.738 2.21999 12.031C2.51299 12.324 2.988 12.324 3.281 12.031L9.001 6.311L14.721 12.031C14.867 12.177 15.059 12.251 15.251 12.251C15.443 12.251 15.635 12.178 15.781 12.031C16.074 11.738 16.074 11.263 15.781 10.97L9.531 4.71999H9.52999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChevronUp;
