import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dial({
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
          d="M9 14.25C11.8995 14.25 14.25 11.8995 14.25 9C14.25 6.10051 11.8995 3.75 9 3.75C6.10051 3.75 3.75 6.10051 3.75 9C3.75 11.8995 6.10051 14.25 9 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.712 12.712L9 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 14.25C11.8995 14.25 14.25 11.8995 14.25 9C14.25 6.10051 11.8995 3.75 9 3.75C6.10051 3.75 3.75 6.10051 3.75 9C3.75 11.8995 6.10051 14.25 9 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 1.5C9.41421 1.5 9.75 1.16421 9.75 0.75C9.75 0.335786 9.41421 0 9 0C8.58579 0 8.25 0.335786 8.25 0.75C8.25 1.16421 8.58579 1.5 9 1.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.834 3.916C15.2482 3.916 15.584 3.58021 15.584 3.166C15.584 2.75179 15.2482 2.416 14.834 2.416C14.4198 2.416 14.084 2.75179 14.084 3.166C14.084 3.58021 14.4198 3.916 14.834 3.916Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M17.25 9.75C17.6642 9.75 18 9.41421 18 9C18 8.58579 17.6642 8.25 17.25 8.25C16.8358 8.25 16.5 8.58579 16.5 9C16.5 9.41421 16.8358 9.75 17.25 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.834 15.584C15.2482 15.584 15.584 15.2482 15.584 14.834C15.584 14.4198 15.2482 14.084 14.834 14.084C14.4198 14.084 14.084 14.4198 14.084 14.834C14.084 15.2482 14.4198 15.584 14.834 15.584Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.16602 15.584C3.58023 15.584 3.91602 15.2482 3.91602 14.834C3.91602 14.4198 3.58023 14.084 3.16602 14.084C2.7518 14.084 2.41602 14.4198 2.41602 14.834C2.41602 15.2482 2.7518 15.584 3.16602 15.584Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M0.75 9.75C1.16421 9.75 1.5 9.41421 1.5 9C1.5 8.58579 1.16421 8.25 0.75 8.25C0.335786 8.25 0 8.58579 0 9C0 9.41421 0.335786 9.75 0.75 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.16602 3.916C3.58023 3.916 3.91602 3.58021 3.91602 3.166C3.91602 2.75179 3.58023 2.416 3.16602 2.416C2.7518 2.416 2.41602 2.75179 2.41602 3.166C2.41602 3.58021 2.7518 3.916 3.16602 3.916Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Dial;
