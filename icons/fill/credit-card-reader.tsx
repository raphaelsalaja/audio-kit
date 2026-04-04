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
          d="M17 5V3.75C17 2.233 15.767 1 14.25 1H3.75C2.233 1 1 2.233 1 3.75V5H17Z"
          fill={fill}
        />
        <path
          d="M1 6.5L1 10.25C1 11.767 2.233 13 3.75 13H6V9.5H12V13H14.25C15.767 13 17 11.767 17 10.25V6.5H1Z"
          fill={fill}
        />
        <path
          d="M11.068 8.5H6.93201C5.86701 8.5 5 9.36701 5 10.432V14.569C5 15.634 5.86701 16.501 6.93201 16.501H8.25V17.251C8.25 17.665 8.586 18.001 9 18.001C9.414 18.001 9.75 17.665 9.75 17.251V16.501H11.068C12.133 16.501 13 15.634 13 14.569V10.432C13 9.36701 12.133 8.5 11.068 8.5ZM11.5 14.568C11.5 14.806 11.306 15 11.068 15H6.93201C6.69401 15 6.5 14.806 6.5 14.568V10.431C6.5 10.193 6.69401 9.99899 6.93201 9.99899H11.069C11.307 9.99899 11.501 10.193 11.501 10.431L11.5 14.568Z"
          fill={secondaryfill}
        />
        <path
          d="M9.83331 11.5H8.1666C8.0746 11.5 7.99991 11.5747 7.99991 11.6667V13.3334C7.99991 13.4254 8.0746 13.5001 8.1666 13.5001H9.83331C9.92531 13.5001 10 13.4254 10 13.3334V11.6667C10 11.5747 9.92531 11.5 9.83331 11.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CreditCardReader;
