import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardReader({
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
          d="M5.75 12.25H3.75C2.645 12.25 1.75 11.355 1.75 10.25V3.75C1.75 2.645 2.645 1.75 3.75 1.75H14.25C15.355 1.75 16.25 2.645 16.25 3.75V10.25C16.25 11.355 15.355 12.25 14.25 12.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 5.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.068 9.25H6.93201C6.27901 9.25 5.75 9.77901 5.75 10.432V14.568C5.75 15.221 6.27901 15.75 6.93201 15.75H11.068C11.721 15.75 12.25 15.221 12.25 14.568V10.432C12.25 9.77901 11.721 9.25 11.068 9.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.83331 11.5H8.1666C8.0746 11.5 7.99991 11.5747 7.99991 11.6667V13.3334C7.99991 13.4254 8.0746 13.5001 8.1666 13.5001H9.83331C9.92531 13.5001 10 13.4254 10 13.3334V11.6667C10 11.5747 9.92531 11.5 9.83331 11.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M9 15.75V17.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CreditCardReader;
