import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarBolt({
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
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H9.94899C10.363 16 10.699 15.664 10.699 15.25C10.699 14.836 10.363 14.5 9.94899 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V8.18744C15 8.60144 15.336 8.93744 15.75 8.93744C16.164 8.93744 16.5 8.60144 16.5 8.18744V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
        <path
          d="M17.404 13.384C17.272 13.147 17.021 13 16.75 13H14.874L15.462 11.237C15.582 10.876 15.412 10.481 15.067 10.32C14.723 10.159 14.311 10.281 14.111 10.607L12.111 13.857C11.968 14.088 11.963 14.378 12.095 14.616C12.227 14.853 12.478 15 12.749 15H14.625L14.037 16.763C13.917 17.124 14.087 17.519 14.432 17.68C14.535 17.728 14.642 17.75 14.749 17.75C15.002 17.75 15.247 17.622 15.388 17.393L17.388 14.143C17.531 13.912 17.536 13.622 17.404 13.384Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CalendarBolt;
