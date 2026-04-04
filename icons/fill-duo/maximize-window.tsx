import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MaximizeWindow({
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
          d="M12.25 13H3.75C2.2334 13 1 11.767 1 10.25V4.75C1 3.233 2.2334 2 3.75 2H12.25C13.7666 2 15 3.233 15 4.75V10.25C15 11.767 13.7666 13 12.25 13Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.78002 7.71997L6.06002 6H7.24902C7.66302 6 7.99902 5.664 7.99902 5.25C7.99902 4.836 7.66302 4.5 7.24902 4.5H4.24902C3.83502 4.5 3.49902 4.836 3.49902 5.25V8.25C3.49902 8.664 3.83502 9 4.24902 9C4.66302 9 4.99902 8.664 4.99902 8.25V7.06097L6.71902 8.78101C6.86502 8.92701 7.05702 9.00098 7.24902 9.00098C7.44102 9.00098 7.63302 8.92801 7.77902 8.78101C8.07202 8.48801 8.07202 8.01297 7.77902 7.71997H7.78002Z"
          fill={fill}
        />
        <path
          d="M14.75 10H10.25C9.0074 10 8 11.007 8 12.25V13.75C8 14.993 9.0074 16 10.25 16H14.75C15.9926 16 17 14.993 17 13.75V12.25C17 11.007 15.9926 10 14.75 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MaximizeWindow;
