import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SlidersVertical({
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
          d="M12.7501 17C12.336 17 12.0001 16.6641 12.0001 16.25V13.25C12.0001 12.8359 12.336 12.5 12.7501 12.5C13.1642 12.5 13.5001 12.8359 13.5001 13.25V16.25C13.5001 16.6641 13.1642 17 12.7501 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.7501 9.5C12.336 9.5 12.0001 9.1641 12.0001 8.75V1.75C12.0001 1.3359 12.336 1 12.7501 1C13.1642 1 13.5001 1.3359 13.5001 1.75V8.75C13.5001 9.1641 13.1642 9.5 12.7501 9.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.25012 5.5C4.83602 5.5 4.50012 5.1641 4.50012 4.75V1.75C4.50012 1.3359 4.83602 1 5.25012 1C5.66422 1 6.00012 1.3359 6.00012 1.75V4.75C6.00012 5.1641 5.66422 5.5 5.25012 5.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.25012 17C4.83602 17 4.50012 16.6641 4.50012 16.25V9.25C4.50012 8.8359 4.83602 8.5 5.25012 8.5C5.66422 8.5 6.00012 8.8359 6.00012 9.25V16.25C6.00012 16.6641 5.66422 17 5.25012 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.7501 14C14.407 14 15.7501 12.6569 15.7501 11C15.7501 9.34315 14.407 8 12.7501 8C11.0933 8 9.75012 9.34315 9.75012 11C9.75012 12.6569 11.0933 14 12.7501 14Z"
          fill={fill}
        />
        <path
          d="M5.25012 10C6.90698 10 8.25012 8.65685 8.25012 7C8.25012 5.34315 6.90698 4 5.25012 4C3.59327 4 2.25012 5.34315 2.25012 7C2.25012 8.65685 3.59327 10 5.25012 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SlidersVertical;
