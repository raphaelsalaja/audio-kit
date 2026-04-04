import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDoorOut2({
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
          d="M7.2793 5.84381L2.9854 2.7212C2.6026 2.4429 2.1036 2.4028 1.6836 2.6177C1.2617 2.8321 1 3.25881 1 3.73201V12.7398C1 13.2984 1.2695 13.8277 1.7207 14.1553L6.0146 17.2788C6.2334 17.438 6.4902 17.519 6.749 17.519C6.9424 17.519 7.1367 17.4736 7.3174 17.3818C7.7383 17.1674 8 16.7407 8 16.268V7.2587C8 6.7006 7.7305 6.17141 7.2793 5.84381Z"
          fill={fill}
        />
        <path
          d="M14.03 4.96999C13.737 4.67699 13.262 4.67699 12.969 4.96999C12.676 5.26299 12.676 5.73799 12.969 6.03099L14.439 7.50099H10.25C9.836 7.50099 9.5 7.83699 9.5 8.25099C9.5 8.66499 9.836 9.00099 10.25 9.00099H14.439L12.969 10.471C12.676 10.764 12.676 11.239 12.969 11.532C13.115 11.678 13.307 11.752 13.499 11.752C13.691 11.752 13.883 11.679 14.029 11.532L16.779 8.78199C17.072 8.48899 17.072 8.01399 16.779 7.72099L14.029 4.97099L14.03 4.96999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDoorOut2;
