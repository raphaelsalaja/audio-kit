import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCopyPlus({
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
          d="M10.7501 4.5C7.30378 4.5 4.50008 7.3037 4.50008 10.75C4.50008 14.1963 7.30378 17 10.7501 17C14.1964 17 17.0001 14.1963 17.0001 10.75C17.0001 7.3037 14.1964 4.5 10.7501 4.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.50012 10.7499C4.50012 7.30364 7.30382 4.49994 10.7501 4.49994C11.5636 4.49994 12.3414 4.65618 13.0549 4.94023C12.1349 2.63406 9.88067 0.999992 7.25012 0.999992C3.80382 0.999992 1.00012 3.80369 1.00012 7.24999C1.00012 9.88062 2.63423 12.1348 4.9404 13.0547C4.65636 12.3412 4.50012 11.5635 4.50012 10.7499Z"
          fill={fill}
        />
        <path
          d="M11.5001 11.5L13.2501 11.5C13.6642 11.5 14.0001 11.1641 14.0001 10.75C14.0001 10.3359 13.6642 10 13.2501 10L11.5001 10L11.5001 8.25C11.5001 7.8359 11.1642 7.5 10.7501 7.5C10.336 7.5 10.0001 7.8359 10.0001 8.25L10.0001 10L8.25006 10C7.83598 10 7.50008 10.3359 7.50008 10.75C7.50008 11.1641 7.83598 11.5 8.25006 11.5L10.0001 11.5L10.0001 13.25C10.0001 13.6641 10.336 14 10.7501 14C11.1642 14 11.5001 13.6641 11.5001 13.25L11.5001 11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleCopyPlus;
