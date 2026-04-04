import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OilCanDrop({
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
          d="M16.451 13.16C16.282 12.982 16.108 12.799 15.946 12.595C15.85 12.476 15.65 12.476 15.554 12.595C15.392 12.799 15.218 12.982 15.049 13.16C14.533 13.703 14 14.265 14 15.228C14 16.205 14.785 17 15.75 17C16.715 17 17.5 16.205 17.5 15.228C17.5 14.265 16.967 13.703 16.451 13.16Z"
          fill={fill}
        />
        <path
          d="M16.977 6.052C17.297 5.926 17.66 6.034 17.86 6.314C18.06 6.593 18.045 6.972 17.823 7.234L12.922 13.026C12.398 13.645 11.633 14 10.822 14H5.75C4.319 14 3.129 12.898 3 11.5V7.5V6L9.662 6C10.297 6 10.883 6.345 11.192 6.9L11.838 8.063L16.977 6.052Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 3.5H6V4.25C6 4.664 6.336 5 6.75 5C7.164 5 7.5 4.664 7.5 4.25V3.5H9.25C9.664 3.5 10 3.164 10 2.75C10 2.336 9.664 2 9.25 2H4.25C3.836 2 3.5 2.336 3.5 2.75C3.5 3.164 3.836 3.5 4.25 3.5Z"
          fill={fill}
        />
        <path
          d="M3 6H1.75C0.783786 6 0 6.78379 0 7.75V8.75C0 10.2692 1.23079 11.5 2.75 11.5L3 11.5V10H2.75C2.05921 10 1.5 9.44079 1.5 8.75V7.75C1.5 7.61221 1.61221 7.5 1.75 7.5H3V6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OilCanDrop;
