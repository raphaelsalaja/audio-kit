import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareCode({
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
          d="M13.4697 1.21967C13.7626 0.926777 14.2374 0.926777 14.5303 1.21967L16.7803 3.46967C17.0732 3.76256 17.0732 4.23744 16.7803 4.53033L14.5303 6.78033C14.2374 7.07322 13.7626 7.07322 13.4697 6.78033C13.1768 6.48744 13.1768 6.01256 13.4697 5.71967L15.1893 4L13.4697 2.28033C13.1768 1.98744 13.1768 1.51256 13.4697 1.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5303 1.21967C11.8232 1.51256 11.8232 1.98744 11.5303 2.28033L9.81066 4L11.5303 5.71967C11.8232 6.01256 11.8232 6.48744 11.5303 6.78033C11.2374 7.07322 10.7626 7.07322 10.4697 6.78033L8.21967 4.53033C7.92678 4.23744 7.92678 3.76256 8.21967 3.46967L10.4697 1.21967C10.7626 0.926777 11.2374 0.926777 11.5303 1.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.40901 7.84099L7.15901 5.59099C6.28033 4.71231 6.28033 3.28769 7.15901 2.40901L7.56802 2H4.75C3.23079 2 2 3.23079 2 4.75V13.25C2 14.7692 3.23079 16 4.75 16H13.25C14.7692 16 16 14.7692 16 13.25V7.43197L15.591 7.84099C14.742 8.68995 13.3834 8.71866 12.5 7.92714C11.6166 8.71866 10.258 8.68995 9.40901 7.84099Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SquareCode;
