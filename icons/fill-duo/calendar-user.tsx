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
          d="M1.5 4.75C1.5 3.23069 2.73128 2 4.25 2H13.75C15.2687 2 16.5 3.23069 16.5 4.75V8.76391C15.9692 8.28886 15.2683 8 14.5 8C12.8432 8 11.5 9.34317 11.5 11C11.5 11.6184 11.6871 12.1932 12.0079 12.6707C10.9954 13.2576 10.1956 14.1963 9.793 15.352C9.71913 15.564 9.67272 15.7816 9.65283 16H4.25C2.73128 16 1.5 14.7693 1.5 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.5 12.5C15.3284 12.5 16 11.8284 16 11C16 10.1716 15.3284 9.5 14.5 9.5C13.6716 9.5 13 10.1716 13 11C13 11.8284 13.6716 12.5 14.5 12.5Z"
          fill={fill}
        />
        <path
          d="M16.6011 17.5H12.399C11.9923 17.5 11.6085 17.3013 11.3717 16.9683C11.1393 16.6407 11.0787 16.2207 11.2096 15.8453C11.6979 14.443 13.0201 13.5001 14.5001 13.5001C15.9801 13.5001 17.3023 14.443 17.7911 15.8458C17.9215 16.2208 17.8609 16.6407 17.6285 16.9684C17.3917 17.3014 17.0078 17.5 16.6011 17.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarUser;
