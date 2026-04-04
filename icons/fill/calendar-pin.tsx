import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarPin({
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
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H9.03008C9.44408 16 9.78008 15.664 9.78008 15.25C9.78008 14.836 9.44408 14.5 9.03008 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V7.88619C15 8.30019 15.336 8.63619 15.75 8.63619C16.164 8.63619 16.5 8.30019 16.5 7.88619V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
        <path
          d="M14.5 10C12.5703 10 11 11.5703 11 13.5C11 16.1543 14.0107 17.8369 14.1396 17.9072C14.2519 17.9687 14.3759 18 14.5 18C14.6241 18 14.748 17.9688 14.8604 17.9072C14.9893 17.8369 18 16.1543 18 13.5C18 11.5703 16.4297 10 14.5 10ZM14.5 14.5C13.9478 14.5 13.5 14.0522 13.5 13.5C13.5 12.9478 13.9478 12.5 14.5 12.5C15.0522 12.5 15.5 12.9477 15.5 13.5C15.5 14.0523 15.0522 14.5 14.5 14.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CalendarPin;
