import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarBolt({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H11.3358C11.116 15.8224 10.9282 15.6023 10.7859 15.3475C10.3882 14.636 10.4066 13.765 10.8338 13.0708L12.8338 9.82078C13.4327 8.84746 14.6662 8.47778 15.7018 8.96121C16.0214 9.11043 16.2909 9.32629 16.5 9.58534V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.0673 10.3204C15.4124 10.4815 15.582 10.8759 15.4615 11.2372L14.8737 13H16.75C17.0217 13 17.2722 13.147 17.4047 13.3841C17.5373 13.6213 17.5311 13.9117 17.3887 14.1431L15.3887 17.3931C15.1891 17.7175 14.7779 17.8407 14.4327 17.6796C14.0876 17.5184 13.918 17.1241 14.0385 16.7627L14.6263 15H12.75C12.4783 15 12.2278 14.853 12.0953 14.6158C11.9627 14.3787 11.9689 14.0883 12.1113 13.8569L14.1113 10.6069C14.3109 10.2825 14.7221 10.1593 15.0673 10.3204Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarBolt;
