import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout11({
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
          d="M15.2501 8.5H10.7501C10.336 8.5 10.0001 8.8359 10.0001 9.25C10.0001 9.6641 10.336 10 10.7501 10H15.2501C15.6642 10 16.0001 9.6641 16.0001 9.25C16.0001 8.8359 15.6642 8.5 15.2501 8.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 11.5H10.7501C10.336 11.5 10.0001 11.8359 10.0001 12.25C10.0001 12.6641 10.336 13 10.7501 13H15.2501C15.6642 13 16.0001 12.6641 16.0001 12.25C16.0001 11.8359 15.6642 11.5 15.2501 11.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 14.5H10.7501C10.336 14.5 10.0001 14.8359 10.0001 15.25C10.0001 15.6641 10.336 16 10.7501 16H15.2501C15.6642 16 16.0001 15.6641 16.0001 15.25C16.0001 14.8359 15.6642 14.5 15.2501 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 2H3.75009C2.78359 2 2.00009 2.7835 2.00009 3.75V5.25C2.00009 6.2165 2.78359 7 3.75009 7H14.2501C15.2166 7 16.0001 6.2165 16.0001 5.25V3.75C16.0001 2.7835 15.2166 2 14.2501 2Z"
          fill={fill}
        />
        <path
          d="M6.75009 8.5H3.75009C2.78359 8.5 2.00009 9.2835 2.00009 10.25V14.25C2.00009 15.2165 2.78359 16 3.75009 16H6.75009C7.71659 16 8.50009 15.2165 8.50009 14.25V10.25C8.50009 9.2835 7.71659 8.5 6.75009 8.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridLayout11;
