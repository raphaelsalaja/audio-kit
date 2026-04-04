import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bag({
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
          d="M11.75 8.5C11.336 8.5 11 8.164 11 7.75V4.5C11 3.397 10.103 2.5 9 2.5C7.897 2.5 7 3.397 7 4.5V7.75C7 8.164 6.664 8.5 6.25 8.5C5.836 8.5 5.5 8.164 5.5 7.75V4.5C5.5 2.57 7.07 1 9 1C10.93 1 12.5 2.57 12.5 4.5V7.75C12.5 8.164 12.164 8.5 11.75 8.5Z"
          fill={secondaryfill}
        />
        <path
          d="M16.4725 6.612C16.4015 5.708 15.6355 5 14.7275 5H3.27152C2.36452 5 1.59852 5.708 1.52652 6.612L1.01952 13.033C0.959522 13.795 1.22252 14.554 1.74152 15.116C2.26052 15.678 2.99652 16 3.76152 16H14.2385C15.0035 16 15.7385 15.678 16.2585 15.116C16.7785 14.554 17.0405 13.796 16.9805 13.033L16.4725 6.612ZM11 11.25C11 11.664 10.664 12 10.25 12H7.75001C7.33601 12 7.00001 11.664 7.00001 11.25V10.75C7.00001 10.336 7.33601 10 7.75001 10H10.25C10.664 10 11 10.336 11 10.75V11.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bag;
