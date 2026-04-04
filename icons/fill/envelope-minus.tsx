import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeMinus({
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
          d="M16.25 13H11.25C10.836 13 10.5 13.336 10.5 13.75C10.5 14.164 10.836 14.5 11.25 14.5H16.25C16.664 14.5 17 14.164 17 13.75C17 13.336 16.664 13 16.25 13Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 2.5C2.23054 2.5 1 3.73203 1 5.25V12.75C1 14.268 2.23054 15.5 3.75 15.5H8.4337C8.84791 15.5 9.1837 15.1642 9.1837 14.75C9.1837 14.3358 8.84791 14 8.4337 14H3.75C3.061 14 2.5 13.439 2.5 12.75V6.521L8.154 9.641C8.419 9.787 8.71 9.86 9 9.86C9.29 9.86 9.581 9.787 9.846 9.641L15.5 6.521V10.75C15.5 11.1642 15.8358 11.5 16.25 11.5C16.6642 11.5 17 11.1642 17 10.75V5.25C17 3.73203 15.7695 2.5 14.25 2.5H3.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeMinus;
