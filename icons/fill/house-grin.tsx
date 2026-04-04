import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseGrin({
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
          d="M7.94127 1.3628C8.56694 0.88743 9.4333 0.886554 10.0591 1.36311L15.3088 5.35286C15.7448 5.68397 16 6.20006 16 6.74598V14.25C16 15.7692 14.7692 17 13.25 17H4.75C3.23079 17 2 15.7692 2 14.25V6.74598C2 6.19865 2.2559 5.68344 2.69155 5.35258L7.94127 1.3628ZM7.5 10C7.5 10.5523 7.052 11 6.5 11C5.948 11 5.5 10.5523 5.5 10C5.5 9.4477 5.948 9 6.5 9C7.052 9 7.5 9.4477 7.5 10ZM11.5 11C12.052 11 12.5 10.5523 12.5 10C12.5 9.4477 12.052 9 11.5 9C10.948 9 10.5 9.4477 10.5 10C10.5 10.5523 10.948 11 11.5 11ZM10.1666 11.5H7.83334C7.51134 11.5 7.24994 11.7613 7.24994 12.0833C7.24994 13.0493 8.03394 13.8333 8.99994 13.8333C9.96594 13.8333 10.7499 13.0493 10.7499 12.0833C10.7499 11.7613 10.4886 11.5 10.1666 11.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HouseGrin;
