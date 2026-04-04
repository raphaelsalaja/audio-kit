import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ticket2({
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
          d="M1 5.75C1 4.23203 2.23054 3 3.75 3H14.25C15.7695 3 17 4.23203 17 5.75V6.75C17 7.16421 16.6642 7.5 16.25 7.5H16C15.1716 7.5 14.5 8.17157 14.5 9C14.5 9.82843 15.1716 10.5 16 10.5H16.25C16.6642 10.5 17 10.8358 17 11.25V12.25C17 13.768 15.7695 15 14.25 15H3.75C2.23054 15 1 13.768 1 12.25V11.25C1 10.8358 1.33579 10.5 1.75 10.5H2C2.82843 10.5 3.5 9.82843 3.5 9C3.5 8.17157 2.82843 7.5 2 7.5H1.75C1.33579 7.5 1 7.16421 1 6.75V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.25 9.625C11.6642 9.625 12 9.289 12 8.875C12 8.461 11.6642 8.125 11.25 8.125C10.8358 8.125 10.5 8.461 10.5 8.875C10.5 9.289 10.8358 9.625 11.25 9.625Z"
          fill={fill}
        />
        <path
          d="M11.25 6.5C11.6642 6.5 12 6.164 12 5.75C12 5.336 11.6642 5 11.25 5C10.8358 5 10.5 5.336 10.5 5.75C10.5 6.164 10.8358 6.5 11.25 6.5Z"
          fill={fill}
        />
        <path
          d="M11.25 13C11.6642 13 12 12.664 12 12.25C12 11.836 11.6642 11.5 11.25 11.5C10.8358 11.5 10.5 11.836 10.5 12.25C10.5 12.664 10.8358 13 11.25 13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Ticket2;
