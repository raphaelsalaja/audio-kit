import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDoorIn2({
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
          d="M9.25 14H2.75C1.7852 14 1 13.2148 1 12.25V3.75C1 2.7852 1.7852 2 2.75 2H9.25C10.2148 2 11 2.7852 11 3.75V12.25C11 13.2148 10.2148 14 9.25 14Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.2793 5.84381L2.98541 2.7212C2.60261 2.4429 2.10359 2.4028 1.68359 2.6177C1.26169 2.8321 1 3.25881 1 3.73201V12.7398C1 13.2984 1.2695 13.8277 1.7207 14.1553L6.01459 17.2788C6.23339 17.438 6.49019 17.519 6.74899 17.519C6.94239 17.519 7.13671 17.4736 7.31741 17.3818C7.73831 17.1674 8 16.7407 8 16.268V7.2587C8 6.7006 7.7305 6.17141 7.2793 5.84381Z"
          fill={fill}
        />
        <path
          d="M16.25 7.50002H12.061L13.531 6.03001C13.824 5.73701 13.824 5.26202 13.531 4.96902C13.238 4.67602 12.763 4.67602 12.47 4.96902L9.71999 7.71902C9.42699 8.01202 9.42699 8.48701 9.71999 8.78001L12.47 11.53C12.616 11.676 12.808 11.75 13 11.75C13.192 11.75 13.384 11.677 13.53 11.53C13.823 11.237 13.823 10.762 13.53 10.469L12.06 8.99902H16.249C16.663 8.99902 16.999 8.66302 16.999 8.24902C16.999 7.83502 16.663 7.49902 16.249 7.49902L16.25 7.50002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDoorIn2;
