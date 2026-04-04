import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsThroughLineY({
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
          d="M15.75 9.75H12C11.586 9.75 11.25 9.414 11.25 9C11.25 8.586 11.586 8.25 12 8.25H15.75C16.164 8.25 16.5 8.586 16.5 9C16.5 9.414 16.164 9.75 15.75 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 9.75H2.25C1.836 9.75 1.5 9.414 1.5 9C1.5 8.586 1.836 8.25 2.25 8.25H9C9.414 8.25 9.75 8.586 9.75 9C9.75 9.414 9.414 9.75 9 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.47 5.27999C11.616 5.42599 11.808 5.49999 12 5.49999C12.192 5.49999 12.384 5.42699 12.53 5.27999C12.823 4.98699 12.823 4.51199 12.53 4.21899L9.52999 1.21899C9.23699 0.925987 8.76199 0.925987 8.46899 1.21899L5.46899 4.21899C5.17599 4.51199 5.17599 4.98699 5.46899 5.27999C5.76199 5.57299 6.23699 5.57299 6.52999 5.27999L8.24999 3.55999V14.439L6.52999 12.719C6.23699 12.426 5.76199 12.426 5.46899 12.719C5.17599 13.012 5.17599 13.487 5.46899 13.78L8.46899 16.78C8.61499 16.926 8.80699 17 8.99899 17C9.19099 17 9.383 16.927 9.529 16.78L12.529 13.78C12.822 13.487 12.822 13.012 12.529 12.719C12.236 12.426 11.761 12.426 11.468 12.719L9.74799 14.439V3.561L11.468 5.281L11.47 5.27999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsThroughLineY;
