import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarShield({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H9.65859C9.55821 15.6768 9.5 15.3241 9.5 14.9405V12.0001C9.5 11.1204 10.0136 10.317 10.8196 9.95158L13.568 8.70226C14.1597 8.43319 14.8395 8.43289 15.4312 8.70196L16.5 9.18777V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.5605 11.3175L14.8105 10.0675C14.6132 9.9777 14.3867 9.9777 14.1894 10.0675L11.4395 11.3175C11.1719 11.4386 11 11.7062 11 12.0001V14.9405C11 16.9903 13.9604 17.878 14.2979 17.9727C14.3638 17.9913 14.4322 18 14.5 18C14.5678 18 14.6362 17.9912 14.7021 17.9727C15.0395 17.878 18 16.9903 18 14.9405V12.0001C18 11.7062 17.8281 11.4386 17.5605 11.3175ZM16.5 14.9405C16.5 15.5489 15.3726 16.1759 14.5 16.4659V11.5743L16.5 12.4835V14.9405Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarShield;
