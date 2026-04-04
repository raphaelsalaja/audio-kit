import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Video2({
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
          d="M1 7.75C1 6.23079 2.23079 5 3.75 5H9.75C11.2692 5 12.5 6.23079 12.5 7.75V12.25C12.5 13.7692 11.2692 15 9.75 15H3.75C2.23079 15 1 13.7692 1 12.25V7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.4959 12.4014L15.2426 13.6224C16.0697 13.9898 17 13.3844 17 12.48V7.51899C17 6.61454 16.0695 6.00932 15.2423 6.37666L12.4958 7.59765C12.4986 7.64808 12.5 7.69888 12.5 7.75V12.25C12.5 12.3008 12.4986 12.3513 12.4959 12.4014Z"
          fill={fill}
        />
        <path
          d="M2.25 2C2.25 0.895786 3.14579 0 4.25 0C5.35421 0 6.25 0.895786 6.25 2C6.25 3.10421 5.35421 4 4.25 4C3.14579 4 2.25 3.10421 2.25 2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.25 4C10.078 4 10.75 3.328 10.75 2.5C10.75 1.672 10.078 1 9.25 1C8.422 1 7.75 1.672 7.75 2.5C7.75 3.328 8.422 4 9.25 4Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Video2;
