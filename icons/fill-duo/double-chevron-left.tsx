import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DoubleChevronLeft({
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
          d="M13.53 4.21999C13.237 3.92699 12.762 3.92699 12.469 4.21999L8.219 8.46999C7.926 8.76299 7.926 9.23803 8.219 9.53103L12.469 13.781C12.615 13.927 12.807 14.001 12.999 14.001C13.191 14.001 13.383 13.928 13.529 13.781C13.822 13.488 13.822 13.013 13.529 12.72L9.809 9.00002L13.529 5.28005C13.822 4.98705 13.822 4.51202 13.529 4.21902L13.53 4.21999Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.06099 9.00002L8.78099 5.28005C9.07399 4.98705 9.07399 4.51202 8.78099 4.21902C8.48799 3.92602 8.01299 3.92602 7.71999 4.21902L3.46999 8.46999C3.17699 8.76299 3.17699 9.23803 3.46999 9.53103L7.71999 13.781C7.86599 13.927 8.05799 14.001 8.24999 14.001C8.44199 14.001 8.63399 13.928 8.77999 13.781C9.07299 13.488 9.07299 13.013 8.77999 12.72L5.06099 9.00002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DoubleChevronLeft;
