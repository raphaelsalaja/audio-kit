import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack5({
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
          d="M3 6.25C3 4.73128 4.23069 3.5 5.75 3.5H12.25C13.7693 3.5 15 4.73128 15 6.25V9.25C15 10.7687 13.7693 12 12.25 12H5.75C4.23069 12 3 10.7687 3 9.25V6.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.5 12H6V9.75C6 9.33579 6.33579 9 6.75 9C7.16421 9 7.5 9.33579 7.5 9.75V12Z"
          fill={fill}
        />
        <path
          d="M12 12H10.5V9.75C10.5 9.33579 10.8358 9 11.25 9C11.6642 9 12 9.33579 12 9.75V12Z"
          fill={fill}
        />
        <path
          d="M7.5 3C7.5 2.17121 8.17121 1.5 9 1.5C9.82879 1.5 10.5 2.17121 10.5 3V3.5H12V3C12 1.34279 10.6572 0 9 0C7.34279 0 6 1.34279 6 3V3.5H7.5V3Z"
          fill={fill}
        />
        <path
          d="M3 8.10345C1.84553 8.42978 1 9.49082 1 10.75V14.25C1 15.7692 2.23079 17 3.75 17H14.25C15.7692 17 17 15.7692 17 14.25V10.75C17 9.49082 16.1545 8.42978 15 8.10345V9.25001C15 10.7687 13.7693 12 12.25 12H9H5.75C4.23069 12 3 10.7687 3 9.25001V8.10345Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Backpack5;
