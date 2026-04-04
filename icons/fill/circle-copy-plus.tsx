import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCopyPlus({
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
          d="M10.75 4.5C7.304 4.5 4.5 7.304 4.5 10.75C4.5 14.196 7.304 17 10.75 17C14.196 17 17 14.196 17 10.75C17 7.304 14.196 4.5 10.75 4.5ZM13.25 11.5H11.5V13.25C11.5 13.664 11.164 14 10.75 14C10.336 14 10 13.664 10 13.25V11.5H8.25C7.836 11.5 7.5 11.164 7.5 10.75C7.5 10.336 7.836 10 8.25 10H10V8.25C10 7.836 10.336 7.5 10.75 7.5C11.164 7.5 11.5 7.836 11.5 8.25V10H13.25C13.664 10 14 10.336 14 10.75C14 11.164 13.664 11.5 13.25 11.5Z"
          fill={fill}
        />
        <path
          d="M2.3281 10.4131C2.0512 10.4131 1.7851 10.2593 1.6548 9.9942C1.2202 9.1104 1 8.18761 1 7.25011C1 3.80381 3.8037 1.00011 7.25 1.00011C8.1885 1.00011 9.1123 1.2203 9.9951 1.6544C10.3667 1.837 10.52 2.28619 10.3369 2.65829C10.1543 3.03039 9.7056 3.18421 9.333 3.00011C8.6582 2.66861 7.957 2.50011 7.25 2.50011C4.6309 2.50011 2.5 4.63101 2.5 7.25011C2.5 7.95621 2.6685 8.65631 3.0005 9.33211C3.1836 9.70421 3.0303 10.1534 2.6587 10.336C2.5523 10.3887 2.4395 10.4131 2.3281 10.4131Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CircleCopyPlus;
