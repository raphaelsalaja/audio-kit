import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarPen({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H8.88058L9.79611 13.3444C9.90742 13.0215 10.0908 12.7283 10.3323 12.4868L13.4935 9.32556C14.3094 8.50963 15.4513 8.21824 16.5 8.45141V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.5541 10.3862C15.2375 9.70283 16.3456 9.70283 17.029 10.3862L17.3648 10.722C18.0482 11.4054 18.0482 12.5135 17.3648 13.1969L14.2036 16.3581C14.1231 16.4386 14.0253 16.4997 13.9177 16.5368L11.2469 17.4577C10.9757 17.5512 10.675 17.4818 10.4721 17.279C10.2693 17.0762 10.1999 16.7754 10.2934 16.5042L11.2142 13.8333C11.2513 13.7257 11.3124 13.6279 11.3929 13.5474L14.5541 10.3862Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarPen;
