import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ThreeWayArrowSplit({
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
          d="M15.53 7.46997C15.237 7.17697 14.762 7.17697 14.469 7.46997L9.749 12.1899V2C9.749 1.586 9.413 1.25 8.999 1.25C8.585 1.25 8.249 1.586 8.249 2V12.189L3.53 7.46997C3.237 7.17697 2.762 7.17697 2.469 7.46997C2.176 7.76297 2.176 8.23801 2.469 8.53101L7.883 13.9449C8.119 14.1809 8.249 14.495 8.249 14.829V16.25C8.249 16.664 8.585 17 8.999 17C9.413 17 9.749 16.664 9.749 16.25V14.829C9.749 14.495 9.879 14.1809 10.115 13.9449L15.529 8.53101C15.822 8.23801 15.823 7.76297 15.53 7.46997Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.75 5.25002C11.558 5.25002 11.366 5.17705 11.22 5.03005L9 2.81008L6.78 5.03005C6.487 5.32305 6.012 5.32305 5.719 5.03005C5.426 4.73705 5.426 4.26202 5.719 3.96902L8.469 1.21902C8.762 0.926018 9.237 0.926018 9.53 1.21902L12.28 3.96902C12.573 4.26202 12.573 4.73705 12.28 5.03005C12.134 5.17605 11.942 5.25002 11.75 5.25002Z"
          fill={fill}
        />
        <path
          d="M15.25 12C14.836 12 14.5 11.664 14.5 11.25V8.5H11.75C11.336 8.5 11 8.164 11 7.75C11 7.336 11.336 7 11.75 7H15.25C15.664 7 16 7.336 16 7.75V11.25C16 11.664 15.664 12 15.25 12Z"
          fill={fill}
        />
        <path
          d="M2.75 12C2.336 12 2 11.664 2 11.25V7.75C2 7.336 2.336 7 2.75 7H6.25C6.664 7 7 7.336 7 7.75C7 8.164 6.664 8.5 6.25 8.5H3.5V11.25C3.5 11.664 3.164 12 2.75 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ThreeWayArrowSplit;
