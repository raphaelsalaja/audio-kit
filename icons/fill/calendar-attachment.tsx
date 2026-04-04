import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarAttachment({
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
          d="M14.75 18C12.958 18 11.5 16.542 11.5 14.75V12.25C11.5 11.147 12.397 10.25 13.5 10.25C14.603 10.25 15.5 11.147 15.5 12.25V14.25C15.5 14.664 15.164 15 14.75 15C14.336 15 14 14.664 14 14.25V12.25C14 11.974 13.775 11.75 13.5 11.75C13.225 11.75 13 11.974 13 12.25V14.75C13 15.715 13.785 16.5 14.75 16.5C15.715 16.5 16.5 15.715 16.5 14.75V12.75C16.5 12.336 16.836 12 17.25 12C17.664 12 18 12.336 18 12.75V14.75C18 16.542 16.542 18 14.75 18Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H9.27483C9.68883 16 10.0248 15.664 10.0248 15.25C10.0248 14.836 9.68883 14.5 9.27483 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V8.65097C15 9.06497 15.336 9.40097 15.75 9.40097C16.164 9.40097 16.5 9.06497 16.5 8.65097V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarAttachment;
