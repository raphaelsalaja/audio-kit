import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard4Mouse({
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
          d="M3.75 3C2.23069 3 1 4.23128 1 5.75V10.25C1 11.7687 2.23069 13 3.75 13H9V11.25C9 8.90307 10.9021 7 13.25 7H14.25C15.2989 7 16.2589 7.37982 17 8.00935V5.75C17 4.23128 15.7693 3 14.25 3H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.75 6H7.25C6.974 6 6.75 6.2239 6.75 6.5V7C6.75 7.2761 6.974 7.5 7.25 7.5H7.75C8.026 7.5 8.25 7.2761 8.25 7V6.5C8.25 6.2239 8.026 6 7.75 6Z"
          fill={fill}
        />
        <path
          d="M4.75 6H4.25C3.974 6 3.75 6.2239 3.75 6.5V7C3.75 7.2761 3.974 7.5 4.25 7.5H4.75C5.026 7.5 5.25 7.2761 5.25 7V6.5C5.25 6.2239 5.026 6 4.75 6Z"
          fill={fill}
        />
        <path
          d="M10.75 6H10.25C9.974 6 9.75 6.2239 9.75 6.5V7C9.75 7.2761 9.974 7.5 10.25 7.5H10.75C11.026 7.5 11.25 7.2761 11.25 7V6.5C11.25 6.2239 11.026 6 10.75 6Z"
          fill={fill}
        />
        <path
          d="M13.25 8.5C11.7307 8.5 10.5 9.73128 10.5 11.25V14.25C10.5 15.7687 11.7307 17 13.25 17H14.25C15.7693 17 17 15.7687 17 14.25V11.25C17 9.73128 15.7693 8.5 14.25 8.5H13.25ZM14.5 11.75C14.5 11.3358 14.1642 11 13.75 11C13.3358 11 13 11.3358 13 11.75V12.75C13 13.1642 13.3358 13.5 13.75 13.5C14.1642 13.5 14.5 13.1642 14.5 12.75V11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.25 6H13.75C14.026 6 14.25 6.2239 14.25 6.5V7H13.25C13.0811 7 12.9146 7.00985 12.7508 7.02899C12.7503 7.0194 12.75 7.00973 12.75 7V6.5C12.75 6.2239 12.974 6 13.25 6Z"
          fill={fill}
        />
        <path
          d="M9.64368 9H6.75C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5H9.06596C9.16255 9.95741 9.36209 9.45043 9.64368 9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Keyboard4Mouse;
