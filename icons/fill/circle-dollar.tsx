import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDollar({
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
          d="M9 1C4.58168 1 1 4.58179 1 9C1 13.4182 4.58168 17 9 17C13.4183 17 17 13.4182 17 9C17 4.58179 13.4183 1 9 1ZM9.7499 5.2499C9.7499 4.83569 9.41411 4.4999 8.9999 4.4999C8.58569 4.4999 8.2499 4.83569 8.2499 5.2499V5.50371C7.13452 5.56836 6.25 6.49332 6.25 7.6249C6.25 8.79813 7.201 9.7501 8.3748 9.7501H9.6251C9.97019 9.7501 10.2499 10.0298 10.2499 10.3749C10.2499 10.7201 9.97012 10.9998 9.6251 10.9998H7.2499C6.83569 10.9998 6.4999 11.3356 6.4999 11.7498C6.4999 12.164 6.83569 12.4998 7.2499 12.4998H8.2499V12.7499C8.2499 13.1641 8.58569 13.4999 8.9999 13.4999C9.41411 13.4999 9.7499 13.1641 9.7499 12.7499V12.4962C10.8654 12.4316 11.7499 11.5065 11.7499 10.3749C11.7499 9.20139 10.7986 8.2501 9.6251 8.2501H8.3748C8.03 8.2501 7.75 7.97027 7.75 7.6249C7.75 7.27981 8.02971 7.0001 8.3748 7.0001H10.75C11.1642 7.0001 11.5 6.66431 11.5 6.2501C11.5 5.83589 11.1642 5.5001 10.75 5.5001H9.7499V5.2499Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CircleDollar;
