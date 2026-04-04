import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack5({
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
          d="M11.25 5C10.836 5 10.5 4.664 10.5 4.25V3C10.5 2.173 9.827 1.5 9 1.5C8.173 1.5 7.5 2.173 7.5 3V4.25C7.5 4.664 7.164 5 6.75 5C6.336 5 6 4.664 6 4.25V3C6 1.346 7.346 0 9 0C10.654 0 12 1.346 12 3V4.25C12 4.664 11.664 5 11.25 5Z"
          fill={secondaryfill}
        />
        <path
          d="M12.25 3.5H5.75C4.233 3.5 3 4.733 3 6.25V8.25C3 9.767 4.233 11 5.75 11H6V9.75C6 9.336 6.336 9 6.75 9C7.164 9 7.5 9.336 7.5 9.75V11H10.5V9.75C10.5 9.336 10.836 9 11.25 9C11.664 9 12 9.336 12 9.75V11H12.25C13.767 11 15 9.767 15 8.25V6.25C15 4.733 13.767 3.5 12.25 3.5Z"
          fill={fill}
        />
        <path
          d="M10.5 12.5H7.5V13.25C7.5 13.6642 7.16421 14 6.75 14C6.33579 14 6 13.6642 6 13.25V12.5H5.75C3.68257 12.5 1.95768 11.0202 1.57783 9.06297C1.21565 9.52871 1 10.1141 1 10.75V14.25C1 15.7692 2.23079 17 3.75 17H14.25C15.7692 17 17 15.7692 17 14.25V10.75C17 10.1141 16.7844 9.52871 16.4222 9.06297C16.0423 11.0202 14.3174 12.5 12.25 12.5H12V13.25C12 13.6642 11.6642 14 11.25 14C10.8358 14 10.5 13.6642 10.5 13.25V12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Backpack5;
