import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CopiesPlus({
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
          d="M3.25 7C3.6641 7 4 6.6641 4 6.25C4 6.1123 4.1123 6 4.25 6H13.75C13.8877 6 14 6.1123 14 6.25C14 6.6641 14.3359 7 14.75 7C15.1641 7 15.5 6.6641 15.5 6.25C15.5 5.2852 14.7148 4.5 13.75 4.5H4.25C3.2852 4.5 2.5 5.2852 2.5 6.25C2.5 6.6641 2.8359 7 3.25 7Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 4C4.1641 4 4.5 3.6641 4.5 3.25C4.5 3.1123 4.6123 3 4.75 3H13.25C13.3877 3 13.5 3.1123 13.5 3.25C13.5 3.6641 13.8359 4 14.25 4C14.6641 4 15 3.6641 15 3.25C15 2.2852 14.2148 1.5 13.25 1.5H4.75C3.7852 1.5 3 2.2852 3 3.25C3 3.6641 3.3359 4 3.75 4Z"
          fill={secondaryfill}
        />
        <path
          d="M8 14.75C8 13.5093 9.0098 12.5 10.25 12.5H10.5V12.25C10.5 11.0093 11.5098 10 12.75 10C13.9902 10 15 11.0093 15 12.25V12.5H15.25C15.5142 12.5 15.7642 12.5542 16 12.6382V9.25C16 8.2852 15.2148 7.5 14.25 7.5H3.75C2.7852 7.5 2 8.2852 2 9.25V14.25C2 15.2148 2.7852 16 3.75 16H8.38101C8.14081 15.6421 8 15.2124 8 14.75Z"
          fill={fill}
        />
        <path
          d="M15.25 14H13.5V12.25C13.5 11.836 13.164 11.5 12.75 11.5C12.336 11.5 12 11.836 12 12.25V14H10.25C9.836 14 9.5 14.336 9.5 14.75C9.5 15.164 9.836 15.5 10.25 15.5H12V17.25C12 17.664 12.336 18 12.75 18C13.164 18 13.5 17.664 13.5 17.25V15.5H15.25C15.664 15.5 16 15.164 16 14.75C16 14.336 15.664 14 15.25 14Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CopiesPlus;
