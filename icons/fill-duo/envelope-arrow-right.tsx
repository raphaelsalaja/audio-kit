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
          d="M15.2803 10.7197C14.9874 10.4268 14.5126 10.4268 14.2197 10.7197C13.9268 11.0126 13.9268 11.4874 14.2197 11.7803L15.4393 13H12.25C11.8358 13 11.5 13.3358 11.5 13.75C11.5 14.1642 11.8358 14.5 12.25 14.5H15.4393L14.2197 15.7197C13.9268 16.0126 13.9268 16.4874 14.2197 16.7803C14.5126 17.0732 14.9874 17.0732 15.2803 16.7803L17.7803 14.2803C18.0732 13.9874 18.0732 13.5126 17.7803 13.2197L15.2803 10.7197Z"
          fill={fill}
        />
        <path
          d="M1 5.25C1 3.73079 2.23079 2.5 3.75 2.5H14.25C15.7692 2.5 17 3.73079 17 5.25V10.318L16.341 9.65901C15.4623 8.78033 14.0377 8.78033 13.159 9.65901C12.656 10.162 12.4409 10.844 12.5138 11.5H12.25C11.0074 11.5 10 12.5074 10 13.75C10 14.4568 10.3259 15.0875 10.8357 15.5H3.75C2.23079 15.5 1 14.2692 1 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.9689 4.83458L9.84534 8.76513C9.31888 9.05549 8.68127 9.05557 8.15481 8.76521L1.03104 4.83535C1.23087 3.513 2.37174 2.5 3.75001 2.5H14.25C15.628 2.5 16.7687 3.5126 16.9689 4.83458Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeArrowRight;
