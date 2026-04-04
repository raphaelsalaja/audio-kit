import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hearts2({
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
          d="M7.13721 17C6.73341 17 6.34081 16.833 6.06101 16.5415L1.98921 12.3101C0.624916 10.8731 0.683516 8.5987 2.11621 7.2364C3.53121 5.8912 5.76811 5.9322 7.13671 7.3145C7.62991 6.813 8.26561 6.4659 8.98052 6.3213C10.0869 6.0957 11.2242 6.4063 12.0967 7.1709C12.605 7.6172 12.98 8.2217 13.1519 8.8735C13.4776 10.1132 13.1553 11.396 12.2896 12.3066L12.2867 12.31L8.21351 16.5419C7.93421 16.8329 7.54151 17 7.13721 17Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.2757 9.90126C13.2823 9.56121 13.2418 9.21572 13.1519 8.8735C12.98 8.2217 12.605 7.6172 12.0967 7.1709C11.2242 6.4063 10.0869 6.0957 8.98052 6.3213C8.26561 6.4659 7.62991 6.813 7.13671 7.3145C6.58242 6.75466 5.8857 6.41484 5.15884 6.29801C4.40425 4.90568 4.64081 3.12658 5.83991 1.9864C7.25491 0.641203 9.49181 0.682205 10.8604 2.0645C11.3536 1.563 11.9893 1.2159 12.7042 1.0713C13.8106 0.845703 14.9479 1.1563 15.8204 1.9209C16.3287 2.3672 16.7037 2.9717 16.8756 3.6235C17.2013 4.8632 16.879 6.14601 16.0133 7.05661L16.0104 7.06L13.2757 9.90126Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Hearts2;
