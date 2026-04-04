import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ViewAll2({
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
          d="M8.25009 2H4.75009C3.78359 2 3.00009 2.7835 3.00009 3.75V7.25C3.00009 8.2165 3.78359 9 4.75009 9H8.25009C9.21659 9 10.0001 8.2165 10.0001 7.25V3.75C10.0001 2.7835 9.21659 2 8.25009 2Z"
          fill={fill}
        />
        <path
          d="M15.2501 4H13.2501C12.2836 4 11.5001 4.7835 11.5001 5.75V12.25C11.5001 13.2165 12.2836 14 13.2501 14H15.2501C16.2166 14 17.0001 13.2165 17.0001 12.25V5.75C17.0001 4.7835 16.2166 4 15.2501 4Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.25009 10.5H2.75009C1.78359 10.5 1.00009 11.2835 1.00009 12.25V14.25C1.00009 15.2165 1.78359 16 2.75009 16H8.25009C9.21659 16 10.0001 15.2165 10.0001 14.25V12.25C10.0001 11.2835 9.21659 10.5 8.25009 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ViewAll2;
