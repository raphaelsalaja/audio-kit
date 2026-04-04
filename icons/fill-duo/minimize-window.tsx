import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MinimizeWindow({
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
          d="M12.25 13H3.75C2.233 13 1 11.767 1 10.25V4.75C1 3.233 2.233 2 3.75 2H12.25C13.767 2 15 3.233 15 4.75V10.25C15 11.767 13.767 13 12.25 13Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.75 10H10.25C9.007 10 8 11.007 8 12.25V13.75C8 14.993 9.007 16 10.25 16H14.75C15.993 16 17 14.993 17 13.75V12.25C17 11.007 15.993 10 14.75 10Z"
          fill={fill}
        />
        <path
          d="M8.00002 5.25002C8.00002 4.83602 7.66402 4.50002 7.25002 4.50002C6.83602 4.50002 6.50002 4.83602 6.50002 5.25002V6.43905L4.78002 4.71902C4.48702 4.42602 4.01202 4.42602 3.71902 4.71902C3.42602 5.01202 3.42602 5.48705 3.71902 5.78005L5.43902 7.50002H4.25002C3.83602 7.50002 3.50002 7.83602 3.50002 8.25002C3.50002 8.66402 3.83602 9.00002 4.25002 9.00002H7.25002C7.66402 9.00002 8.00002 8.66402 8.00002 8.25002V5.25002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MinimizeWindow;
