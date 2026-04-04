import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heading6({
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
          d="M1.75 4C2.16421 4 2.5 4.33579 2.5 4.75V8.25H7V4.75C7 4.33579 7.33579 4 7.75 4C8.16421 4 8.5 4.33579 8.5 4.75V13.25C8.5 13.6642 8.16421 14 7.75 14C7.33579 14 7 13.6642 7 13.25V9.75H2.5V13.25C2.5 13.6642 2.16421 14 1.75 14C1.33579 14 1 13.6642 1 13.25V4.75C1 4.33579 1.33579 4 1.75 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.7667 7.45865C12.2662 6.30621 13.414 5.5 14.75 5.5H15.25C15.6642 5.5 16 5.16421 16 4.75C16 4.33579 15.6642 4 15.25 4H14.75C12.1267 4 10 6.12669 10 8.75V10.5C10 12.433 11.567 14 13.5 14C15.433 14 17 12.433 17 10.5C17 8.56701 15.433 7 13.5 7C12.8694 7 12.2777 7.16678 11.7667 7.45865ZM11.5 10.5C11.5 11.6046 12.3954 12.5 13.5 12.5C14.6046 12.5 15.5 11.6046 15.5 10.5C15.5 9.39543 14.6046 8.5 13.5 8.5C12.3954 8.5 11.5 9.39543 11.5 10.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Heading6;
