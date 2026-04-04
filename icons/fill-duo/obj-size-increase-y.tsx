import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjSizeIncreaseY({
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
          d="M15.25 6H2.75C1.7835 6 1 6.7835 1 7.75V10.25C1 11.2165 1.7835 12 2.75 12H15.25C16.2165 12 17 11.2165 17 10.25V7.75C17 6.7835 16.2165 6 15.25 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.27999 4.28005L8.99999 2.56002L10.72 4.28005C10.866 4.42605 11.058 4.50002 11.25 4.50002C11.442 4.50002 11.634 4.42705 11.78 4.28005C12.073 3.98705 12.073 3.51202 11.78 3.21902L9.52999 0.969994C9.23699 0.676994 8.76199 0.676994 8.46899 0.969994L6.21899 3.21999C5.92599 3.51299 5.92599 3.98803 6.21899 4.28103C6.51199 4.57403 6.98699 4.57305 7.27999 4.28005Z"
          fill={fill}
        />
        <path
          d="M10.72 13.72L8.99999 15.44L7.27999 13.72C6.98699 13.427 6.51199 13.427 6.21899 13.72C5.92599 14.013 5.92599 14.488 6.21899 14.781L8.46899 17.031C8.61499 17.177 8.80699 17.251 8.99899 17.251C9.19099 17.251 9.38298 17.178 9.52898 17.031L11.779 14.781C12.072 14.488 12.072 14.013 11.779 13.72C11.486 13.427 11.011 13.427 10.718 13.72H10.72Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ObjSizeIncreaseY;
