import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleUnbalanced({
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
          d="M6.33979 10.9052L4.02499 5L1.65709 10.9198C1.57799 11.1175 1.62659 11.3536 1.79139 11.4884C3.07709 12.5397 4.76489 12.5543 6.18599 11.4856C6.36179 11.3534 6.42009 11.1101 6.33979 10.9052Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M11.6602 8.40521L13.975 2.5L16.3429 8.4198C16.422 8.6175 16.3734 8.8536 16.2086 8.9884C14.9229 10.0397 13.2351 10.0543 11.814 8.9856C11.6382 8.8534 11.5799 8.61011 11.6602 8.40521Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.33979 10.9052L4.02499 5L1.65709 10.9198C1.57799 11.1175 1.62659 11.3536 1.79139 11.4884C3.07709 12.5397 4.76489 12.5543 6.18599 11.4856C6.36179 11.3534 6.42009 11.1101 6.33979 10.9052Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.6602 8.40521L13.975 2.5L16.3429 8.4198C16.422 8.6175 16.3734 8.8536 16.2086 8.9884C14.9229 10.0397 13.2351 10.0543 11.814 8.9856C11.6382 8.8534 11.5799 8.61011 11.6602 8.40521Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 1.75V15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 15.75H4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.975 2.5L4.02502 5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.25C9 14.6307 7.8807 15.75 6.5 15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.25C9 14.6307 10.1193 15.75 11.5 15.75"
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

export default ScaleUnbalanced;
