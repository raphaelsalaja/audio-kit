import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SeparateY({
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
          d="M15.25 6.5H2.75C2.336 6.5 2 6.836 2 7.25C2 7.664 2.336 8 2.75 8H15.25C15.664 8 16 7.664 16 7.25C16 6.836 15.664 6.5 15.25 6.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 10H2.75C2.336 10 2 10.336 2 10.75C2 11.164 2.336 11.5 2.75 11.5H15.25C15.664 11.5 16 11.164 16 10.75C16 10.336 15.664 10 15.25 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.03 4.78005L9 2.81008L10.97 4.78005C11.116 4.92605 11.308 5.00002 11.5 5.00002C11.692 5.00002 11.884 4.92705 12.03 4.78005C12.323 4.48705 12.323 4.01202 12.03 3.71902L9.53 1.21902C9.237 0.926018 8.762 0.926018 8.469 1.21902L5.969 3.71902C5.676 4.01202 5.676 4.48705 5.969 4.78005C6.262 5.07305 6.737 5.07305 7.03 4.78005Z"
          fill={fill}
        />
        <path
          d="M10.97 13.22L9 15.19L7.03 13.22C6.737 12.927 6.262 12.927 5.969 13.22C5.676 13.513 5.676 13.988 5.969 14.281L8.469 16.781C8.615 16.927 8.807 17.001 8.999 17.001C9.191 17.001 9.383 16.928 9.529 16.781L12.029 14.281C12.322 13.988 12.322 13.513 12.029 13.22C11.736 12.927 11.261 12.927 10.968 13.22H10.97Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SeparateY;
