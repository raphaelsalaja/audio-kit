import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UTurnToDown({
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
          d="M11.75 16.25C11.336 16.25 11 15.914 11 15.5V6C11 4.346 9.654 3 8 3C6.346 3 5 4.346 5 6V9.75C5 10.164 4.664 10.5 4.25 10.5C3.836 10.5 3.5 10.164 3.5 9.75V6C3.5 3.519 5.519 1.5 8 1.5C10.481 1.5 12.5 3.519 12.5 6V15.5C12.5 15.914 12.164 16.25 11.75 16.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.75 16.5C11.558 16.5 11.366 16.4271 11.22 16.2801L7.71999 12.7801C7.42699 12.4871 7.42699 12.012 7.71999 11.719C8.01299 11.426 8.488 11.426 8.781 11.719L11.751 14.689L14.721 11.719C15.014 11.426 15.489 11.426 15.782 11.719C16.075 12.012 16.075 12.4871 15.782 12.7801L12.282 16.2801C12.136 16.4261 11.944 16.5 11.752 16.5H11.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UTurnToDown;
