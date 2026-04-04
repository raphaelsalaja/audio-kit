import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseArrowDown({
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
          d="M15.72 13.719L14.5 14.939V11.75C14.5 11.336 14.164 11 13.75 11C13.336 11 13 11.336 13 11.75V14.939L11.78 13.719C11.487 13.426 11.012 13.426 10.719 13.719C10.426 14.012 10.426 14.487 10.719 14.78L13.219 17.28C13.365 17.426 13.557 17.5 13.749 17.5C13.941 17.5 14.133 17.427 14.279 17.28L16.779 14.78C17.072 14.487 17.072 14.012 16.779 13.719C16.486 13.426 16.011 13.426 15.718 13.719H15.72Z"
          fill={secondaryfill}
        />
        <path
          d="M11.75 5.5C11.336 5.5 11 5.164 11 4.75V2.25C11 2.112 10.888 2 10.75 2H7.25C7.112 2 7 2.112 7 2.25V4.75C7 5.164 6.664 5.5 6.25 5.5C5.836 5.5 5.5 5.164 5.5 4.75V2.25C5.5 1.285 6.285 0.5 7.25 0.5H10.75C11.715 0.5 12.5 1.285 12.5 2.25V4.75C12.5 5.164 12.164 5.5 11.75 5.5Z"
          fill={fill}
        />
        <path
          d="M9.81767 16L9.65833 15.8407C8.77954 14.9619 8.77954 13.5371 9.65833 12.6583C10.1615 12.1551 10.8438 11.9401 11.5 12.0132V11.75C11.5 10.5076 12.5076 9.5 13.75 9.5C14.9924 9.5 16 10.5076 16 11.75V12.0129C16.3357 11.9758 16.6782 12.0142 17 12.1279V6.75C17 5.233 15.767 4 14.25 4H3.75C2.233 4 1 5.233 1 6.75V13.25C1 14.767 2.233 16 3.75 16H9.81767Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitcaseArrowDown;
