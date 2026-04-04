import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarPlus({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H12.628C12.5451 15.7654 12.5 15.513 12.5 15.25V15H12.25C11.0074 15 10 13.9926 10 12.75C10 11.5074 11.0074 10.5 12.25 10.5H12.5V10.25C12.5 9.00736 13.5074 8 14.75 8C15.4568 8 16.0875 8.32592 16.5 8.83567V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.5 10.25C15.5 9.83579 15.1642 9.5 14.75 9.5C14.3358 9.5 14 9.83579 14 10.25V12H12.25C11.8358 12 11.5 12.3358 11.5 12.75C11.5 13.1642 11.8358 13.5 12.25 13.5H14V15.25C14 15.6642 14.3358 16 14.75 16C15.1642 16 15.5 15.6642 15.5 15.25V13.5H17.25C17.6642 13.5 18 13.1642 18 12.75C18 12.3358 17.6642 12 17.25 12H15.5V10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarPlus;
