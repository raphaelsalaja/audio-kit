import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarUser({
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
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H9.0578C9.4718 16 9.8078 15.664 9.8078 15.25C9.8078 14.836 9.4718 14.5 9.0578 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V7.47956C15 7.89356 15.336 8.22956 15.75 8.22956C16.164 8.22956 16.5 7.89356 16.5 7.47956V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
        <path
          d="M14.5 12.5C15.3284 12.5 16 11.8284 16 11C16 10.1716 15.3284 9.5 14.5 9.5C13.6716 9.5 13 10.1716 13 11C13 11.8284 13.6716 12.5 14.5 12.5Z"
          fill={secondaryfill}
        />
        <path
          d="M16.6011 17.5H12.399C11.9923 17.5 11.6085 17.3013 11.3717 16.9683C11.1393 16.6407 11.0787 16.2207 11.2096 15.8453C11.6979 14.443 13.0201 13.5001 14.5001 13.5001C15.9801 13.5001 17.3023 14.443 17.7911 15.8458C17.9215 16.2208 17.8609 16.6407 17.6285 16.9684C17.3917 17.3014 17.0078 17.5 16.6011 17.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CalendarUser;
