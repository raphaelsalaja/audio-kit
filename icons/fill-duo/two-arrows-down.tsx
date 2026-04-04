import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TwoArrowsDown({
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
          d="M14.72 7.21997L13 8.93994V2.75C13 2.336 12.664 2 12.25 2C11.836 2 11.5 2.336 11.5 2.75V8.93896L9.77999 7.21899C9.48699 6.92599 9.01199 6.92599 8.71899 7.21899C8.42599 7.51199 8.42599 7.98703 8.71899 8.28003L11.719 11.28C11.865 11.426 12.057 11.5 12.249 11.5C12.441 11.5 12.633 11.427 12.779 11.28L15.779 8.28003C16.072 7.98703 16.072 7.51199 15.779 7.21899C15.486 6.92599 15.011 6.92599 14.718 7.21899L14.72 7.21997Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.71999 11.72L6.99999 13.4399V2.75C6.99999 2.336 6.66399 2 6.24999 2C5.83599 2 5.49999 2.336 5.49999 2.75V13.439L3.77999 11.719C3.48699 11.426 3.01199 11.426 2.71899 11.719C2.42599 12.012 2.42599 12.487 2.71899 12.78L5.71899 15.78C5.86499 15.926 6.05699 16 6.24899 16C6.44099 16 6.633 15.927 6.779 15.78L9.779 12.78C10.072 12.487 10.072 12.012 9.779 11.719C9.486 11.426 9.011 11.426 8.718 11.719L8.71999 11.72Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TwoArrowsDown;
