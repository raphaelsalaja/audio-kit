import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function XmasDecorations({
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
          d="M9 6.5C8.586 6.5 8.25 6.164 8.25 5.75V1.75C8.25 1.336 8.586 1 9 1C9.414 1 9.75 1.336 9.75 1.75V5.75C9.75 6.164 9.414 6.5 9 6.5Z"
          fill={secondaryfill}
        />
        <path
          d="M15.25 5.75C14.836 5.75 14.5 5.414 14.5 5V1.75C14.5 1.336 14.836 1 15.25 1C15.664 1 16 1.336 16 1.75V5C16 5.414 15.664 5.75 15.25 5.75Z"
          fill={secondaryfill}
        />
        <path
          d="M2.75 5.75C2.336 5.75 2 5.414 2 5V1.75C2 1.336 2.336 1 2.75 1C3.164 1 3.5 1.336 3.5 1.75V5C3.5 5.414 3.164 5.75 2.75 5.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9 8.25C9.861 8.25 10.654 8.528 11.307 8.991C11.424 8.859 11.5 8.69 11.5 8.5V6.75C11.5 5.785 10.715 5 9.75 5H8.25C7.285 5 6.5 5.785 6.5 6.75V8.5C6.5 8.69 6.577 8.859 6.693 8.991C7.346 8.528 8.138 8.25 9 8.25Z"
          fill={secondaryfill}
        />
        <path
          d="M15.25 8.75C16.4926 8.75 17.5 7.74264 17.5 6.5C17.5 5.25736 16.4926 4.25 15.25 4.25C14.0074 4.25 13 5.25736 13 6.5C13 7.74264 14.0074 8.75 15.25 8.75Z"
          fill={fill}
        />
        <path
          d="M2.75 8.75C3.99264 8.75 5 7.74264 5 6.5C5 5.25736 3.99264 4.25 2.75 4.25C1.50736 4.25 0.5 5.25736 0.5 6.5C0.5 7.74264 1.50736 8.75 2.75 8.75Z"
          fill={fill}
        />
        <path
          d="M9 7.5C6.381 7.5 4.25 9.631 4.25 12.25C4.25 14.869 6.381 17 9 17C11.619 17 13.75 14.869 13.75 12.25C13.75 9.631 11.619 7.5 9 7.5ZM9 9C10.533 9 11.813 10.07 12.154 11.5H5.846C6.187 10.07 7.467 9 9 9ZM9 15.5C7.467 15.5 6.187 14.43 5.846 13H12.154C11.813 14.43 10.533 15.5 9 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default XmasDecorations;
