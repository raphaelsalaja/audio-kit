import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sorting({
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
          d="M15.25 8.5H9.25C8.836 8.5 8.5 8.836 8.5 9.25C8.5 9.664 8.836 10 9.25 10H15.25C15.664 10 16 9.664 16 9.25C16 8.836 15.664 8.5 15.25 8.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.25 7H13.25C13.664 7 14 6.664 14 6.25C14 5.836 13.664 5.5 13.25 5.5H9.25C8.836 5.5 8.5 5.836 8.5 6.25C8.5 6.664 8.836 7 9.25 7Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.25 4H11.25C11.664 4 12 3.664 12 3.25C12 2.836 11.664 2.5 11.25 2.5H9.25C8.836 2.5 8.5 2.836 8.5 3.25C8.5 3.664 8.836 4 9.25 4Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.96999 11.9702L6.49999 13.4399V2.75C6.49999 2.3359 6.16399 2 5.74999 2C5.33599 2 4.99999 2.3359 4.99999 2.75V13.439L3.52999 11.9694C3.23699 11.6759 2.76199 11.6759 2.46899 11.9694C2.17599 12.2624 2.17599 12.7369 2.46899 13.0298L5.21899 15.7798C5.36499 15.9258 5.55699 16 5.74899 16C5.94099 16 6.133 15.9268 6.279 15.7798L9.029 13.0298C9.322 12.7368 9.322 12.2623 9.029 11.9694C8.736 11.6759 8.261 11.6759 7.968 11.9694L7.96999 11.9702Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sorting;
