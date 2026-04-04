import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChevronReduceX({
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
          d="M15.03 4.96999C14.737 4.67699 14.262 4.67699 13.969 4.96999L10.469 8.46999C10.176 8.76299 10.176 9.23803 10.469 9.53103L13.969 13.031C14.115 13.177 14.307 13.251 14.499 13.251C14.691 13.251 14.883 13.178 15.029 13.031C15.322 12.738 15.322 12.263 15.029 11.97L12.059 9.00002L15.029 6.03005C15.322 5.73705 15.322 5.26202 15.029 4.96902L15.03 4.96999Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.03001 4.96999C3.73701 4.67699 3.26202 4.67699 2.96902 4.96999C2.67602 5.26299 2.67602 5.73803 2.96902 6.03103L5.93901 9.001L2.96902 11.971C2.67602 12.264 2.67602 12.739 2.96902 13.032C3.11502 13.178 3.30702 13.252 3.49902 13.252C3.69102 13.252 3.88302 13.179 4.02902 13.032L7.52902 9.53201C7.82202 9.23901 7.82202 8.76403 7.52902 8.47103L4.02902 4.97103L4.03001 4.96999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChevronReduceX;
