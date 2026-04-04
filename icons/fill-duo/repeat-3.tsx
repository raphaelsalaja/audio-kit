import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Repeat3({
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
          d="M15.25 8C14.836 8 14.5 8.336 14.5 8.75V11.75C14.5 12.439 13.939 13 13.25 13H4.561L5.781 11.78C6.074 11.487 6.074 11.012 5.781 10.719C5.488 10.426 5.01299 10.426 4.71999 10.719L2.21999 13.219C1.92699 13.512 1.92699 13.987 2.21999 14.28L4.71999 16.78C4.86599 16.926 5.05799 17 5.24999 17C5.44199 17 5.63399 16.927 5.77999 16.78C6.07299 16.487 6.07299 16.012 5.77999 15.719L4.55999 14.499H13.25C14.767 14.499 16 13.266 16 11.749V8.74902C16 8.33502 15.664 8 15.25 8Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75 10C3.164 10 3.5 9.66402 3.5 9.25002V6.25002C3.5 5.56102 4.061 5.00002 4.75 5.00002H13.439L12.219 6.21999C11.926 6.51299 11.926 6.98803 12.219 7.28103C12.365 7.42703 12.557 7.501 12.749 7.501C12.941 7.501 13.133 7.42803 13.279 7.28103L15.779 4.78103C16.072 4.48803 16.072 4.01299 15.779 3.71999L13.279 1.21999C12.986 0.926994 12.511 0.926994 12.218 1.21999C11.925 1.51299 11.925 1.98803 12.218 2.28103L13.438 3.501H4.75C3.233 3.501 2 4.734 2 6.251V9.251C2 9.665 2.336 10 2.75 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Repeat3;
