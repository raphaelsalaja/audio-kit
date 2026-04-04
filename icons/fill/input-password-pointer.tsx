import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InputPasswordPointer({
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
          d="M5 10C5.552 10 6 9.552 6 9C6 8.448 5.552 8 5 8C4.448 8 4 8.448 4 9C4 9.552 4.448 10 5 10Z"
          fill={fill}
        />
        <path
          d="M8.5 10C9.052 10 9.5 9.552 9.5 9C9.5 8.448 9.052 8 8.5 8C7.948 8 7.5 8.448 7.5 9C7.5 9.552 7.948 10 8.5 10Z"
          fill={fill}
        />
        <path
          d="M17.324 12.233L11.384 10.063C11.006 9.92398 10.59 10.016 10.303 10.302C10.017 10.588 9.92502 11.003 10.064 11.384L12.234 17.324C12.382 17.731 12.77 18 13.201 18H13.222C13.662 17.991 14.048 17.704 14.182 17.284L14.934 14.933L17.286 14.181C17.705 14.047 17.992 13.661 18.001 13.221C18.009 12.781 17.738 12.384 17.325 12.233H17.324Z"
          fill={secondaryfill}
        />
        <path
          d="M8.3486 14H3.25C1.7334 14 0.5 12.7666 0.5 11.25V6.75C0.5 5.2334 1.7334 4 3.25 4H13.75C15.2666 4 16.5 5.2334 16.5 6.75V9.26318C16.5 9.67728 16.1641 10.0132 15.75 10.0132C15.3359 10.0132 15 9.67728 15 9.26318V6.75C15 6.0605 14.4395 5.5 13.75 5.5H3.25C2.5605 5.5 2 6.0605 2 6.75V11.25C2 11.9395 2.5605 12.5 3.25 12.5H8.3486C8.7627 12.5 9.0986 12.8359 9.0986 13.25C9.0986 13.6641 8.7627 14 8.3486 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default InputPasswordPointer;
