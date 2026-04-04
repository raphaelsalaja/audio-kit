import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarDate({
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
          d="M1.5 4.75C1.5 3.23069 2.73128 2 4.25 2H13.75C15.2687 2 16.5 3.23069 16.5 4.75V13.25C16.5 14.7693 15.2687 16 13.75 16H4.25C2.73128 16 1.5 14.7693 1.5 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.44161 8.02489C9.77073 8.11187 9.99999 8.40959 9.99999 8.75V12.75C9.99999 13.1642 9.6642 13.5 9.24999 13.5C8.83577 13.5 8.49999 13.1642 8.49999 12.75V10.3181C8.33565 10.3855 8.15567 10.4412 7.95981 10.4787C7.55296 10.5564 7.1601 10.2897 7.08232 9.88282C7.00455 9.47597 7.27132 9.08311 7.67816 9.00534C7.98502 8.94668 8.21806 8.7893 8.38228 8.633C8.4642 8.55502 8.54176 8.46797 8.60222 8.37197C8.77196 8.08105 9.11529 7.93865 9.44161 8.02489Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarDate;
