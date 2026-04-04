import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareRight4({
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
          d="M15.25 14.5H4.75C4.061 14.5 3.5 13.939 3.5 13.25V10.75C3.5 10.336 3.164 10 2.75 10C2.336 10 2 10.336 2 10.75V13.25C2 14.767 3.233 16 4.75 16H15.25C15.664 16 16 15.664 16 15.25C16 14.836 15.664 14.5 15.25 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.53 2.21999C12.237 1.92699 11.762 1.92699 11.469 2.21999C11.176 2.51299 11.176 2.98803 11.469 3.28103L13.439 5.251H11C8.243 5.251 6 7.494 6 10.251C6 10.665 6.336 11.001 6.75 11.001C7.164 11.001 7.5 10.665 7.5 10.251C7.5 8.321 9.07 6.751 11 6.751H13.439L11.469 8.72097C11.176 9.01397 11.176 9.48901 11.469 9.78201C11.615 9.92801 11.807 10.002 11.999 10.002C12.191 10.002 12.383 9.92901 12.529 9.78201L15.779 6.53201C16.072 6.23901 16.072 5.76397 15.779 5.47097L12.529 2.22097L12.53 2.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareRight4;
