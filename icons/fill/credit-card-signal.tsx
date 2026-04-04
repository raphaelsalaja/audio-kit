import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardSignal({
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
          d="M17 5.75C17 4.233 15.767 3 14.25 3H3.75C2.233 3 1 4.233 1 5.75V6.5H17V5.75Z"
          fill={fill}
        />
        <path
          d="M17 11H17.25C17.664 11 18 10.664 18 10.25C18 9.836 17.664 9.5 17.25 9.5H17C13.141 9.5 10 12.64 10 16.5V16.75C10 17.164 10.336 17.5 10.75 17.5C11.164 17.5 11.5 17.164 11.5 16.75V16.5C11.5 13.467 13.968 11 17 11Z"
          fill={secondaryfill}
        />
        <path
          d="M1 8H16.999C12.8237 8.00048 9.34262 11.0252 8.63243 15H3.75C2.233 15 1 13.767 1 12.25V8ZM4.25 12H7.25C7.664 12 8 11.664 8 11.25C8 10.836 7.664 10.5 7.25 10.5H4.25C3.836 10.5 3.5 10.836 3.5 11.25C3.5 11.664 3.836 12 4.25 12Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.25 12.5H17C14.794 12.5 13 14.294 13 16.5V16.75C13 17.164 13.336 17.5 13.75 17.5C14.164 17.5 14.5 17.164 14.5 16.75V16.5C14.5 15.122 15.621 14 17 14H17.25C17.664 14 18 13.664 18 13.25C18 12.836 17.664 12.5 17.25 12.5Z"
          fill={secondaryfill}
        />
        <path
          d="M17 17.5C17.552 17.5 18 17.052 18 16.5C18 15.948 17.552 15.5 17 15.5C16.448 15.5 16 15.948 16 16.5C16 17.052 16.448 17.5 17 17.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CreditCardSignal;
