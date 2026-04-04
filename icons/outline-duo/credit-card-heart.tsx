import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardHeart({
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
          d="M12.5 8.0015V7.25H1.75V12.25C1.75 13.355 2.645 14.25 3.75 14.25H8.67059C8.82939 14.25 8.89959 14.0497 8.85999 13.9466C8.63619 13.3653 8.49911 12.722 8.49911 12.0132C8.49321 9.8198 10.2862 8.0215 12.5 8.0015Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.781 15.947C13.919 16.018 14.08 16.018 14.218 15.947C14.947 15.573 17.249 14.217 17.249 12.013C17.253 11.045 16.458 10.256 15.472 10.25C14.879 10.257 14.328 10.551 13.999 11.036C13.67 10.552 13.118 10.258 12.526 10.25C11.541 10.256 10.746 11.044 10.749 12.013C10.749 14.218 13.052 15.573 13.78 15.947H13.781Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 7.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 11.25H7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 15.947C13.919 16.018 14.08 16.018 14.218 15.947C14.947 15.573 17.249 14.217 17.249 12.013C17.253 11.045 16.458 10.256 15.472 10.25C14.879 10.257 14.328 10.551 13.999 11.036C13.67 10.552 13.118 10.258 12.526 10.25C11.541 10.256 10.746 11.044 10.749 12.013C10.749 14.218 13.052 15.573 13.78 15.947H13.781Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H8.17651"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CreditCardHeart;
