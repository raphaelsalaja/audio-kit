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
          d="M8.25 1H3.75C2.231 1 1 2.231 1 3.75V8.25C1 9.769 2.231 11 3.75 11H8.25C9.769 11 11 9.769 11 8.25V3.75C11 2.231 9.769 1 8.25 1Z"
          fill={fill}
        />
        <path
          d="M11.25 14H6.5C6.0859 14 5.75 13.6641 5.75 13.25C5.75 12.8359 6.0859 12.5 6.5 12.5H11.25C11.9395 12.5 12.5 11.9395 12.5 11.25V6.5C12.5 6.0859 12.8359 5.75 13.25 5.75C13.6641 5.75 14 6.0859 14 6.5V11.25C14 12.7666 12.7666 14 11.25 14Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25 17H9.5C9.0859 17 8.75 16.6641 8.75 16.25C8.75 15.8359 9.0859 15.5 9.5 15.5H14.25C14.9395 15.5 15.5 14.9395 15.5 14.25V9.5C15.5 9.0859 15.8359 8.75 16.25 8.75C16.6641 8.75 17 9.0859 17 9.5V14.25C17 15.7666 15.7666 17 14.25 17Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Copies3;
