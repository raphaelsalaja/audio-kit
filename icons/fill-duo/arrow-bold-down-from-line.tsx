import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldDownFromLine({
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
          d="M6.75 2.5H11.25C11.664 2.5 12 2.164 12 1.75C12 1.336 11.664 1 11.25 1H6.75C6.336 1 6 1.336 6 1.75C6 2.164 6.336 2.5 6.75 2.5Z"
          fill={fill}
        />
        <path
          d="M13.463 9H12V5.75C12 4.785 11.215 4 10.25 4H7.75001C6.78501 4 6.00001 4.785 6.00001 5.75V9H4.537C4.053 9 3.62101 9.271 3.41101 9.707C3.20101 10.144 3.25802 10.65 3.55902 11.028L8.02202 16.634C8.26102 16.933 8.61701 17.105 9.00001 17.105C9.38301 17.105 9.73901 16.933 9.97801 16.634L14.441 11.028C14.742 10.65 14.799 10.143 14.589 9.707C14.379 9.271 13.947 9 13.463 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldDownFromLine;
