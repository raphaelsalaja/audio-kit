import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Burger2({
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
          d="M16.078 6.81C15.7 5.364 14.349 2 10 2H8C3.651 2 2.301 5.364 1.922 6.81C1.863 7.035 1.912 7.274 2.054 7.458C2.196 7.642 2.415 7.75 2.648 7.75H15.352C15.584 7.75 15.804 7.642 15.946 7.458C16.088 7.274 16.136 7.035 16.078 6.81Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.75 5.75C11.164 5.75 11.5 5.414 11.5 5C11.5 4.586 11.164 4.25 10.75 4.25C10.336 4.25 10 4.586 10 5C10 5.414 10.336 5.75 10.75 5.75Z"
          fill={fill}
        />
        <path
          d="M7.25 6.25C7.664 6.25 8 5.914 8 5.5C8 5.086 7.664 4.75 7.25 4.75C6.836 4.75 6.5 5.086 6.5 5.5C6.5 5.914 6.836 6.25 7.25 6.25Z"
          fill={fill}
        />
        <path
          d="M15.25 9H13.5L11.89 11.012C11.69 11.262 11.309 11.262 11.109 11.012L9.499 9H2.75C1.785 9 1 9.785 1 10.75C1 11.715 1.785 12.5 2.75 12.5H15.25C16.215 12.5 17 11.715 17 10.75C17 9.785 16.215 9 15.25 9Z"
          fill={fill}
        />
        <path
          d="M15.7044 12.4402L15.6614 13.3104C15.6476 13.5904 15.5937 13.9531 15.3909 14.2943C14.9017 15.1173 13.844 16 11.75 16H6.25C4.15702 16 3.09931 15.1181 2.60974 14.2954C2.40661 13.954 2.35263 13.591 2.33875 13.3107L2.29564 12.4402C2.44058 12.4792 2.59291 12.5 2.75 12.5H15.25C15.4071 12.5 15.5595 12.4792 15.7044 12.4402Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Burger2;
