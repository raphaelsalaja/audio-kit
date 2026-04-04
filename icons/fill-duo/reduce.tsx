import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Reduce({
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
          d="M15.25 6H13.25C12.561 6 12 5.439 12 4.75V2.75C12 2.336 11.664 2 11.25 2C10.836 2 10.5 2.336 10.5 2.75V4.75C10.5 6.267 11.733 7.5 13.25 7.5H15.25C15.664 7.5 16 7.164 16 6.75C16 6.336 15.664 6 15.25 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.75 10.5H2.75C2.336 10.5 2 10.836 2 11.25C2 11.664 2.336 12 2.75 12H4.75C5.439 12 6 12.561 6 13.25V15.25C6 15.664 6.336 16 6.75 16C7.164 16 7.5 15.664 7.5 15.25V13.25C7.5 11.733 6.267 10.5 4.75 10.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.75 2C6.336 2 6 2.336 6 2.75V4.75C6 5.439 5.439 6 4.75 6H2.75C2.336 6 2 6.336 2 6.75C2 7.164 2.336 7.5 2.75 7.5H4.75C6.267 7.5 7.5 6.267 7.5 4.75V2.75C7.5 2.336 7.164 2 6.75 2Z"
          fill={fill}
        />
        <path
          d="M15.25 10.5H13.25C11.733 10.5 10.5 11.733 10.5 13.25V15.25C10.5 15.664 10.836 16 11.25 16C11.664 16 12 15.664 12 15.25V13.25C12 12.561 12.561 12 13.25 12H15.25C15.664 12 16 11.664 16 11.25C16 10.836 15.664 10.5 15.25 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Reduce;
