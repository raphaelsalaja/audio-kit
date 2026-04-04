import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CartAlert({
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
          d="M4.12891 4.75L5.00098 10.751H10.3174V9.75C7.88445 9.75 6.35948 7.20085 7.38695 5.09084C7.5768 4.70098 4.40654 4.75103 4.12891 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 1.75L3.10101 2.088C3.49401 2.186 3.78899 2.512 3.84799 2.913L4.92731 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.72168 4.75H4.11798"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 13.25H4.75C3.9216 13.25 3.25 12.5784 3.25 11.75C3.25 10.9216 3.9216 10.25 4.75 10.25H13.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 17C4.552 17 5 16.552 5 16C5 15.448 4.552 15 4 15C3.448 15 3 15.448 3 16C3 16.552 3.448 17 4 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14 17C14.552 17 15 16.552 15 16C15 15.448 14.552 15 14 15C13.448 15 13 15.448 13 16C13 16.552 13.448 17 14 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.75 7.50001H16.183C16.9711 7.50001 17.4495 6.6308 17.0278 5.9649L14.0948 1.33391C13.7022 0.714013 12.7978 0.714013 12.4052 1.33391L9.47224 5.9649C9.05054 6.6307 9.52892 7.50001 10.317 7.50001H10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 4V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 8.5C13.6642 8.5 14 8.16421 14 7.75C14 7.33579 13.6642 7 13.25 7C12.8358 7 12.5 7.33579 12.5 7.75C12.5 8.16421 12.8358 8.5 13.25 8.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CartAlert;
