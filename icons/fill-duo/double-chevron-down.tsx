import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DoubleChevronDown({
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
          d="M12.72 9.21999L9.00002 12.94L5.28001 9.21999C4.98701 8.92699 4.51202 8.92699 4.21902 9.21999C3.92602 9.51299 3.92602 9.98803 4.21902 10.281L8.46902 14.531C8.61502 14.677 8.80702 14.751 8.99902 14.751C9.19102 14.751 9.38302 14.678 9.52902 14.531L13.779 10.281C14.072 9.98803 14.072 9.51299 13.779 9.21999C13.486 8.92699 13.011 8.92699 12.718 9.21999H12.72Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.72 4.46999L9.00002 8.19003L5.28001 4.46999C4.98701 4.17699 4.51202 4.17699 4.21902 4.46999C3.92602 4.76299 3.92602 5.23803 4.21902 5.53103L8.46902 9.78103C8.61502 9.92703 8.80702 10.001 8.99902 10.001C9.19102 10.001 9.38302 9.92803 9.52902 9.78103L13.779 5.53103C14.072 5.23803 14.072 4.76299 13.779 4.46999C13.486 4.17699 13.011 4.17699 12.718 4.46999H12.72Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DoubleChevronDown;
