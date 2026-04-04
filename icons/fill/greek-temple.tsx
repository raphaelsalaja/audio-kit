import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GreekTemple({
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
          d="M15.25 14.5H15V10.25C15 9.836 14.664 9.5 14.25 9.5C13.836 9.5 13.5 9.836 13.5 10.25V14.5H11.5V10.25C11.5 9.836 11.164 9.5 10.75 9.5C10.336 9.5 10 9.836 10 10.25V14.5H8V10.25C8 9.836 7.664 9.5 7.25 9.5C6.836 9.5 6.5 9.836 6.5 10.25V14.5H4.5V10.25C4.5 9.836 4.164 9.5 3.75 9.5C3.336 9.5 3 9.836 3 10.25V14.5H2.75C2.336 14.5 2 14.836 2 15.25C2 15.664 2.336 16 2.75 16H15.25C15.664 16 16 15.664 16 15.25C16 14.836 15.664 14.5 15.25 14.5Z"
          fill={secondaryfill}
        />
        <path
          d="M15.105 4.309L9.855 1.36899C9.328 1.07299 8.673 1.07399 8.145 1.36899L2.894 4.31C2.342 4.62 2 5.20501 2 5.83601V6.25001C2 7.21501 2.785 8.00001 3.75 8.00001H14.25C15.215 8.00001 16 7.21501 16 6.25001V5.83601C16 5.20401 15.658 4.619 15.105 4.309ZM9 5.75001C8.448 5.75001 8 5.30201 8 4.75001C8 4.19801 8.448 3.75001 9 3.75001C9.552 3.75001 10 4.19801 10 4.75001C10 5.30201 9.552 5.75001 9 5.75001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GreekTemple;
