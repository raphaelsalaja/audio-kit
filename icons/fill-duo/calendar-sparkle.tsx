import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarSparkle({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H9.83548C9.31821 15.5815 9.00018 14.9443 9.00018 14.25C9.00018 13.2806 9.62236 12.4218 10.5389 12.1149L11.7215 11.7211L12.1156 10.5385C12.4216 9.62132 13.281 9 14.2501 9C15.2194 9 16.0781 9.62101 16.3842 10.5375L16.3846 10.5385L16.5 10.8849V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.4873 13.5381L15.5928 12.9072L14.9615 11.0127C14.8594 10.707 14.5728 10.5 14.2501 10.5C13.9274 10.5 13.6407 10.707 13.5387 11.0127L12.9074 12.9072L11.0129 13.5381C10.7067 13.6406 10.5002 13.9268 10.5002 14.25C10.5002 14.5732 10.7067 14.8594 11.0129 14.9619L12.9074 15.5928L13.5387 17.4873C13.6408 17.793 13.9274 18 14.2501 18C14.5728 18 14.8595 17.793 14.9615 17.4873L15.5928 15.5928L17.4873 14.9619C17.7935 14.8594 18 14.5732 18 14.25C18 13.9268 17.7935 13.6406 17.4873 13.5381Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarSparkle;
