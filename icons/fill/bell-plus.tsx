import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BellPlus({
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
          d="M10.588 15.185C10.493 15.068 10.351 15 10.2 15H7.80099C7.64999 15 7.50799 15.068 7.41299 15.185C7.31799 15.302 7.28099 15.456 7.31199 15.603C7.48499 16.425 8.17999 17 9.00099 17C9.82199 17 10.517 16.425 10.69 15.603C10.721 15.456 10.683 15.302 10.588 15.185Z"
          fill={secondaryfill}
        />
        <path
          d="M15.75 12C15.061 12 14.5 11.439 14.5 10.75V8.362C14.264 8.446 14.014 8.5 13.75 8.5C12.509 8.5 11.5 7.491 11.5 6.25V6H11.25C10.009 6 9 4.991 9 3.75C9 2.509 10.009 1.5 11.25 1.5H11.278C10.583 1.182 9.813 1 9 1C5.967 1 3.5 3.467 3.5 6.5V10.75C3.5 11.439 2.939 12 2.25 12C1.836 12 1.5 12.336 1.5 12.75C1.5 13.164 1.836 13.5 2.25 13.5H9H15.75C16.164 13.5 16.5 13.164 16.5 12.75C16.5 12.336 16.164 12 15.75 12Z"
          fill={fill}
        />
        <path
          d="M16.25 3H14.5V1.25C14.5 0.836 14.164 0.5 13.75 0.5C13.336 0.5 13 0.836 13 1.25V3H11.25C10.836 3 10.5 3.336 10.5 3.75C10.5 4.164 10.836 4.5 11.25 4.5H13V6.25C13 6.664 13.336 7 13.75 7C14.164 7 14.5 6.664 14.5 6.25V4.5H16.25C16.664 4.5 17 4.164 17 3.75C17 3.336 16.664 3 16.25 3Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default BellPlus;
