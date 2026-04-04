import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareLeft3({
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
          d="M9.00001 5.77192V2.74994C9.00001 2.45594 8.82801 2.18896 8.56101 2.06696C8.29301 1.94596 7.979 1.9899 7.758 2.1839L1.257 7.8509C1.095 7.9919 1.00101 8.19595 1.00001 8.41095C0.999008 8.62595 1.089 8.83094 1.249 8.97394L7.749 14.807C7.97 15.005 8.28601 15.0539 8.55601 14.9339C8.82601 14.8129 9.00001 14.545 9.00001 14.249V11.2759C13.296 11.5939 15.547 14.561 15.645 14.692C15.789 14.888 16.016 14.999 16.25 14.999C16.328 14.999 16.407 14.987 16.483 14.962C16.791 14.861 17 14.573 17 14.249C17 14.166 16.905 6.24392 9.00001 5.77192Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareLeft3;
