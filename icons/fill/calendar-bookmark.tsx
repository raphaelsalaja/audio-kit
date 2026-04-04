import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarBookmark({
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
          d="M5.75 3.5C5.336 3.5 5 3.164 5 2.75V0.75C5 0.336 5.336 0 5.75 0C6.164 0 6.5 0.336 6.5 0.75V2.75C6.5 3.164 6.164 3.5 5.75 3.5Z"
          fill={fill}
        />
        <path
          d="M12.25 3.5C11.836 3.5 11.5 3.164 11.5 2.75V0.75C11.5 0.336 11.836 0 12.25 0C12.664 0 13 0.336 13 0.75V2.75C13 3.164 12.664 3.5 12.25 3.5Z"
          fill={fill}
        />
        <path
          d="M17.25 18C17.055 18 16.863 17.924 16.72 17.78L15 16.06L13.28 17.78C13.065 17.995 12.743 18.059 12.463 17.943C12.183 17.827 12 17.553 12 17.25V11.75C12 10.785 12.785 10 13.75 10H16.25C17.215 10 18 10.785 18 11.75V17.25C18 17.553 17.817 17.827 17.537 17.943C17.444 17.982 17.347 18 17.25 18Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H9.75719C10.1712 16 10.5072 15.664 10.5072 15.25C10.5072 14.836 10.1712 14.5 9.75719 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V7.74791C15 8.16191 15.336 8.49791 15.75 8.49791C16.164 8.49791 16.5 8.16191 16.5 7.74791V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarBookmark;
