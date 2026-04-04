import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack({
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
          d="M11.25 4.5C10.836 4.5 10.5 4.164 10.5 3.75V3C10.5 2.173 9.827 1.5 9 1.5C8.173 1.5 7.5 2.173 7.5 3V3.75C7.5 4.164 7.164 4.5 6.75 4.5C6.336 4.5 6 4.164 6 3.75V3C6 1.346 7.346 0 9 0C10.654 0 12 1.346 12 3V3.75C12 4.164 11.664 4.5 11.25 4.5Z"
          fill={secondaryfill}
        />
        <path d="M11 12.5H7V17H11V12.5Z" fill={secondaryfill} />
        <path
          d="M9.75 9.5H8.25C7.561 9.5 7 10.061 7 10.75V11H11V10.75C11 10.061 10.439 9.5 9.75 9.5Z"
          fill={secondaryfill}
        />
        <path
          d="M7.25 3C4.62679 3 2.5 5.12679 2.5 7.75V14.25C2.5 15.7692 3.73079 17 5.25 17H5.5V10.75C5.5 9.23079 6.73079 8 8.25 8H9.75C11.2692 8 12.5 9.23079 12.5 10.75V17H12.75C14.2692 17 15.5 15.7692 15.5 14.25V7.75C15.5 5.12679 13.3732 3 10.75 3H7.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Backpack;
