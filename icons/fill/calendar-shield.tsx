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
          d="M5.75 3.5C5.336 3.5 5 3.164 5 2.75V0.75C5 0.336 5.336 0 5.75 0C6.164 0 6.5 0.336 6.5 0.75V2.75C6.5 3.164 6.164 3.5 5.75 3.5Z"
          fill={fill}
        />
        <path
          d="M12.25 3.5C11.836 3.5 11.5 3.164 11.5 2.75V0.75C11.5 0.336 11.836 0 12.25 0C12.664 0 13 0.336 13 0.75V2.75C13 3.164 12.664 3.5 12.25 3.5Z"
          fill={fill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H8.76911C9.18311 16 9.51911 15.664 9.51911 15.25C9.51911 14.836 9.18311 14.5 8.76911 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V8.02616C15 8.44016 15.336 8.77616 15.75 8.77616C16.164 8.77616 16.5 8.44016 16.5 8.02616V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
        <path
          d="M17.561 11.317L14.811 10.067C14.614 9.97701 14.387 9.97701 14.19 10.067L11.44 11.317C11.172 11.438 11.001 11.706 11.001 12V14.94C11.001 16.99 13.961 17.878 14.299 17.972C14.365 17.991 14.433 17.999 14.501 17.999C14.569 17.999 14.637 17.99 14.703 17.972C15.04 17.877 18.001 16.99 18.001 14.94V12C18.001 11.706 17.828 11.438 17.561 11.317ZM16.5 14.94C16.5 15.548 15.373 16.175 14.5 16.465V11.573L16.5 12.482V14.94Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CalendarShield;
