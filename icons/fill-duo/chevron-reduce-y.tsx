import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChevronReduceY({
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
          d="M9.53 10.47C9.237 10.177 8.762 10.177 8.469 10.47L4.969 13.97C4.676 14.263 4.676 14.738 4.969 15.031C5.262 15.324 5.737 15.324 6.03 15.031L9 12.061L11.97 15.031C12.116 15.177 12.308 15.251 12.5 15.251C12.692 15.251 12.884 15.178 13.03 15.031C13.323 14.738 13.323 14.263 13.03 13.97L9.53 10.47Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.97 2.96999L9 5.94003L6.03 2.96999C5.737 2.67699 5.262 2.67699 4.969 2.96999C4.676 3.26299 4.676 3.73803 4.969 4.03103L8.469 7.53103C8.615 7.67703 8.807 7.751 8.999 7.751C9.191 7.751 9.383 7.67803 9.529 7.53103L13.029 4.03103C13.322 3.73803 13.322 3.26299 13.029 2.96999C12.736 2.67699 12.261 2.67699 11.968 2.96999H11.97Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChevronReduceY;
