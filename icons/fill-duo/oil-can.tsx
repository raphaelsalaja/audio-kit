import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OilCan({
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
          d="M16.977 7.052C17.297 6.926 17.66 7.034 17.86 7.314C18.06 7.593 18.045 7.972 17.823 8.234L12.922 14.026C12.398 14.645 11.633 15 10.822 15H5.75C4.319 15 3.129 13.898 3 12.5V8.5V7L9.662 7C10.297 7 10.883 7.345 11.192 7.9L11.838 9.063L16.977 7.052Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 4.5H6V5.25C6 5.664 6.336 6 6.75 6C7.164 6 7.5 5.664 7.5 5.25V4.5H9.25C9.664 4.5 10 4.164 10 3.75C10 3.336 9.664 3 9.25 3H4.25C3.836 3 3.5 3.336 3.5 3.75C3.5 4.164 3.836 4.5 4.25 4.5Z"
          fill={fill}
        />
        <path
          d="M3 7H1.75C0.783786 7 0 7.78379 0 8.75V9.75C0 11.2692 1.23079 12.5 2.75 12.5L3 12.5V11H2.75C2.05921 11 1.5 10.4408 1.5 9.75V8.75C1.5 8.61221 1.61221 8.5 1.75 8.5H3V7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OilCan;
