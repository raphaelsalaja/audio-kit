import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarHeart({
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
          d="M5.74899 3.5C5.33499 3.5 4.99899 3.164 4.99899 2.75V0.75C4.99899 0.336 5.33499 0 5.74899 0C6.16299 0 6.49899 0.336 6.49899 0.75V2.75C6.49899 3.164 6.16299 3.5 5.74899 3.5Z"
          fill={fill}
        />
        <path
          d="M12.249 3.5C11.835 3.5 11.499 3.164 11.499 2.75V0.75C11.499 0.336 11.835 0 12.249 0C12.663 0 12.999 0.336 12.999 0.75V2.75C12.999 3.164 12.663 3.5 12.249 3.5Z"
          fill={fill}
        />
        <path
          d="M13.749 2H4.24899C2.73199 2 1.49899 3.233 1.49899 4.75V13.25C1.49899 14.767 2.73199 16 4.24899 16H8.08912C8.50312 16 8.83912 15.664 8.83912 15.25C8.83912 14.836 8.50312 14.5 8.08912 14.5H4.24899C3.55999 14.5 2.99899 13.939 2.99899 13.25V7H14.999V7.78125C14.999 8.19525 15.335 8.53125 15.749 8.53125C16.163 8.53125 16.499 8.19525 16.499 7.78125V4.75C16.499 3.233 15.266 2 13.749 2Z"
          fill={fill}
        />
        <path
          d="M13.732 17.192C13.902 17.281 14.1 17.281 14.27 17.192C15.167 16.72 18.001 15.011 18.001 12.231C18.005 11.01 17.027 10.016 15.814 10.009C15.084 10.018 14.406 10.389 14.001 11C13.596 10.389 12.917 10.019 12.188 10.009C10.975 10.016 9.99699 11.011 10.001 12.231C10.001 15.011 12.835 16.72 13.732 17.192Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CalendarHeart;
