import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copies3({
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
          d="M11.2501 4H6.75012C5.23134 4 4.00012 5.23122 4.00012 6.75V11.25C4.00012 12.7688 5.23134 14 6.75012 14H11.2501C12.7689 14 14.0001 12.7688 14.0001 11.25V6.75C14.0001 5.23122 12.7689 4 11.2501 4Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 7H14.0001V11.25C14.0001 12.7666 12.7667 14 11.2501 14H7.00012V14.25C7.00012 15.7666 8.23352 17 9.75012 17H14.2501C15.7667 17 17.0001 15.7666 17.0001 14.25V9.75C17.0001 8.2334 15.7667 7 14.2501 7Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M8.25011 1H3.75012C2.23134 1 1.00012 2.23122 1.00012 3.75V8.25C1.00012 9.76878 2.23134 11 3.75012 11H8.25011C9.76889 11 11.0001 9.76878 11.0001 8.25V3.75C11.0001 2.23122 9.76889 1 8.25011 1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Copies3;
