import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ExpandWide({
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
          d="M16.25 7.5C15.836 7.5 15.5 7.164 15.5 6.75V4.75C15.5 4.061 14.939 3.5 14.25 3.5H12.25C11.836 3.5 11.5 3.164 11.5 2.75C11.5 2.336 11.836 2 12.25 2H14.25C15.767 2 17 3.233 17 4.75V6.75C17 7.164 16.664 7.5 16.25 7.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.75 16H3.75C2.233 16 1 14.767 1 13.25V11.25C1 10.836 1.336 10.5 1.75 10.5C2.164 10.5 2.5 10.836 2.5 11.25V13.25C2.5 13.939 3.061 14.5 3.75 14.5H5.75C6.164 14.5 6.5 14.836 6.5 15.25C6.5 15.664 6.164 16 5.75 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M1.75 7.5C1.336 7.5 1 7.164 1 6.75V4.75C1 3.233 2.233 2 3.75 2H5.75C6.164 2 6.5 2.336 6.5 2.75C6.5 3.164 6.164 3.5 5.75 3.5H3.75C3.061 3.5 2.5 4.061 2.5 4.75V6.75C2.5 7.164 2.164 7.5 1.75 7.5Z"
          fill={fill}
        />
        <path
          d="M14.25 16H12.25C11.836 16 11.5 15.664 11.5 15.25C11.5 14.836 11.836 14.5 12.25 14.5H14.25C14.939 14.5 15.5 13.939 15.5 13.25V11.25C15.5 10.836 15.836 10.5 16.25 10.5C16.664 10.5 17 10.836 17 11.25V13.25C17 14.767 15.767 16 14.25 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ExpandWide;
