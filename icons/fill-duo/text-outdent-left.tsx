import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextOutdentLeft({
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
          d="M15.25 13.5H2.75C2.336 13.5 2 13.836 2 14.25C2 14.664 2.336 15 2.75 15H15.25C15.664 15 16 14.664 16 14.25C16 13.836 15.664 13.5 15.25 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 10H8.75C8.336 10 8 10.336 8 10.75C8 11.164 8.336 11.5 8.75 11.5H15.25C15.664 11.5 16 11.164 16 10.75C16 10.336 15.664 10 15.25 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 6.5H8.75C8.336 6.5 8 6.836 8 7.25C8 7.664 8.336 8 8.75 8H15.25C15.664 8 16 7.664 16 7.25C16 6.836 15.664 6.5 15.25 6.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 3H2.75C2.336 3 2 3.336 2 3.75C2 4.164 2.336 4.5 2.75 4.5H15.25C15.664 4.5 16 4.164 16 3.75C16 3.336 15.664 3 15.25 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.52999 6.21999C5.23699 5.92699 4.76199 5.92699 4.46899 6.21999L2.21899 8.46999C1.92599 8.76299 1.92599 9.23803 2.21899 9.53103L4.46899 11.781C4.61499 11.927 4.80699 12.001 4.99899 12.001C5.19099 12.001 5.383 11.928 5.529 11.781C5.822 11.488 5.822 11.013 5.529 10.72L3.809 9.00002L5.529 7.28005C5.822 6.98705 5.822 6.51202 5.529 6.21902L5.52999 6.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TextOutdentLeft;
