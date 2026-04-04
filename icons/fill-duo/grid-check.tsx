import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridCheck({
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
          d="M15.1612 2.043L12.2852 5.78271L11.2803 4.7778C10.9873 4.4848 10.5127 4.4848 10.2198 4.7778C9.9269 5.0708 9.9268 5.54538 10.2198 5.83828L11.8287 7.4472C11.9698 7.5883 12.1607 7.6669 12.359 7.6669C12.3751 7.6669 12.3912 7.6664 12.4078 7.6654C12.6231 7.6512 12.8219 7.5453 12.9537 7.3739L16.3507 2.95691C16.6031 2.62881 16.5416 2.15809 16.213 1.90509C15.8854 1.65359 15.4142 1.7139 15.1612 2.043Z"
          fill={fill}
        />
        <path
          d="M6.25012 10H3.75012C2.78362 10 2.00012 10.7835 2.00012 11.75V14.25C2.00012 15.2165 2.78362 16 3.75012 16H6.25012C7.21662 16 8.00012 15.2165 8.00012 14.25V11.75C8.00012 10.7835 7.21662 10 6.25012 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.2501 10H11.7501C10.7836 10 10.0001 10.7835 10.0001 11.75V14.25C10.0001 15.2165 10.7836 16 11.7501 16H14.2501C15.2166 16 16.0001 15.2165 16.0001 14.25V11.75C16.0001 10.7835 15.2166 10 14.2501 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.25012 2H3.75012C2.78362 2 2.00012 2.7835 2.00012 3.75V6.25C2.00012 7.2165 2.78362 8 3.75012 8H6.25012C7.21662 8 8.00012 7.2165 8.00012 6.25V3.75C8.00012 2.7835 7.21662 2 6.25012 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default GridCheck;
