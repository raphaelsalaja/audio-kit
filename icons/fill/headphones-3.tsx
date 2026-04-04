import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Headphones3({
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
          d="M5.5 8.5C4.397 8.5 3.5 9.397 3.5 10.5V14.5C3.5 15.603 4.397 16.5 5.5 16.5C6.603 16.5 7.5 15.603 7.5 14.5V10.5C7.5 9.397 6.603 8.5 5.5 8.5Z"
          fill={fill}
        />
        <path
          d="M10.25 1.5H7.75C4.028 1.5 1 4.528 1 8.25V12.75C1 13.164 1.336 13.5 1.75 13.5C2.164 13.5 2.5 13.164 2.5 12.75V8.25C2.5 5.355 4.855 3 7.75 3H10.25C13.145 3 15.5 5.355 15.5 8.25V12.75C15.5 13.164 15.836 13.5 16.25 13.5C16.664 13.5 17 13.164 17 12.75V8.25C17 4.528 13.972 1.5 10.25 1.5Z"
          fill={secondaryfill}
        />
        <path
          d="M12.5 8.5C11.397 8.5 10.5 9.397 10.5 10.5V14.5C10.5 15.603 11.397 16.5 12.5 16.5C13.603 16.5 14.5 15.603 14.5 14.5V10.5C14.5 9.397 13.603 8.5 12.5 8.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Headphones3;
