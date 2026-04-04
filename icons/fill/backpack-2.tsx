import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack2({
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
          d="M7.75 2.5C7.61221 2.5 7.5 2.61221 7.5 2.75V4.707C7.5 5.12121 7.16421 5.457 6.75 5.457C6.33579 5.457 6 5.12121 6 4.707V2.75C6 1.78379 6.78379 1 7.75 1H10.25C11.2162 1 12 1.78379 12 2.75V4.707C12 5.12121 11.6642 5.457 11.25 5.457C10.8358 5.457 10.5 5.12121 10.5 4.707V2.75C10.5 2.61221 10.3878 2.5 10.25 2.5H7.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M15.75 4L2.25 4C1.836 4 1.5 4.336 1.5 4.75V8.25C1.5 9.767 2.733 11 4.25 11H6V9.75C6 9.336 6.336 9 6.75 9C7.164 9 7.5 9.336 7.5 9.75V11H10.5V9.75C10.5 9.336 10.836 9 11.25 9C11.664 9 12 9.336 12 9.75V11H13.75C15.267 11 16.5 9.767 16.5 8.25V4.75C16.5 4.336 16.164 4 15.75 4Z"
          fill={fill}
        />
        <path
          d="M10.5 12.5H7.5V13.25C7.5 13.6642 7.16421 14 6.75 14C6.33579 14 6 13.6642 6 13.25V12.5H4.25C3.62632 12.5 3.03381 12.3653 2.5 12.1235V14.25C2.5 15.7692 3.73079 17 5.25 17H12.75C14.2692 17 15.5 15.7692 15.5 14.25V12.1235C14.9662 12.3653 14.3737 12.5 13.75 12.5H12V13.25C12 13.6642 11.6642 14 11.25 14C10.8358 14 10.5 13.6642 10.5 13.25V12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Backpack2;
