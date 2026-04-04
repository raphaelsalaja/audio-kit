import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DropdownMenu({
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
          d="M17.324 12.233L11.384 10.063C11.004 9.92398 10.59 10.016 10.303 10.302C10.017 10.588 9.92502 11.003 10.064 11.384L12.234 17.324C12.382 17.731 12.77 18 13.201 18H13.222C13.662 17.991 14.048 17.704 14.182 17.284L14.934 14.933L17.286 14.181C17.705 14.047 17.992 13.661 18.001 13.221C18.009 12.781 17.737 12.384 17.324 12.233Z"
          fill={secondaryfill}
        />
        <path
          d="M8.75 9H5.75C5.3359 9 5 8.6641 5 8.25C5 7.8359 5.3359 7.5 5.75 7.5H8.75C9.1641 7.5 9.5 7.8359 9.5 8.25C9.5 8.6641 9.1641 9 8.75 9Z"
          fill={fill}
        />
        <path
          d="M11.75 6H5.75C5.3359 6 5 5.6641 5 5.25C5 4.8359 5.3359 4.5 5.75 4.5H11.75C12.1641 4.5 12.5 4.8359 12.5 5.25C12.5 5.6641 12.1641 6 11.75 6Z"
          fill={fill}
        />
        <path
          d="M8.8965 15.5H4.75C3.2334 15.5 2 14.2666 2 12.75V3.75C2 2.2334 3.2334 1 4.75 1H12.75C14.2666 1 15.5 2.2334 15.5 3.75V8.89789C15.5 9.31199 15.1641 9.64789 14.75 9.64789C14.3359 9.64789 14 9.31199 14 8.89789V3.75C14 3.0605 13.4395 2.5 12.75 2.5H4.75C4.0605 2.5 3.5 3.0605 3.5 3.75V12.75C3.5 13.4395 4.0605 14 4.75 14H8.8965C9.3106 14 9.6465 14.3359 9.6465 14.75C9.6465 15.1641 9.3106 15.5 8.8965 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DropdownMenu;
