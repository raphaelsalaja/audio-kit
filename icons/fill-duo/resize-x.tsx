import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ResizeX({
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
          d="M2.25 2C1.836 2 1.5 2.336 1.5 2.75V15.25C1.5 15.664 1.836 16 2.25 16C2.664 16 3 15.664 3 15.25V2.75C3 2.336 2.664 2 2.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.75 2C15.336 2 15 2.336 15 2.75V15.25C15 15.664 15.336 16 15.75 16C16.164 16 16.5 15.664 16.5 15.25V2.75C16.5 2.336 16.164 2 15.75 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.78001 6.21999C7.48701 5.92699 7.01202 5.92699 6.71902 6.21999L4.46902 8.46999C4.17602 8.76299 4.17602 9.23803 4.46902 9.53103L6.71902 11.781C6.86502 11.927 7.05702 12.001 7.24902 12.001C7.44102 12.001 7.63302 11.928 7.77902 11.781C8.07202 11.488 8.07202 11.013 7.77902 10.72L6.05901 9.00002L7.77902 7.28005C8.07202 6.98705 8.07202 6.51202 7.77902 6.21902L7.78001 6.21999Z"
          fill={fill}
        />
        <path
          d="M11.28 6.21999C10.987 5.92699 10.512 5.92699 10.219 6.21999C9.92602 6.51299 9.92602 6.98803 10.219 7.28103L11.939 9.001L10.219 10.721C9.92602 11.014 9.92602 11.489 10.219 11.782C10.365 11.928 10.557 12.002 10.749 12.002C10.941 12.002 11.133 11.929 11.279 11.782L13.529 9.53201C13.822 9.23901 13.822 8.76397 13.529 8.47097L11.279 6.22097L11.28 6.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ResizeX;
