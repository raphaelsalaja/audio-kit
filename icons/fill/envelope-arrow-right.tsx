import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeArrowRight({
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
          d="M17.779 13.221L15.28 10.72C14.987 10.427 14.512 10.427 14.219 10.72C13.926 11.013 13.926 11.488 14.219 11.781L15.439 13.001H12.25C11.836 13.001 11.5 13.337 11.5 13.751C11.5 14.165 11.836 14.501 12.25 14.501H15.439L14.219 15.721C13.926 16.014 13.926 16.489 14.219 16.782C14.365 16.928 14.557 17.002 14.749 17.002C14.941 17.002 15.133 16.929 15.279 16.782L17.779 14.282C18.072 13.989 18.072 13.514 17.779 13.221Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 2.5C2.23054 2.5 1 3.73203 1 5.25V12.75C1 14.268 2.23054 15.5 3.75 15.5H9.42719C9.8414 15.5 10.1772 15.1642 10.1772 14.75C10.1772 14.3358 9.8414 14 9.42719 14H3.75C3.061 14 2.5 13.439 2.5 12.75V6.521L8.154 9.641C8.419 9.787 8.71 9.86 9 9.86C9.29 9.86 9.581 9.787 9.846 9.641L15.5 6.521V8.6785C15.5 9.0925 15.836 9.4285 16.25 9.4285C16.664 9.4285 17 9.0925 17 8.6785V5.25C17 3.73203 15.7695 2.5 14.25 2.5H3.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeArrowRight;
