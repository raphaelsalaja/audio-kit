import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareUpRight2({
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
          d="M1.5 7.75V13.75C1.5 15.267 2.733 16.5 4.25 16.5H10.25C11.767 16.5 13 15.267 13 13.75V7.75C13 6.233 11.767 5 10.25 5H4.25C2.733 5 1.5 6.233 1.5 7.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.27999 9.78003C9.13399 9.92603 8.94199 10 8.74999 10C8.55799 10 8.36599 9.92703 8.21999 9.78003C7.92699 9.48703 7.92699 9.01199 8.21999 8.71899L13.939 3H11C10.586 3 10.25 2.664 10.25 2.25C10.25 1.836 10.586 1.5 11 1.5H15.75C16.164 1.5 16.5 1.836 16.5 2.25V7C16.5 7.414 16.164 7.75 15.75 7.75C15.336 7.75 15 7.414 15 7V4.06104L9.27999 9.78003Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareUpRight2;
