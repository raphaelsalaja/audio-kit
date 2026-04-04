import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseArrowDown({
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
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
        <path
          d="M14.5 11.75C14.5 11.3358 14.1642 11 13.75 11C13.3358 11 13 11.3358 13 11.75V14.9393L11.7803 13.7197C11.4874 13.4268 11.0126 13.4268 10.7197 13.7197C10.4268 14.0126 10.4268 14.4874 10.7197 14.7803L13.2197 17.2803C13.5126 17.5732 13.9874 17.5732 14.2803 17.2803L16.7803 14.7803C17.0732 14.4874 17.0732 14.0126 16.7803 13.7197C16.4874 13.4268 16.0126 13.4268 15.7197 13.7197L14.5 14.9393V11.75Z"
          fill={fill}
        />
        <path
          d="M1 6.75C1 5.23203 2.23054 4 3.75 4H14.25C15.7695 4 17 5.23203 17 6.75V12.1281C16.6782 12.0146 16.3357 11.9765 16 12.0138V11.75C16 10.5074 14.9926 9.5 13.75 9.5C12.5074 9.5 11.5 10.5074 11.5 11.75V12.0138C10.844 11.9409 10.162 12.156 9.65901 12.659C8.78033 13.5377 8.78033 14.9623 9.65901 15.841L9.81802 16H3.75C2.23054 16 1 14.768 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcaseArrowDown;
