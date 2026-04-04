import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarDownload({
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
          d="M17.78 14.22C17.487 13.927 17.012 13.927 16.719 14.22L15.499 15.44V12.251C15.499 11.837 15.163 11.501 14.749 11.501C14.335 11.501 13.999 11.837 13.999 12.251V15.44L12.779 14.22C12.486 13.927 12.011 13.927 11.718 14.22C11.425 14.513 11.425 14.988 11.718 15.281L14.218 17.781C14.364 17.927 14.556 18.001 14.748 18.001C14.94 18.001 15.132 17.928 15.278 17.781L17.778 15.281C18.071 14.988 18.071 14.513 17.778 14.22H17.78Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H9.29599C9.70999 16 10.046 15.664 10.046 15.25C10.046 14.836 9.70999 14.5 9.29599 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V9.42655C15 9.84055 15.336 10.1765 15.75 10.1765C16.164 10.1765 16.5 9.84055 16.5 9.42655V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarDownload;
