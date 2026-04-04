import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InputSearch({
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
          d="M8.50009 12C8.50009 9.5186 10.5187 7.5 13.0001 7.5C14.7523 7.5 16.2572 8.51659 17.0001 9.98169V6.75C17.0001 5.2334 15.7667 4 14.2501 4H3.75009C2.23349 4 1.00009 5.2334 1.00009 6.75V11.25C1.00009 12.7666 2.23349 14 3.75009 14H8.99019C8.68689 13.3948 8.50009 12.7217 8.50009 12Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.7804 14.7197L15.5751 13.5144C15.8386 13.0681 16.0001 12.5547 16.0001 12C16.0001 10.3457 14.6544 9 13.0001 9C11.3458 9 10.0001 10.3457 10.0001 12C10.0001 13.6543 11.3458 15 13.0001 15C13.5548 15 14.0683 14.8384 14.5145 14.575L15.7198 15.7803C15.8663 15.9268 16.0582 16 16.2501 16C16.442 16 16.6339 15.9268 16.7804 15.7803C17.0734 15.4873 17.0734 15.0126 16.7804 14.7197ZM11.5001 12C11.5001 11.1729 12.173 10.5 13.0001 10.5C13.8272 10.5 14.5001 11.1729 14.5001 12C14.5001 12.4126 14.3325 12.7866 14.0621 13.0579C14.0614 13.0586 14.0604 13.0589 14.0597 13.0596C14.059 13.0603 14.0588 13.0613 14.0581 13.062C13.7867 13.3325 13.4127 13.5 13.0002 13.5C12.1731 13.5 11.5001 12.8271 11.5001 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default InputSearch;
