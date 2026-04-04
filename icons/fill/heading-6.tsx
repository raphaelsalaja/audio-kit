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
          d="M7.75 4C7.336 4 7 4.336 7 4.75V8.25H2.5V4.75C2.5 4.336 2.164 4 1.75 4C1.336 4 1 4.336 1 4.75V13.25C1 13.664 1.336 14 1.75 14C2.164 14 2.5 13.664 2.5 13.25V9.75H7V13.25C7 13.664 7.336 14 7.75 14C8.164 14 8.5 13.664 8.5 13.25V4.75C8.5 4.336 8.164 4 7.75 4Z"
          fill={fill}
        />
        <path
          d="M14.75 5.5C12.9551 5.5 11.5 6.95511 11.5 8.75V10.5C11.5 10.9142 11.1642 11.25 10.75 11.25C10.3358 11.25 10 10.9142 10 10.5V8.75C10 6.12669 12.1267 4 14.75 4H15.25C15.6642 4 16 4.33579 16 4.75C16 5.16421 15.6642 5.5 15.25 5.5H14.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M10 10.5C10 8.56701 11.567 7 13.5 7C15.433 7 17 8.56701 17 10.5C17 12.433 15.433 14 13.5 14C11.567 14 10 12.433 10 10.5ZM13.5 8.5C12.3954 8.5 11.5 9.39543 11.5 10.5C11.5 11.6046 12.3954 12.5 13.5 12.5C14.6046 12.5 15.5 11.6046 15.5 10.5C15.5 9.39543 14.6046 8.5 13.5 8.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Heading6;
