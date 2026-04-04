import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChevronExpandX({
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
          d="M12.28 4.96999C11.987 4.67699 11.512 4.67699 11.219 4.96999C10.926 5.26299 10.926 5.73803 11.219 6.03103L14.189 9.001L11.219 11.971C10.926 12.264 10.926 12.739 11.219 13.032C11.365 13.178 11.557 13.252 11.749 13.252C11.941 13.252 12.133 13.179 12.279 13.032L15.779 9.53201C16.072 9.23901 16.072 8.76403 15.779 8.47103L12.279 4.97103L12.28 4.96999Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.77999 4.96999C6.48699 4.67699 6.01199 4.67699 5.71899 4.96999L2.21899 8.46999C1.92599 8.76299 1.92599 9.23803 2.21899 9.53103L5.71899 13.031C5.86499 13.177 6.05699 13.251 6.24899 13.251C6.44099 13.251 6.633 13.178 6.779 13.031C7.072 12.738 7.072 12.263 6.779 11.97L3.809 9.00002L6.779 6.03005C7.072 5.73705 7.072 5.26202 6.779 4.96902L6.77999 4.96999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChevronExpandX;
